
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'; // Added Image
import { useNavigation } from '@react-navigation/native';

// Assuming your logo is in src/assets/logo.png as per file structure
// For web, you might need to ensure this path is resolvable or use a different import method
// For now, let's assume it works or we'll use a placeholder if it doesn't load.
// const logo = require('../assets/logo.png'); // This might not work well with Tailwind for web bg

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleJoinToConnect = () => {
    console.log('Navigating to SignUp');
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    console.log('Navigating to Login');
    navigation.navigate('Login');
  };

  // PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)
  // Existing styles had #221c11 as bg, #eead3e and #493b22 for buttons.
  // Will align with PRD.

  return (
    <View className="flex-1 justify-center items-center bg-primary p-4">
      {/* Logo - Using text H for now as in original, styled like logo */}
      <View className="w-24 h-24 bg-accent rounded-full items-center justify-center mb-8">
        {/* If using an actual image logo:
          <Image source={logo} className="w-20 h-20" resizeMode="contain" />
        */}
        <Text className="text-5xl font-bold text-primary">H</Text>
      </View>

      <Text className="text-white text-3xl font-bold text-center mb-2">
        Connect. <Text className="text-accent">Create.</Text> Cash Out.
      </Text>
      <Text className="text-gray-400 text-lg mb-8">For creators</Text>

      <View className="flex-col sm:flex-row">
        <TouchableOpacity
          className="bg-accent rounded-full py-3 px-8 m-2 w-64 sm:w-auto"
          onPress={handleJoinToConnect}
        >
          <Text className="text-primary text-lg font-bold text-center">Join to Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // Using a slightly darker shade of primary for secondary button background, or a border approach
          className="bg-gray-700 rounded-full py-3 px-8 m-2 w-64 sm:w-auto border border-accent"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg font-bold text-center">Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
