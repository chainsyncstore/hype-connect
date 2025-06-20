import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigationBar = () => {
  const navigation = useNavigation(); // Hook for navigation

  return (
    <View style={styles.bottomNavContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('MainContent')}>
        <Text style={styles.navItemText}>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GigsMarketplace')}>
        <Text style={styles.navItemText}>💼</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LiveStream')}>
        <Text style={styles.navItemText}>📺</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
        <Text style={styles.navItemText}>💬</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
        <Text style={styles.navItemText}>💰</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#332a19', // Background color from original
    paddingVertical: 12,       // Vertical padding from original
    // Consider adding borderTopWidth and borderTopColor if needed for separation
    // borderTopWidth: 1,
    // borderTopColor: '#483a23', // Example color, adjust as needed
  },
  navItemText: {
    fontSize: 24, // Increased size for better visibility of emojis/icons
    color: '#FFFFFF', // Assuming white icons, adjust as needed
  },
  // Add other styles if individual items need more specific styling
  // navItem: {
  //   alignItems: 'center',
  // },
});

export default BottomNavigationBar;
