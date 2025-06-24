// src/screens/Profile/EditProfileScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import WebHeader from '../../components/WebHeader'; // adjust path if component moves

// PRD Colors: #1B1B1E (background), #F5A623 (accent), #FFFFFF (text)

export default function EditProfileScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState(null);

  const pickAvatar = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions!');
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('Validation', 'Name cannot be empty.');
      return;
    }

    // TODO: integrate with backend API once available
    console.log('Profile saved (Demo):', { name, bio, avatar });
    Alert.alert('Success', 'Profile updated successfully!');

    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)/profile');
    }
  };

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }} className="flex-1">
        <View className="w-full max-w-lg p-5 mt-5">
          <Text className="text-white text-2xl font-bold mb-6 text-center">Edit Profile</Text>

          {/* Avatar picker */}
          <TouchableOpacity
            onPress={pickAvatar}
            className="self-center mb-6"
          >
            {avatar ? (
              <Image source={{ uri: avatar }} className="w-32 h-32 rounded-full" />
            ) : (
              <View className="w-32 h-32 rounded-full bg-gray-700 items-center justify-center">
                <Text className="text-3xl text-accent">📸</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Name */}
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3 mb-4"
            placeholder="Name"
            placeholderTextColor="#A0A0A0"
            value={name}
            onChangeText={setName}
          />

          {/* Bio */}
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3 h-28 mb-6 text-sm leading-relaxed"
            placeholder="Bio"
            placeholderTextColor="#A0A0A0"
            value={bio}
            onChangeText={setBio}
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity
            className="bg-accent py-3.5 rounded-full w-full items-center"
            onPress={handleSave}
          >
            <Text className="text-primary font-bold text-center text-md">Save Changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
