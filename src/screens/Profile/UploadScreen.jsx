// src/screens/Profile/UploadScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import WebHeader from '../../components/WebHeader'; // Adjust path if WebHeader is elsewhere

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

export default function UploadScreen() {
  const router = useRouter();
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUpload = () => {
    if (!image && !caption.trim()) {
      Alert.alert('Demo', 'Please select an image/video or write a caption.');
      return;
    }
    console.log('Uploading (Demo):', { image, caption });
    Alert.alert('Demo Success', 'Content "uploaded" successfully!');
    if (router.canGoBack()) {
        router.back();
    } else {
        router.replace('/(tabs)/feed');
    }
  };

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }} className="flex-1">
        <View className="w-full max-w-lg p-5 mt-5">
          <Text className="text-white text-2xl font-bold mb-6 text-center">Create New Post</Text>
          
          <TouchableOpacity 
            onPress={pickImage} 
            className="mb-5 p-6 border-2 border-dashed border-gray-600 rounded-lg items-center justify-center border-accent min-h-[150px]"
          >
            {image ? (
              <Image source={{ uri: image }} className="w-full h-48 rounded-md" resizeMode="cover" />
            ) : (
              <View className="items-center">
                <Text className="text-accent text-4xl mb-2">🖼️</Text>
                <Text className="text-gray-300 text-center">Tap to pick an image or video</Text>
                <Text className="text-gray-500 text-xs mt-1">(from camera roll)</Text>
              </View>
            )}
          </TouchableOpacity>
          
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3 h-28 mb-6 text-sm leading-relaxed"
            placeholder="Write a caption..."
            placeholderTextColor="#A0A0A0"
            value={caption}
            onChangeText={setCaption}
            multiline
            textAlignVertical="top"
          />
          <TouchableOpacity
            className="bg-accent py-3.5 rounded-full w-full items-center"
            onPress={handleUpload}
          >
            <Text className="text-primary font-bold text-center text-md">Upload Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}