import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import WebHeader from '../../components/WebHeader';

const PublicCreatorProfileScreen = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('PublicCreatorProfileScreen mounted');
    return () => console.log('PublicCreatorProfileScreen unmounted');
  }, []);

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      <View className="flex-row justify-between items-center px-4 py-3">
        <TouchableOpacity className="p-2" onPress={() => router.back()}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24' }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <View className="flex-1" />
        <TouchableOpacity
          className="p-2"
          onPress={() => console.log('Share action')}
        >
          <Image
            source={{ uri: 'https://via.placeholder.com/24' }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle="pb-4">
        <View className="items-center mt-4">
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUsD4PV-NWVkwPYLn09JGAUVY_qh6_Cf88fW63-yK_4QsqCPo1T6b2qD3X3vp7x9Zb5s9BVHb_uzo9vtLk0htm-tNV7314rrKkH34YaMPziRnqgwHo4l0hWhbemB-9Huimbkx5XaokEynCNdoCSXrUFMtkBIbqsVxPCgHb8VmGfiWao2q13_21nx3Wjo3eC8V8HYaSvi6pcNfV_ELSzy1YV_ZuqdCAzSPL4YsPnN_XKQbs2A1G8KjwGDWgtonn4sTEw6wrMJRwaXE',
            }}
            className="w-24 h-24 rounded-full mb-3"
          />
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">Ethan Carter</Text>
            <Text className="text-gray-400 text-base">@ethan_carter</Text>
            <Text className="text-accent text-sm mt-1">Producer | Photographer</Text>
          </View>
        </View>

        <View className="flex-row justify-center mt-4 mb-6">
          <TouchableOpacity className="bg-accent px-6 py-2 rounded-full mx-2">
            <Text className="text-primary font-bold">Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-700 px-6 py-2 rounded-full mx-2 border border-accent">
            <Text className="text-white font-bold">Message</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-around border-t border-b border-gray-700 py-3 mb-4">
          <View className="items-center">
            <Text className="text-white text-lg font-bold">1.2K</Text>
            <Text className="text-gray-400 text-xs">Followers</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-lg font-bold">500</Text>
            <Text className="text-gray-400 text-xs">Following</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-lg font-bold">25</Text>
            <Text className="text-gray-400 text-xs">Gigs</Text>
          </View>
        </View>

        <View className="px-4 mb-4">
          <Text className="text-white text-base leading-relaxed">
            Passionate about creating immersive soundscapes and capturing raw
            emotions through the lens. Specializing in electronic music
            production and street photography. Let's collaborate!
          </Text>
        </View>

        <View className="flex-row justify-around border-t border-b border-gray-700 py-3 mb-4">
          <TouchableOpacity className={`flex-1 items-center py-2 ${true ? 'border-b-2 border-accent' : ''}`}>
            <Text className={`${true ? 'text-accent' : 'text-gray-400'} font-semibold`}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity className={`flex-1 items-center py-2 ${false ? 'border-b-2 border-accent' : ''}`}>
            <Text className={`${false ? 'text-accent' : 'text-gray-400'} font-semibold`}>Gigs</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row flex-wrap justify-between px-2">
          {[
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
          ].map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              className="w-[48%] h-40 rounded-lg mb-3"
            />
          ))}
        </View>
      </ScrollView>

      <View className="flex-row justify-around items-center bg-gray-800 py-3">
        <TouchableOpacity className="items-center" onPress={() => router.push('/(tabs)/feed')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => router.push('/(tabs)/feed')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => router.push('/create-post')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => router.push('/(tabs)/messages')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity className="items-center" onPress={() => router.push('/(tabs)/profile')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PublicCreatorProfileScreen;
