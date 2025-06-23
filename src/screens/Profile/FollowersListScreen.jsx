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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {mode === 'following' ? 'Following' : 'Followers'}
        </Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView>
        {filteredUsers.map((user) => (
          <View key={user.id} style={styles.followerContainer}>
            <Image source={{ uri: user.image }} style={styles.avatar} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.username}>{user.username}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.followButton,
                { backgroundColor: user.isFollowing ? '#864d3b' : '#423929' },
              ]}
              onPress={() => toggleFollow(user.id)}
            >
              <Text style={styles.followButtonText}>
                {user.isFollowing ? 'Unfollow' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1b14',
  },
  header: {
    padding: 16,
    backgroundColor: '#1f1b14',
    borderBottomWidth: 1,
    borderBottomColor: '#423929',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    margin: 16,
    padding: 10,
    backgroundColor: '#2e2a22',
    borderRadius: 10,
    color: 'white',
  },
  followerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#423929',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    color: '#c0b29b',
    fontSize: 14,
  },
  followButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  followButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default FollowersListScreen;