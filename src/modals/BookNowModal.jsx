// src/modals/BookNowModal.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native'; // Using RN components for better structure
import { useRouter, useLocalSearchParams } from 'expo-router';

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

const BookNowModal = () => {
  const router = useRouter();
  const params = useLocalSearchParams(); // Get params passed via navigation

  const gigTitle = params.gigTitle || "Service/Gig Title Placeholder";
  const creatorName = params.creatorName || "Creator Name Placeholder";
  const estimatedPrice = params.price ? parseInt(params.price, 10) : 0;

  const [customNote, setCustomNote] = useState('');
  const [selectedService, setSelectedService] = useState(''); // Placeholder for service selection if needed
  const [dateTime, setDateTime] = useState(''); // Placeholder for date/time

  // The component is always 'visible' when routed to by expo-router's modal presentation.
  // Closing is handled by router.back().

  const handleContinueToPayment = () => {
    console.log('Booking Details:', { gigTitle, creatorName, estimatedPrice, selectedService, dateTime, customNote });
    Alert.alert('Demo', 'Proceeding to Payment (Demo)!');
    // In a real app, navigate to payment flow
    // For now, just go back
    router.back();
  };

  return (
    // For expo-router modals, the screen itself is the modal. 
    // The fixed positioning and overlay are typically handled by the navigator's modal presentation style.
    // We'll style the content container.
    <View className="flex-1 justify-end bg-transparent">
      <TouchableOpacity 
        className="flex-1 absolute inset-0 bg-black/50" 
        onPress={() => router.back()} // Close on overlay press
        activeOpacity={1}
      />
      <View className="bg-primary rounded-t-2xl p-4 max-h-[80vh]">
        <TouchableOpacity onPress={() => router.back()} className="items-center py-2 mb-2">
          <View className="h-1.5 w-10 rounded-full bg-gray-600" />
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-white text-xl sm:text-2xl font-bold text-left pb-3 pt-2">Book Now</Text>
          
          <View className="bg-gray-800 p-3 rounded-lg mb-4">
            <Text className="text-accent text-md font-semibold mb-0.5">Service:</Text>
            <Text className="text-white text-lg mb-0.5">{gigTitle}</Text>
            <Text className="text-gray-400 text-xs">with {creatorName}</Text>
          </View>

          {/* Placeholder for service selection if this modal is generic */}
          {/* <Text className="text-gray-300 text-sm mb-1 ml-1">Select a service</Text>
          <TextInput 
            className="bg-gray-700 text-white rounded-lg p-3 mb-3 text-sm" 
            placeholder="e.g., Beat Production (if applicable)"
            placeholderTextColor="#A0A0A0"
            value={selectedService}
            onChangeText={setSelectedService}
          /> */}

          <Text className="text-gray-300 text-sm mb-1 ml-1">Preferred Date & Time (Optional)</Text>
          <TextInput 
            className="bg-gray-700 text-white rounded-lg p-3 mb-3 text-sm" 
            placeholder="e.g., Next Tuesday around 3 PM"
            placeholderTextColor="#A0A0A0"
            value={dateTime}
            onChangeText={setDateTime}
          />

          <Text className="text-gray-300 text-sm mb-1 ml-1">Custom Note or Request</Text>
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3 h-24 mb-4 text-sm leading-relaxed"
            placeholder="Any specific details or requirements?"
            placeholderTextColor="#A0A0A0"
            value={customNote}
            onChangeText={setCustomNote}
            multiline
            textAlignVertical="top"
          />

          <View className="border-t border-gray-700 pt-3 mb-4">
            <Text className="text-white text-md font-semibold mb-1">Estimated Cost</Text>
            <Text className="text-accent text-2xl font-bold">
              {estimatedPrice > 0 ? `₦${estimatedPrice.toLocaleString()}` : 'N/A'}
            </Text>
            {estimatedPrice === 0 && <Text className="text-gray-400 text-xs">(Price to be confirmed with creator)</Text>}
          </View>

          <TouchableOpacity 
            className="bg-accent rounded-full py-3.5 px-5 w-full items-center mb-3"
            onPress={handleContinueToPayment}
          >
            <Text className="text-primary font-bold text-center text-md">Continue to Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-gray-700 rounded-full py-3.5 px-5 w-full items-center mb-4"
            onPress={() => router.back()}
          >
            <Text className="text-white font-bold text-center text-md">Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default BookNowModal;