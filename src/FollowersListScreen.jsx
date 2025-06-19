import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const followers = [
  {
    id: 1,
    name: 'Jessica Williams',
    username: '@jessicaw',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCaK-Kn3CDxrc755_LVFTY36aaV16PpdJZ2fq4kd4nrlCwe3r0EJQTzEAgLIgR2g2SJHXXw9ReJ2jsxj8_6fMDO9Sq_ESYrA8E2mZxShBeYcSOzz93gqw7kv4VW4dVk5gng_RP2lWfclQj5rbkEFmB8IeWDmp2S3rO2tpQsVa4SkxZVktQ7F-HGsR0fuFseuHYERb5LOhsVTojv9_pmPtpWxO3UJOG5bzUwxgxSKBXMF_Sy54DjpQ6sVtdUVLEKesOOZ1Aw7Fq1M30',
    isFollowing: true,
  },
  {
    id: 2,
    name: 'David Miller',
    username: '@davidm',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgMHy-DycAOhTqb9uso0XYNikZltNB84hqraW2FeY4BIr9SxCkSWvPjY5Xl2k89p9GSA7qxzDc04ucDypvfpCOFk8T46pJeghU-cXL4EVffG5sHLB3F_geRSNYRR538CWeeJ5b4J6mY3mCIu7hqn6Ml9SCQTTfqJmCWguF1BTIuhce6xmXhLhtfI_40jxgFGo24SdQLeNOEg1VG4uHb4Mo6-lZ0-WpTbJtl_aAeVYGdBOC5E0fOYjWjmIJUhILLhMlqMa85L4_t_g',
    isFollowing: false,
  },
  // Add more followers here
];

const FollowersListScreen = () => {
  console.log('FollowersListScreen rendered');

  useEffect(() => {
    console.log('FollowersListScreen mounted');

    return () => {
      console.log('FollowersListScreen unmounted');
    };
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
        {followers.map(follower => (
          <View key={follower.id} style={styles.followerContainer}>
            <Image source={{ uri: follower.image }} style={styles.avatar} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{follower.name}</Text>
              <Text style={styles.username}>{follower.username}</Text>
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
