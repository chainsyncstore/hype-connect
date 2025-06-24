// src/screens/Feed/MainContentScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router
import WebHeader from '../../components/WebHeader'; 

// PRD Colors & Icons
const CommentIcon = () => <Text className="text-gray-400">💬</Text>;
const TipIcon = () => <Text className="text-gray-400">$</Text>;
const SaveIcon = () => <Text className="text-gray-400">🔖</Text>;

const MainContentScreen = () => {
  // Removed useNavigation and propNavigation as Link handles navigation context
  const [activeTab, setActiveTab] = useState('For You');

  const posts = [
    {
      id: '1',
      imageUri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      category: 'Music',
      title: 'New track out now!',
      author: '@Alex_Beats',
      authorId: 'alex_beats_id',
      comments: '45',
      tips: '23',
      saves: '67',
      description: 'Check out my latest track, a blend of electronic and hip-hop beats. Let me know what you think!',
    },
    {
      id: '2',
      imageUri: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      category: 'Art',
      title: 'Digital painting',
      author: '@Art_by_Sarah',
      authorId: 'sarah_art_id',
      comments: '78',
      tips: '42',
      saves: '80',
      description: 'Experimenting with new color palettes and techniques. This piece captures the vibrant energy of the city at night.',
    },
  ];

  const PostItem = ({ post }) => (
    // Main post item navigates to post detail
    <Link href={`/(tabs)/feed/${post.id}`} asChild>
      <TouchableOpacity className="bg-gray-800 rounded-lg overflow-hidden mb-6 mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl">
        <Image source={{ uri: post.imageUri }} className="w-full h-64" resizeMode="cover" />
        <View className="p-4">
          <Text className="text-gray-400 text-xs uppercase">{post.category}</Text>
          <Text className="text-white text-xl font-bold my-1" numberOfLines={1}>{post.title}</Text>
          <View className="flex-row justify-between items-center mt-1 mb-2">
            {/* Author link navigates to their profile */}
            <Link href={`/(tabs)/profile/${post.authorId}`} asChild>
              <TouchableOpacity>
                <Text className="text-accent text-sm">{post.author}</Text>
              </TouchableOpacity>
            </Link>
          </View>
          <Text className="text-gray-300 text-sm mb-3 leading-relaxed" numberOfLines={2}>{post.description}</Text>
          <View className="flex-row justify-around items-center border-t border-gray-700 pt-2">
            {/* These buttons are placeholders for interaction, no navigation change needed here yet */}
            <TouchableOpacity className="flex-row items-center p-2">
              <CommentIcon />
              <Text className="text-gray-400 ml-1 text-xs">{post.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-2">
              <TipIcon />
              <Text className="text-gray-400 ml-1 text-xs">{post.tips}</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-2">
              <SaveIcon />
              <Text className="text-gray-400 ml-1 text-xs">{post.saves}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      {/* Tabs for "For You" and "Following" remain part of this screen's specific UI */}
      <View className="flex-row bg-gray-800 border-b border-gray-700">
        <TouchableOpacity
          onPress={() => setActiveTab('For You')}
          className={`flex-1 py-3 items-center ${activeTab === 'For You' ? 'border-b-2 border-accent' : ''}`}
        >
          <Text className={`${activeTab === 'For You' ? 'text-accent' : 'text-gray-400'} font-semibold`}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('Following')}
          className={`flex-1 py-3 items-center ${activeTab === 'Following' ? 'border-b-2 border-accent' : ''}`}
        >
          <Text className={`${activeTab === 'Following' ? 'text-accent' : 'text-gray-400'} font-semibold`}>Following</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-4">
        {posts.map(post => <PostItem key={post.id} post={post} />)}
        <View className="h-16" />{/* Spacer for bottom */}
      </ScrollView>
    </View>
  );
};

export default MainContentScreen;
