import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

const PostCreationModal = () => {
  const navigation = useNavigation();
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    console.log('Post text:', postText);
    // In a real app, you'd handle image/video upload and API call here
    alert('Post Created (Demo)!'); // Simple feedback for demo
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-primary p-4 pt-10">
      <ScrollView>
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-white text-2xl font-bold">Create Post</Text>
          <TouchableOpacity onPress={handleCancel}>
            <Text className="text-accent text-lg">Cancel</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-4">
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3 h-32"
            placeholder="What's on your mind?"
            placeholderTextColor="#A0A0A0"
            value={postText}
            onChangeText={setPostText}
            multiline
            textAlignVertical="top" // Ensures placeholder starts at the top for multiline
          />
        </View>

        <View className="mb-6">
          <TouchableOpacity className="bg-gray-700 border border-dashed border-accent rounded-lg p-6 items-center justify-center">
            <Text className="text-accent text-lg mb-1">🖼️ 🎬</Text>
            <Text className="text-accent">Upload Image/Video</Text>
            <Text className="text-gray-400 text-xs mt-1">(Feature upcoming)</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-4">
          <Text className="text-gray-400 text-xs mb-1 ml-1">Category (e.g., Music, Art, Video)</Text>
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3"
            placeholder="Add a category"
            placeholderTextColor="#A0A0A0"
          />
        </View>

        <TouchableOpacity
          className="bg-accent py-3 rounded-full"
          onPress={handlePost}
        >
          <Text className="text-primary font-bold text-center text-lg">Post</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PostCreationModal;
