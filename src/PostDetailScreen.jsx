import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const PostDetailScreen = () => {
  const navigation = useNavigation();

  console.log('PostDetailScreen rendered');

  useEffect(() => {
    console.log('PostDetailScreen mounted');

    return () => {
      console.log('PostDetailScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.postImage}
        source={{
          uri: '/assets/images/post-main-image.jpg',
        }}
      />
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: '/assets/images/profile-sophia-carter.jpg',
          }}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Sophia Carter</Text>
          <Text style={styles.profileFollowers}>1.2K followers</Text>
        </View>
      </View>
      <Text style={styles.postCategory}>2d · Photography</Text>
      <Text style={styles.postDescription}>
        Capturing the essence of urban life through a lens. This series explores
        the vibrant streets of Tokyo, showcasing the city's unique blend of
        tradition and modernity. Each shot tells a story, from the bustling
        markets to the serene temples, offering a glimpse into the soul of this
        dynamic metropolis.
      </Text>
      <View style={styles.postActions}>
        <View style={styles.postAction}>
          <Text style={styles.postActionText}>❤️ 2.3K</Text>
        </View>
        <TouchableOpacity
          style={styles.postAction}
          onPress={() => navigation.navigate('CommentSection')}
        >
          <Text style={styles.postActionText}>💬 120</Text>
        </TouchableOpacity>
        <View style={styles.postAction}>
          <Text style={styles.postActionText}>✈️ 50</Text>
        </View>
      </View>
      <Text style={styles.commentsTitle}>Comments</Text>
      <View style={styles.commentContainer}>
        <Image
          style={styles.commentProfileImage}
          source={{
            uri: '/assets/images/comment-profile-ethan-bennett.jpg',
          }}
        />
        <View style={styles.commentDetails}>
          <View style={styles.commentHeader}>
            <Text style={styles.commentName}>Ethan Bennett</Text>
            <Text style={styles.commentTime}>1d</Text>
          </View>
          <Text style={styles.commentText}>
            Absolutely stunning work! The colors and composition are
            breathtaking. You've truly captured the spirit of Tokyo.
          </Text>
        </View>
      </View>
      <View style={styles.commentContainer}>
        <Image
          style={styles.commentProfileImage}
          source={{
            uri: '/assets/images/comment-profile-olivia-hayes.jpg',
          }}
        />
        <View style={styles.commentDetails}>
          <View style={styles.commentHeader}>
            <Text style={styles.commentName}>Olivia Hayes</Text>
            <Text style={styles.commentTime}>2d</Text>
          </View>
          <Text style={styles.commentText}>
            This series is incredible. The way you've used light and shadow to
            highlight the city's architecture is masterful. Each photo is a work
            of art.
          </Text>
        </View>
      </View>
      <View style={styles.tipContainer}>
        <View style={styles.tipButton}>
          <Text style={styles.tipButtonText}>Tip $10</Text>
        </View>
      </View>
      <View style={styles.bottomNavigation}>
        <Text>🏠</Text>
        <Text>🔎</Text>
        <Text>➕</Text>
        <Text>🗄️</Text>
        <Text>👤</Text>
      </View>
      <View style={styles.bottomSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221c11',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  shareButton: {
    padding: 8,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileFollowers: {
    color: '#c9b592',
    fontSize: 14,
  },
  postCategory: {
    color: '#c9b592',
    fontSize: 14,
    paddingHorizontal: 16,
  },
  postDescription: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionText: {
    color: '#c9b592',
    fontSize: 14,
  },
  commentsTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  commentProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentDetails: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  commentTime: {
    color: '#c9b592',
    fontSize: 12,
  },
  commentText: {
    color: '#fff',
    fontSize: 14,
  },
  tipContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tipButton: {
    backgroundColor: '#483a23',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  tipButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#332a19',
    paddingVertical: 12,
  },
  bottomSpace: {
    height: 5,
    backgroundColor: '#332a19',
  },
});

export default PostDetailScreen;
