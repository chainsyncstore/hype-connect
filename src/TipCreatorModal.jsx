import React from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

const TipCreatorModal = ({ visible, onClose, onSendTip }) => {
  const handleClose = () => {
    console.log('Close button pressed');
    onClose();
  };

  const handleSendTip = () => {
    console.log('Send Tip button pressed');
    onSendTip();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <View style={styles.closeIndicator} />
          </TouchableOpacity>
          <Text style={styles.title}>Send a Tip</Text>
          <Text style={styles.subtitle}>Show your appreciation for great content.</Text>

          <ScrollView horizontal contentContainerStyle={styles.amountContainer}>
            {[500, 1000, 5000].map((amount) => (
              <TouchableOpacity key={amount} style={styles.amountButton}>
                <Text style={styles.amountText}>₦{amount}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TextInput
            style={styles.input}
            placeholder="Enter custom amount"
            placeholderTextColor="#c9b592"
            keyboardType="numeric"
          />

          <View style={styles.paymentMethodContainer}>
            <View style={styles.paymentMethodIcon}>
              {/* Add your payment method icon here */}
            </View>
            <Text style={styles.paymentMethodText}>Payment Method</Text>
            <Text style={styles.paymentMethodName}>Flutterwave</Text>
          </View>

          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Add a message (optional)"
            placeholderTextColor="#c9b592"
            multiline
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSendTip}>
            <Text style={styles.sendButtonText}>Send Tip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20, 20, 20, 0.4)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#221c11',
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  closeButton: {
    alignItems: 'center',
    marginBottom: 16,
  },
  closeIndicator: {
    width: 36,
    height: 4,
    backgroundColor: '#675332',
    borderRadius: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  amountButton: {
    backgroundColor: '#483a23',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
  },
  amountText: {
    color: 'white',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#332a19',
    borderColor: '#675332',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    padding: 12,
    marginBottom: 16,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#483a23',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  paymentMethodIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#675332',
    borderRadius: 12,
  },
  paymentMethodText: {
    color: 'white',
    fontSize: 16,
  },
  paymentMethodName: {
    color: 'white',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#eead3e',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#221c11',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TipCreatorModal;
