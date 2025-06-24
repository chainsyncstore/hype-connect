// src/screens/InterestsScreen.jsx
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import WebHeader from '../components/WebHeader';

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

const InterestsScreen = () => {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState([]);

  const allInterests = [
    'Music Production', 'Videography', 'Fashion', 'Editing',
    'Graphic Design', 'Photography', 'Illustration', 'Animation',
    'Writing', 'Content Creation', 'Social Media', 'Marketing',
    'Vocalist', 'Performance',
  ];

  // useEffect(() => {
  //   console.log('InterestsScreen mounted');
  //   return () => {
  //     console.log('InterestsScreen unmounted');
  //   };
  // }, []); // Original useEffect can be kept if needed for other logic, otherwise removed.

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(item => item !== interest)
        : [...prev, interest]
    );
  };

  const handleContinue = () => {
    console.log('Selected Interests:', selectedInterests);
    // Navigate to the success screen or next step in onboarding within the (auth) group or to tabs
    // Assuming a success screen is next in the auth flow for now.
    router.push('/(auth)/success'); 
  };

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      // Fallback if no back history, e.g., to signup or welcome
      router.replace('/(auth)/signup'); 
    }
  };

  return (
    <View className="flex-1 bg-primary text-white">
      <WebHeader />
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }} className="pt-5">
        <View className="flex-row items-center w-full px-4 py-4 self-start">
          <TouchableOpacity onPress={handleGoBack} className="p-2">
            <Text className="text-white text-2xl">{'<'}</Text>
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-white text-xl font-bold text-center">Interests</Text>
          </View>
          <View className="w-10" /> {/* Spacer for centering title */}
        </View>

        {/* Placeholder for progress dots - can be implemented with more complex UI if needed */}
        <View className="flex-row justify-center items-center py-5">
          <View className="w-2 h-2 rounded-full bg-gray-600 mx-1" />
          <View className="w-2.5 h-2.5 rounded-full bg-accent mx-1" />
          <View className="w-2 h-2 rounded-full bg-gray-600 mx-1" />
        </View>

        <Text className="text-white text-2xl sm:text-3xl font-bold text-center px-4 pb-3">
          What are your creative interests?
        </Text>
        <Text className="text-gray-300 text-sm sm:text-base text-center px-6 pb-8">
          Select all that apply to help us tailor your experience.
        </Text>

        <View className="flex-row flex-wrap justify-center px-4">
          {allInterests.map((interest) => {
            const isSelected = selectedInterests.includes(interest);
            return (
              <TouchableOpacity 
                key={interest} 
                className={`py-2 px-4 m-1.5 rounded-full border ${
                  isSelected ? 'bg-accent border-accent' : 'border-gray-600 border-accent'
                }`}
                onPress={() => toggleInterest(interest)}
              >
                <Text 
                  className={`${isSelected ? 'text-primary' : 'text-white'} text-sm font-medium`}
                >
                  {interest}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          className="bg-accent rounded-full py-3.5 px-12 mt-10 mb-5 w-4/5 sm:w-auto max-w-xs"
          onPress={handleContinue}
        >
          <Text className="text-primary text-lg font-bold text-center">Continue</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default InterestsScreen;
