import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FollowersListScreen = ({ mode = 'followers' }) => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Jessica Williams',
      username: '@jessicaw',
      image:
        'https://lh3.googleusercontent.com/a-/AFdZucqwJ2Q0',
      isFollowing: true,
    },
    {
      id: 2,
      name: 'David Miller',
      username: '@davidm',
      image:
        'https://lh3.googleusercontent.com/a-/AFdZucoL9hyJ',
      isFollowing: false,
    },
    // Add more...
  ]);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.username.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  const toggleFollow = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
  };

  return (
    <View className="flex-1 bg-[#1f1b14]">
      <WebHeader />
      <View className="p-4 bg-[#1f1b14] border-b border-[#423929]">
        <Text className="text-white text-xl font-bold">
          {mode === 'following' ? 'Following' : 'Followers'}
        </Text>
      </View>

      <TextInput
        className="m-4 p-2.5 bg-[#2e2a22] rounded-lg text-white"
        placeholder="Search"
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView>
        {filteredUsers.map((user) => (
          <View key={user.id} className="flex-row items-center justify-between p-4 border-b border-[#423929]">
            <Image source={{ uri: user.image }} className="w-14 h-14 rounded-full" />
            <View className="flex-1 ml-4">
              <Text className="text-white text-base font-bold">{user.name}</Text>
              <Text className="text-[#c0b29b] text-sm">{user.username}</Text>
            </View>
            <TouchableOpacity
              className={`py-2 px-4 rounded-full ${user.isFollowing ? 'bg-[#864d3b]' : 'bg-[#423929]'}`}
              onPress={() => toggleFollow(user.id)}
            >
              <Text className="text-white text-sm">
                {user.isFollowing ? 'Unfollow' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FollowersListScreen;
