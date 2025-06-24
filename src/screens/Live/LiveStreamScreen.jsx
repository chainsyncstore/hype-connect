import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import WebHeader from '../../components/WebHeader';

const LiveStreamScreen = () => {
  const router = useRouter();

  const streamTitle = "DJ Set - Chill Vibes";
  const viewers = 123;
  const totalEarnings = 15500;
  const comments = [
    { id: '1', user: 'User123', text: 'Great set! 🔥' },
    { id: '2', user: 'MusicFan', text: 'Love this track!' },
    { id: '3', user: 'CreativeCat', text: 'So inspiring!' },
  ];
  const tips = [
    { id: 't1', user: 'GenerousFan', amount: 5000 },
    { id: 't2', user: 'SupporterX', amount: 1000 },
  ];

  const handleSendComment = () => {
    alert("Comment sent (Demo)!");
  };

  const handleSendTip = () => {
    alert("Tip Sent (Demo)! Thanks for your support!");
  };

  const handleEndStream = () => {
    alert("Stream Ended (Demo)!");
  };

  return (
    <View className="flex-1 bg-primary text-white">
      <WebHeader />
      <View className="flex-row justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <Text className="text-white text-lg font-bold">{streamTitle} (Live)</Text>
        <TouchableOpacity onPress={handleEndStream} className="bg-red-500 rounded-md py-1 px-2">
          <Text className="text-white text-xs font-semibold">End Stream</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 md:flex-row">
        <View className="flex-1 md:w-2/3 bg-black items-center justify-center m-2 rounded-md relative">
          <View className="absolute top-2 left-2 bg-red-600 px-2 py-0.5 rounded z-10">
            <Text className="text-white text-xs font-bold">🔴 LIVE</Text>
          </View>
          <View className="absolute top-2 right-2 bg-black/50 px-2 py-0.5 rounded z-10">
            <Text className="text-white text-xs">👥 {viewers}</Text>
          </View>
          <Text className="text-gray-500 text-2xl">Live Video Placeholder</Text>
           <View className="absolute bottom-2 left-2 right-2 bg-black/50 p-1.5 rounded">
             <Text className="text-white text-sm font-semibold">{streamTitle}</Text>
             <Text className="text-accent text-xs">Earnings: ₦{totalEarnings.toLocaleString()}</Text>
           </View>
        </View>

        <View className="md:w-1/3 bg-gray-800 m-2 rounded-md p-3 flex flex-col">
          <View className="mb-3">
            <Text className="text-accent font-semibold text-sm mb-1">Recent Tips</Text>
            <View className="max-h-20 overflow-y-auto">
            {tips.map(tip => (
              <View key={tip.id} className="bg-accent/20 p-1 rounded mb-1">
                <Text className="text-xs text-accent">💰 {tip.user} tipped ₦{tip.amount.toLocaleString()}</Text>
              </View>
            ))}
            {tips.length === 0 && <Text className="text-gray-400 text-xs">No tips yet.</Text>}
            </View>
          </View>

          <Text className="text-white font-semibold text-sm mb-1">Comments</Text>
          <ScrollView className="flex-1 mb-2 bg-gray-700 rounded p-1.5 min-h-[100px] md:min-h-0">
            {comments.map(comment => (
              <View key={comment.id} className="mb-1.5">
                <Text className="text-xs">
                  <Text className="font-bold text-accent">{comment.user}: </Text>
                  <Text className="text-gray-200">{comment.text}</Text>
                </Text>
              </View>
            ))}
          </ScrollView>

          <View className="mt-auto">
            <TextInput
              className="bg-gray-700 text-white rounded-full px-3 py-2 text-xs mb-2"
              placeholder="Say something..."
              placeholderTextColor="#A0A0A0"
            />
            <View className="flex-row space-x-2">
                <TouchableOpacity
                    onPress={handleSendComment}
                    className="bg-gray-600 hover:bg-gray-500 flex-1 rounded-full py-2 items-center"
                    >
                    <Text className="text-white font-semibold text-xs">Send</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSendTip}
                    className="bg-accent hover:bg-yellow-600 flex-1 rounded-full py-2 items-center"
                    >
                    <Text className="text-primary font-semibold text-xs">💰 Send Tip</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LiveStreamScreen;
