import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'; // Added Image
import { useNavigation } from '@react-navigation/native';

// Assuming logo.png is in src/assets/ as per initial file listing
// For React Native Web, direct require might work or might need to be handled by bundler (Metro/Webpack)
// If it doesn't load, it will fall back to Text logo.
let logoSource;
try {
  logoSource = require('../assets/logo.png');
} catch (e) {
  console.warn("WebHeader: Could not load logo.png, falling back to text logo.");
  logoSource = null;
}


// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

const WebHeader = () => {
  const navigation = useNavigation();

  const navItems = [
    { name: 'Feed', route: 'MainContent' },
    { name: 'Gigs', route: 'GigsMarketplace' },
    { name: 'Live', route: 'LiveStream' },
    { name: 'Wallet', route: 'WalletScreen' },
    { name: 'Messages', route: 'MessagesScreen' },
    { name: 'Profile', route: 'PublicCreatorProfile', params: { creatorId: 'demoUser' } },
  ];

  return (
    <View className="bg-primary px-4 py-2 shadow-md flex-row justify-between items-center sticky top-0 z-50 border-b border-gray-700">
      {/* Logo */}
      <TouchableOpacity onPress={() => navigation.navigate('MainContent')} className="items-center justify-center h-10">
        {logoSource ? (
          <Image source={logoSource} className="h-8 w-8" resizeMode="contain" />
        ) : (
          <Text className="text-accent text-2xl font-bold">H</Text>
        )}
      </TouchableOpacity>

      {/* Navigation Links */}
      <View className="hidden md:flex flex-row space-x-3 lg:space-x-4 items-center">
        {navItems.map((item) => (
          <TouchableOpacity key={item.name} onPress={() => navigation.navigate(item.route, item.params)}>
            <Text className="text-white hover:text-accent text-xs lg:text-sm font-medium">{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Create Buttons & User Avatar */}
      <View className="flex-row items-center space-x-2 sm:space-x-3">
        <TouchableOpacity
          onPress={() => navigation.navigate('PostCreation')}
          className="bg-gray-700 p-1.5 sm:p-2 rounded-full hover:bg-gray-600"
          aria-label="Create Post"
        >
          <Text className="text-accent text-md sm:text-lg">✍️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('GigCreationModal')}
          className="bg-gray-700 p-1.5 sm:p-2 rounded-full hover:bg-gray-600"
          aria-label="Create Gig"
        >
          <Text className="text-accent text-md sm:text-lg">💼</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PublicCreatorProfile', { creatorId: 'currentUserDemo' })}>
            <View className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 rounded-full items-center justify-center border border-gray-600">
                 <Text className="text-white text-xs">U</Text>
            </View>
        </TouchableOpacity>
      </View>

      {/* TODO: Add a mobile menu for navItems and create buttons if screen is small */}
    </View>
  );
};

export default WebHeader;
