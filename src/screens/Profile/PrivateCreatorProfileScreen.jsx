import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import ProfileMenuModal from '../../modals/ProfileMenuModal'; // This should be the only, clean import for this modal
import WebHeader from '../../components/WebHeader';

const PrivateCreatorProfileScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log('PrivateCreatorProfileScreen mounted');
    return () => {
      console.log('PrivateCreatorProfileScreen unmounted');
    };
  }, []);

  return (
    <View className="flex-1 bg-[#1f1b14]">
      <WebHeader />
      <ScrollView>
        <View className="flex-row justify-end p-4">
          <TouchableOpacity
            className="p-2"
            onPress={() => setMenuVisible(true)}
          >
            <Text className="text-white text-2xl">⋮</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center p-4">
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-FWY39n52wWmXVptxh8AG6yRm_Y2kRVpLxqvVygnqB5rM4ER52rmEQNlYyfJEuwKFsmGxqOphcfkxmnK4aQC3zN3LUzh6gDFBJdUTdMRwdEHBLRa6kYUpAfb781_kxW1mGbPstBU6DDLrpMpyqyXS_nlS8FU0MAVrxhor1p0yuYiNwBFzMEe0PtnJbrZuL16hXSIz14X9PRPFHIsh89GULISyz4kyzhWkMH3yObTp6_3IvB_7KMVPsvqdf2sgMFy4Orgg0WtTfj8',
            }}
            className="w-32 h-32 rounded-full mb-4"
          />
          <Text className="text-white text-2xl font-bold">Ethan Blake</Text>
          <Text className="text-[#bfb39b] text-base">Illustrator</Text>
          <Text className="text-[#bfb39b] text-base">Based in San Francisco</Text>
        </View>

        <View className="flex-row justify-around p-4">
          <TouchableOpacity
            className="bg-[#41392a] p-3 rounded-lg"
            onPress={() => router.push('/(tabs)/profile/edit-profile')}
          >
            <Text className="text-white font-bold">Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-[#f3e9d7] p-3 rounded-lg"
            onPress={() => router.push('/(tabs)/live')}
          >
            <Text className="text-[#1f1b14] font-bold">Go Live</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-around p-4">
          <View className="items-center">
            <Text className="text-white text-xl font-bold">123</Text>
            <Text className="text-[#bfb39b] text-sm">Posts</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-xl font-bold">456</Text>
            <Text className="text-[#bfb39b] text-sm">Followers</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-xl font-bold">789</Text>
            <Text className="text-[#bfb39b] text-sm">Following</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-xl font-bold">4.5</Text>
            <Text className="text-[#bfb39b] text-sm">Rating</Text>
          </View>
        </View>

        <View className="flex-row justify-around border-b border-[#5d523c] py-2">
          <Text className="text-white font-bold">Posts</Text>
          <Text className="text-[#bfb39b]">About</Text>
          <Text className="text-[#bfb39b]">Skills</Text>
        </View>

        <View className="p-4">{/* Future post grid content */}</View>
      </ScrollView>

      <ProfileMenuModal
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </View>
  );
};

export default PrivateCreatorProfileScreen;
