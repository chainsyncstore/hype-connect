import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ReportBlockModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Report or Block</Text>

          <TouchableOpacity style={styles.modalOption}>
            <View style={styles.iconContainer}>
              {/* Flag Icon */}
            </View>
            <Text style={styles.modalOptionText}>Report post</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalOption}>
            <View style={styles.iconContainer}>
              {/* SpeakerSlash Icon */}
            </View>
            <Text style={styles.modalOptionText}>Mute this creator</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalOption}>
            <View style={styles.iconContainer}>
              {/* Users Icon */}
            </View>
            <Text style={styles.modalOptionText}>Block this creator</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalOptionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 15,
  },
  cancelButtonText: {
    color: 'red',
    fontSize: 16,
  },
});

export default ReportBlockModal;
