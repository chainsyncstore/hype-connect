import React, { useEffect } from 'react';
import ApiService from '@services/api';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

const ProfileMenuModal = ({ visible, onClose, navigation }) => {

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <View style={styles.closeIndicator} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              onClose();
              navigation.navigate('CreatorEarnings');
            }}
          >
            <Text style={styles.menuText}>View Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Account Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Manage Gigs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Withdraw Funds</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Support & Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={async () => {
              await ApiService.logout();
              onClose();
              navigation.navigate('Welcome');
            }}
          >
            <Text style={styles.menuText}>Log Out</Text>
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
  container: {
    backgroundColor: '#1f1b14',
    paddingBottom: 20,
  },
  closeButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  closeIndicator: {
    width: 36,
    height: 4,
    backgroundColor: '#5d523c',
    borderRadius: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#41392a',
  },
  menuText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
});

export default ProfileMenuModal;
