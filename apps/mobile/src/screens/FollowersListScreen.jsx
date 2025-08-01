import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ApiService from '@services/api';




const FollowersListScreen = ({ navigation }) => {
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    const load = async () => {
      try {
        const list = await ApiService.fetchAllProfiles();
        setFollowers(list);
      } catch (e) {
        console.error('Failed to load profiles', e);
      }
    };
    load();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Followers</Text>
      </View>
      <ScrollView>
        {followers.map((follower) => (
          <View key={follower.id} style={styles.followerContainer}>
            <Image source={{ uri: follower.avatar_url }} style={styles.avatar} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{follower.full_name}</Text>
              <Text style={styles.username}>@{follower.username}</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>
                {follower.isFollowing ? 'Unfollow' : 'Follow'}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1f1b14',
  },
  backButton: {
    padding: 8,
  },
  backText: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
    backgroundColor: '#423929',
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
