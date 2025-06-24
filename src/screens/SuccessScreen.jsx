import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import WebHeader from '../components/WebHeader';

const SuccessScreen = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View className="flex-1 bg-[#221c11] justify-center items-center">
      <WebHeader />
      <Text className="text-white text-2xl font-bold text-center px-4 pb-3 pt-5">Welcome to the Hype!</Text>
      <Text className="text-white text-base text-center px-4 pb-8">
        Your creative journey starts now. Explore the feed to connect with
        fellow artists and discover exciting opportunities.
      </Text>
      <TouchableOpacity
        className="bg-[#eead3e] rounded-full py-3.5 px-12"
        onPress={() => router.push('/(tabs)/feed')}
      >
        <Text className="text-[#221c11] text-lg font-bold text-center">Explore the Feed</Text>
      </TouchableOpacity>
      <View className="h-1.5 bg-[#221c11]" />
    </View>
  );
};


export default SuccessScreen;
