// src/components/WebHeader.jsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import { Link } from 'expo-router'; // useRouter might not be needed if all nav is via Link

let logoSource;
try {
  logoSource = require('../../assets/images/logo.png'); 
} catch (e) {
  console.warn("WebHeader: Could not load logo.png. Ensure path is correct. Falling back to text logo.");
  logoSource = null; 
}

const WebHeader = () => {
  const navItems = [
    { name: 'Feed', href: '/(tabs)/feed' },
    { name: 'Gigs', href: '/(tabs)/gigs' },
    { name: 'Live', href: '/(tabs)/live' },
    { name: 'Messages', href: '/(tabs)/messages' },
    { name: 'My Profile', href: '/(tabs)/profile' }, 
  ];

  return (
    <View 
      className="bg-primary px-3 sm:px-4 py-2 shadow-md flex-row justify-between items-center border-b border-gray-700"
      style={Platform.OS === 'web' ? { position: 'sticky', top: 0, zIndex: 50 } : {}}
    >
      <Link href="/(tabs)/feed" asChild>
        <TouchableOpacity className="items-center justify-center h-10">
          {logoSource ? (
            <Image source={logoSource} className="h-8 w-8" resizeMode="contain" />
          ) : (
            <Text className="text-accent text-2xl font-bold">H</Text> 
          )}
        </TouchableOpacity>
      </Link>

      <View className="hidden md:flex flex-row space-x-3 lg:space-x-4 items-center">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} asChild>
            <TouchableOpacity>
              <Text className="text-white text-xs lg:text-sm font-medium">{item.name}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View className="flex-row items-center space-x-2 sm:space-x-3">
        <Link href="/create-post" asChild>
          <TouchableOpacity 
            className="bg-gray-700 p-1.5 sm:p-2 rounded-full"
            aria-label="Create Post"
          >
            <Text className="text-accent text-md sm:text-lg">✍️</Text> 
          </TouchableOpacity>
        </Link>
        <Link href="/create-gig" asChild>
          <TouchableOpacity 
            className="bg-gray-700 p-1.5 sm:p-2 rounded-full"
            aria-label="Create Gig"
          >
            <Text className="text-accent text-md sm:text-lg">💼</Text> 
          </TouchableOpacity>
        </Link>
        
        <Link href="/(tabs)/profile" asChild>
          <TouchableOpacity>
              <View className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-700 rounded-full items-center justify-center border border-gray-600">
                  <Text className="text-white text-xs">U</Text>
              </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default WebHeader;