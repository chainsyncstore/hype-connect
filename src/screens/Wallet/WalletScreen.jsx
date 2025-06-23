import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
-import ApiService from './services/api';
+import ApiService from '../../services/api';

const WalletScreen = () => {
  const navigation = useNavigation();

  const [walletData, setWalletData] = useState({
    balance: 0,
    totalEarnings: 0,
    pendingEarnings: 0,
  });
  const [transactions, setTransactions] = useState([]);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    bankName: '',
    accountName: '',
  });

  useEffect(() => {
    loadWalletData();
  }, []);

  const loadWalletData = async () => {
    try {
      const data = await ApiService.getWallet();
      setWalletData(data);
      setTransactions(data.transactions || []);
    } catch (error) {
      console.error('Failed to load wallet data:', error);
      // Mock data for demo
      setWalletData({
        balance: 125000,
        totalEarnings: 350000,
        pendingEarnings: 45000,
      });
      setTransactions([
        {
          id: 1,
          type: 'gig_payment',
          amount: 50000,
          description: 'Beat production for Artiste X',
          date: '2024-01-15',
          status: 'completed',
        },
        {
          id: 2,
          type: 'tip',
          amount: 2500,
          description: 'Tip from live stream',
          date: '2024-01-14',
          status: 'completed',
        },
        {
          id: 3,
          type: 'withdrawal',
          amount: -75000,
          description: 'Withdrawal to bank account',
          date: '2024-01-12',
          status: 'completed',
        },
      ]);
    }
  };

  const handleWithdrawal = async () => {
    const amount = parseInt(withdrawAmount);
    if (!amount || amount < 5000) {
      Alert.alert('Error', 'Minimum withdrawal is ₦5,000');
      return;
    }

    if (amount > walletData.balance) {
      Alert.alert('Error', 'Insufficient balance');
      return;
    }

    if (!bankDetails.accountNumber || !bankDetails.bankName) {
      Alert.alert('Error', 'Please fill in all bank details');
      return;
    }

    try {
      await ApiService.withdrawFunds({
        amount,
        bankDetails,
      });

      Alert.alert(
        'Success',
        'Withdrawal request submitted! Funds will be transferred within 24 hours.'
      );
      setShowWithdrawModal(false);
      setWithdrawAmount('');
      setBankDetails({ accountNumber: '', bankName: '', accountName: '' });
      loadWalletData();
    } catch (error) {
      console.error('Withdrawal failed:', error);
      Alert.alert('Error', 'Withdrawal failed. Please try again.');
    }
  };

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <View style={styles.transactionRight}>
        <Text
          style={[
            styles.transactionAmount,
            { color: item.amount > 0 ? '#4CAF50' : '#FF4444' },
          ]}
        >
          {item.amount > 0 ? '+' : ''}₦{Math.abs(item.amount).toLocaleString()}
        </Text>
        <Text style={styles.transactionStatus}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>
          ₦{walletData.balance.toLocaleString()}
        </Text>
        <TouchableOpacity
          style={styles.withdrawButton}
          onPress={() => setShowWithdrawModal(true)}
        >
          <Text style={styles.withdrawButtonText}>Withdraw Funds</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Earnings</Text>
          <Text style={styles.statAmount}>
            ₦{walletData.totalEarnings.toLocaleString()}
          </Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Pending</Text>
          <Text style={styles.statAmount}>
            ₦{walletData.pendingEarnings.toLocaleString()}
          </Text>
        </View>
      </View>

      <View style={styles.transactionsSection}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Modal
        visible={showWithdrawModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowWithdrawModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.withdrawModal}>
            <Text style={styles.modalTitle}>Withdraw Funds</Text>

            <TextInput
              style={styles.input}
              placeholder="Withdrawal amount (₦)"
              placeholderTextColor="#c0b29b"
              value={withdrawAmount}
              onChangeText={setWithdrawAmount}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Account Number"
              placeholderTextColor="#c0b29b"
              value={bankDetails.accountNumber}
              onChangeText={text =>
                setBankDetails({ ...bankDetails, accountNumber: text })
              }
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Bank Name"
              placeholderTextColor="#c0b29b"
              value={bankDetails.bankName}
              onChangeText={text =>
                setBankDetails({ ...bankDetails, bankName: text })
              }
            />

            <TextInput
              style={styles.input}
              placeholder="Account Name"
              placeholderTextColor="#c0b29b"
              value={bankDetails.accountName}
              onChangeText={text =>
                setBankDetails({ ...bankDetails, accountName: text })
              }
            />

            <Text style={styles.feeNotice}>
              Withdrawal fee: ₦100 | Processing time: 24 hours
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setShowWithdrawModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleWithdrawal}
              >
                <Text style={styles.confirmButtonText}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WalletScreen;