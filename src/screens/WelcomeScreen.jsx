// src/screens/WelcomeScreen.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router
import WebHeader from '../components/WebHeader';

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

const WelcomeScreen = () => {
  // The useEffect for touchstart/touchend has been removed.

  return (
    <View className="flex-1 justify-center items-center bg-primary p-4">
      <WebHeader />
      <View className="w-24 h-24 bg-accent rounded-full items-center justify-center mb-8">
        <Text className="text-primary text-5xl font-bold">H</Text>
      </View>
      
      <Text className="text-white text-3xl font-bold text-center mb-2">
        Connect. <Text className="text-accent">Create.</Text> Cash Out.
      </Text>
      <Text className="text-gray-400 text-lg mb-8">For creators</Text>
      
      <View className="flex-col sm:flex-row">
        <Link href="/(auth)/signup" asChild>
          <TouchableOpacity
            className="bg-accent rounded-full py-3 px-8 m-2 w-64 sm:w-auto"
          >
            <Text className="text-primary text-lg font-bold text-center">Join to Connect</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(auth)/login" asChild>
          <TouchableOpacity
            className="bg-gray-700 rounded-full py-3 px-8 m-2 w-64 sm:w-auto border border-accent"
          >
            <Text className="text-white text-lg font-bold text-center">Log In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default WelcomeScreen;
