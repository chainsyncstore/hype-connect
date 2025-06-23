import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

const BookingModal = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const { gigId, creatorName } = route.params || {}; // Example: Get gig/creator details if passed

  // Using static data for demo as gigId/creatorName might not always be passed in Phase 1
  const gigTitle = route.params?.gigTitle || "Service/Gig Title Placeholder";
  const creator = route.params?.creatorName || "Creator Name Placeholder";


  const [message, setMessage] = useState('');

  const handleConfirmBooking = () => {
    console.log('Confirming Booking for:', { gigTitle, creator, message });
    alert('Booking Confirmed & Payment Process Initiated (Demo)!');
    // Potentially navigate to a success screen or back to profile/gigs
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-primary p-4 pt-10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-white text-2xl font-bold">Book Service</Text>
          <TouchableOpacity onPress={handleCancel}>
            <Text className="text-accent text-lg">Cancel</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-gray-800 p-4 rounded-lg mb-6">
          <Text className="text-accent text-lg font-semibold mb-1">You are booking:</Text>
          <Text className="text-white text-xl mb-1">{gigTitle}</Text>
          <Text className="text-gray-400 text-sm">with {creator}</Text>
        </View>

        <View className="mb-4">
          <Text className="text-gray-300 text-sm mb-1 ml-1">Message to Creator (Optional)</Text>
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3 h-24"
            placeholder="Discuss project details, scope, timeline..."
            placeholderTextColor="#A0A0A0"
            value={message}
            onChangeText={setMessage}
            multiline
            textAlignVertical="top"
          />
        </View>

        <View className="bg-gray-700 p-4 rounded-lg mb-6">
            <Text className="text-gray-300 text-sm leading-relaxed">
                <Text className="font-bold text-accent">Secure Payments:</Text> Your payment will be held securely in escrow by Hype Connect and released to the creator upon successful completion and your approval of the work.
            </Text>
        </View>

        <View className="mb-4">
            <Text className="text-gray-400 text-xs text-center mb-1">Estimated Price: <Text className="font-bold text-white">₦{route.params?.price?.toLocaleString() || 'XX,XXX'}</Text></Text>
             <Text className="text-gray-400 text-xs text-center mb-3">(Final price to be confirmed with creator based on scope)</Text>
        </View>


        <TouchableOpacity
          className="bg-accent py-3 rounded-full mb-4"
          onPress={handleConfirmBooking}
        >
          <Text className="text-primary font-bold text-center text-lg">Confirm Booking & Proceed to Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-gray-600 py-3 rounded-full mb-10"
          onPress={handleCancel}
        >
          <Text className="text-white font-bold text-center text-lg">Cancel Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BookingModal;
