import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import WebHeader from '../../components/WebHeader';

const WalletScreen = () => {
  const router = useRouter();

  const [walletData, setWalletData] = useState({
    balance: 125000,
    totalEarnings: 350000,
    pendingEarnings: 45000,
  });
  const [transactions, setTransactions] = useState([
    { id: '1', type: 'gig_payment', amount: 50000, description: 'Beat production for Artiste X', date: '2024-07-15', status: 'completed' },
    { id: '2', type: 'tip', amount: 2500, description: 'Tip from live stream - DJ Set', date: '2024-07-14', status: 'completed' },
    { id: '3', type: 'withdrawal', amount: -75000, description: 'Withdrawal to bank account', date: '2024-07-12', status: 'completed' },
    { id: '4', type: 'gig_payment', amount: 30000, description: 'Logo Design for Startup Y', date: '2024-07-10', status: 'pending' },
  ]);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '', bankName: '', accountName: '',
  });

  const handleWithdrawal = () => {
    if (!withdrawAmount || !bankDetails.accountNumber || !bankDetails.bankName || !bankDetails.accountName) {
      Alert.alert('Demo', 'Please fill all fields in the modal.');
      return;
    }
    Alert.alert('Demo', 'Withdrawal request submitted (Demo)!');
    setShowWithdrawModal(false);
    setWithdrawAmount('');
    setBankDetails({ accountNumber: '', bankName: '', accountName: '' });
  };

  const renderTransaction = ({ item }) => (
    <View className="bg-gray-800 p-3 rounded-lg mb-2 flex-row justify-between items-center">
      <View className="flex-1">
        <Text className="text-white text-sm font-medium">{item.description}</Text>
        <Text className="text-gray-400 text-xs">{item.date} - <Text className="capitalize">{item.status}</Text></Text>
      </View>
      <Text className={`text-sm font-semibold ${item.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
        {item.amount > 0 ? '+' : ''}₦{Math.abs(item.amount).toLocaleString()}
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-primary text-white">
      <WebHeader />
      {/* Screen specific title below WebHeader */}
      <View className="px-4 pt-4 pb-2">
        <Text className="text-white text-2xl font-bold">Wallet</Text>
      </View>

      {/* Balance Card */}
      <View className="bg-accent mx-4 rounded-xl p-5 items-center mb-5 shadow-lg">
        <Text className="text-sm text-primary mb-1">Available Balance</Text>
        <Text className="text-3xl font-bold text-primary mb-4">
          ₦{walletData.balance.toLocaleString()}
        </Text>
        <TouchableOpacity
          className="bg-primary rounded-full py-2.5 px-6"
          onPress={() => setShowWithdrawModal(true)}
        >
          <Text className="text-accent font-bold text-sm">Withdraw Funds</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Container */}
      <View className="flex-row px-4 mb-6 space-x-3">
        <View className="flex-1 bg-gray-800 rounded-lg p-3 items-center">
          <Text className="text-xs text-gray-400 mb-1">Total Earnings</Text>
          <Text className="text-md font-bold text-white">
            ₦{walletData.totalEarnings.toLocaleString()}
          </Text>
        </View>
        <View className="flex-1 bg-gray-800 rounded-lg p-3 items-center">
          <Text className="text-xs text-gray-400 mb-1">Pending</Text>
          <Text className="text-md font-bold text-white">
            ₦{walletData.pendingEarnings.toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Transactions Section */}
      <View className="flex-1 px-4">
        <Text className="text-lg font-semibold text-white mb-3">Recent Transactions</Text>
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text className="text-gray-400 text-center mt-5">No transactions yet.</Text>}
        />
      </View>

      {/* Withdraw Modal */}
      <Modal
        visible={showWithdrawModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowWithdrawModal(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/70 px-5">
          <ScrollView className="bg-gray-800 rounded-xl p-5 w-full max-w-md max-h-[80vh]">
            <Text className="text-white text-xl font-bold text-center mb-5">Withdraw Funds</Text>

            <Text className="text-gray-300 text-xs mb-1 ml-1">Amount (₦)</Text>
            <TextInput
              className="bg-gray-700 text-white rounded-lg p-3 mb-3 text-sm"
              placeholder="Min. ₦5,000"
              placeholderTextColor="#A0A0A0"
              value={withdrawAmount}
              onChangeText={setWithdrawAmount}
              keyboardType="numeric"
            />

            <Text className="text-gray-300 text-xs mb-1 ml-1">Account Number</Text>
            <TextInput
              className="bg-gray-700 text-white rounded-lg p-3 mb-3 text-sm"
              placeholder="Enter account number"
              placeholderTextColor="#A0A0A0"
              value={bankDetails.accountNumber}
              onChangeText={text => setBankDetails(prev => ({ ...prev, accountNumber: text }))}
              keyboardType="numeric"
            />

            <Text className="text-gray-300 text-xs mb-1 ml-1">Bank Name</Text>
            <TextInput
              className="bg-gray-700 text-white rounded-lg p-3 mb-3 text-sm"
              placeholder="Select or enter bank name"
              placeholderTextColor="#A0A0A0"
              value={bankDetails.bankName}
              onChangeText={text => setBankDetails(prev => ({ ...prev, bankName: text }))}
            />

            <Text className="text-gray-300 text-xs mb-1 ml-1">Account Name</Text>
            <TextInput
              className="bg-gray-700 text-white rounded-lg p-3 mb-4 text-sm"
              placeholder="Account holder's name"
              placeholderTextColor="#A0A0A0"
              value={bankDetails.accountName}
              onChangeText={text => setBankDetails(prev => ({ ...prev, accountName: text }))}
            />

            <Text className="text-gray-400 text-xs text-center mb-4">
              Withdrawal fee: ₦100 (Demo) | Processing time: 24 hours (Demo)
            </Text>

            <View className="flex-row space-x-3">
              <TouchableOpacity
                className="flex-1 bg-gray-600 rounded-lg py-3 items-center"
                onPress={() => setShowWithdrawModal(false)}
              >
                <Text className="text-white font-semibold text-sm">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 bg-accent rounded-lg py-3 items-center"
                onPress={handleWithdrawal}
              >
                <Text className="text-primary font-semibold text-sm">Withdraw</Text>
              </TouchableOpacity>
            </View>
            <View className="h-5"/>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default WalletScreen;
