const express = require('express');
const Router = express.Router;
const Flutterwave = require('flutterwave-node-v3');
const supabase = require('../supabaseClient');

const router = Router();

// Helper to init Flutterwave SDK
function initFlw() {
  const { FLW_PUBLIC_KEY, FLW_SECRET_KEY } = process.env;
  if (!FLW_PUBLIC_KEY || !FLW_SECRET_KEY) throw new Error('Flutterwave keys missing');
  return new Flutterwave(FLW_PUBLIC_KEY, FLW_SECRET_KEY);
}

// POST /api/bookings/pay  { gigId, amount, currency, customer: {email, name} }
router.post('/bookings/pay', async (req, res) => {
  try {
    const { gigId, amount, currency = 'NGN', customer } = req.body;
    if (!gigId || !amount || !customer?.email) {
      return res.status(400).json({ error: 'gigId, amount, customer.email required' });
    }

    // Verify gig exists & status === 'pending'
    const { data: gig, error } = await supabase.from('gigs').select('*').eq('id', gigId).single();
    if (error) throw error;
    if (!gig) return res.status(404).json({ error: 'Gig not found' });
    if (gig.status !== 'pending') return res.status(400).json({ error: 'Gig not available for booking' });

    const flw = initFlw();
    const txRef = `gig_${gigId}_${Date.now()}`;

    const payload = {
      tx_ref: txRef,
      amount,
      currency,
      redirect_url: `${process.env.BASE_URL}/payment-success`,
      customer,
      customizations: {
        title: 'Hype Connect Booking',
        description: `Payment for gig ${gigId}`,
      },
    };

    const response = await flw.PaymentInitiate.create(payload);

    // Store tx_ref in gig row
    await supabase.from('gigs').update({ tx_ref: txRef }).eq('id', gigId);

    return res.json({ link: response.data.link });
  } catch (err) {
    console.error('Error initiating payment', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
});

// Flutterwave Webhook
router.post('/webhooks/flw', express.raw({ type: '*/*' }), async (req, res) => {
  const hash = req.headers['verif-hash'];
  if (!hash || hash !== process.env.FLW_HASH) return res.status(401).end();

  try {
    const payload = JSON.parse(req.body.toString());
    const { tx_ref, status } = payload.data;
    if (status === 'successful') {
      await supabase.from('gigs').update({ status: 'accepted' }).eq('tx_ref', tx_ref);
    }
  } catch (err) {
    console.error('FLW webhook handling failed', err);
  }
  res.status(200).end();
});

// POST /api/bookings/:gigId/tip  { amount, currency, recipientAccount }
router.post('/bookings/:gigId/tip', async (req, res) => {
  try {
    const { gigId } = req.params;
    const { amount, currency = 'NGN' } = req.body;
    if (!amount) return res.status(400).json({ error: 'amount required' });

    // Fetch gig and creator payout data
    const { data: gig, error: gigErr } = await supabase.from('gigs').select('*').eq('id', gigId).single();
    if (gigErr) throw gigErr;
    const creatorId = gig.creator_id;
    const { data: payout } = await supabase.from('payout_accounts').select('*').eq('creator_id', creatorId).single();
    if (!payout) return res.status(400).json({ error: 'Creator payout account not set' });

    const flw = initFlw();
    const transferPayload = {
      account_bank: payout.bank_code,
      account_number: payout.account_number,
      amount,
      currency,
      reference: `tip_${gigId}_${Date.now()}`,
      debit_currency: currency,
    };

    const transferRes = await flw.Transfer.initiate(transferPayload);

    // Update gig tip total
    const newTip = (gig.tip_cents || 0) + Math.round(amount * 100);
    await supabase.from('gigs').update({ tip_cents: newTip }).eq('id', gigId);

    res.json({ success: true, id: transferRes.data.id });
  } catch (err) {
    console.error('Error sending tip', err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
});

module.exports = router;
