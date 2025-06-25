require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bookingsRouter = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', bookingsRouter);

app.get('/health', (_, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Hype Connect server listening on port ${PORT} 🚀`);
});
