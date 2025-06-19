import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const PublicCreatorProfileScreen = () => {
  console.log('PublicCreatorProfileScreen rendered');

  useEffect(() => {
    console.log('PublicCreatorProfileScreen mounted');

    return () => {
      console.log('PublicCreatorProfileScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={{ uri: '/assets/images/placeholder-icon.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.flex} />
        <TouchableOpacity style={styles.shareButton}>
          <Image
            source={{ uri: '/assets/images/placeholder-icon.png' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: '/assets/images/profile-ethan-carter.jpg',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Ethan Carter</Text>
            <Text style={styles.username}>@ethan_carter</Text>
            <Text style={styles.bio}>Producer | Photographer</Text>
          </View>
        </View>

        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>🎧 Producer</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>📸 Photographer</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>🎵 Songwriter</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Ethan Carter is a multi-talented creative based in Los Angeles,
          specializing in music production, photography, and songwriting.
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>50</Text>
            <Text style={styles.statLabel}>Gigs Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tipButton}>
            <Text style={styles.tipButtonText}>Tip</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>

        <Text style={styles.featuredWorkTitle}>Featured Work</Text>

        <ScrollView
          horizontal
          style={styles.featuredWorkScroll}
          contentContainerStyle={styles.featuredWorkContent}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.featuredWorkItem}>
            <Image
              source={{
                uri: '/assets/images/featured-album-1.jpg',
              }}
              style={styles.featuredWorkImage}
            />
            <Text style={styles.featuredWorkText}>Album 1</Text>
          </View>
          <View style={styles.featuredWorkItem}>
            <Image
              source={{
                uri: '/assets/images/featured-album-2.jpg',
              }}
              style={styles.featuredWorkImage}
            />
            <Text style={styles.featuredWorkText}>Album 2</Text>
          </View>
          <View style={styles.featuredWorkItem}>
            <Image
              source={{
                uri: '/assets/images/featured-album-3.jpg',
              }}
              style={styles.featuredWorkImage}
            />
            <Text style={styles.featuredWorkText}>Album 3</Text>
          </View>
        </ScrollView>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: '/assets/images/icon-home.svg',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: '/assets/images/icon-search.svg',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: '/assets/images/icon-add.svg',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: '/assets/images/icon-chat.svg',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: '/assets/images/icon-profile.svg',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1b14',
    fontFamily: 'Spline Sans, Noto Sans, sans-serif',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1b14',
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
  },
  shareButton: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  flex: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 16,
  },
  profileSection: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 8,
  },
  profileInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: -0.33,
    textAlign: 'center',
  },
  username: {
    color: '#c0b29b',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  bio: {
    color: '#c0b29b',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    gap: 12,
  },
  tag: {
    backgroundColor: '#423929',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  description: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'normal',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 8,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: 'center',
  },
  statBox: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#5e513b',
    borderRadius: 8,
    minWidth: 111,
    flex: 1,
    marginHorizontal: 4,
  },
  statNumber: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.48,
  },
  statLabel: {
    color: '#c0b29b',
    fontSize: 14,
    fontWeight: 'normal',
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: 'center',
  },
  followButton: {
    backgroundColor: '#eedcbe',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginHorizontal: 8,
    flexGrow: 1,
  },
  followButtonText: {
    color: '#1f1b14',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.21,
  },
  tipButton: {
    backgroundColor: '#423929',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginHorizontal: 8,
    flexGrow: 1,
  },
  tipButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.21,
  },
  bookButton: {
    backgroundColor: '#eedcbe',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bookButtonText: {
    color: '#1f1b14',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.21,
  },
  featuredWorkTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: -0.33,
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 20,
  },
  featuredWorkScroll: {
    paddingHorizontal: 16,
  },
  featuredWorkContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  featuredWorkItem: {
    marginRight: 16,
  },
  featuredWorkImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  featuredWorkText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  albumContainer: {
    flexDirection: 'column',
    minWidth: 160,
  },
  albumImage: {
    width: 160,
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  albumTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  albumArtist: {
    color: '#c0b29b',
    fontSize: 14,
    fontWeight: 'normal',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2f291d',
    borderTopWidth: 1,
    borderColor: '#423929',
    paddingVertical: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    tintColor: '#c0b29b',
  },
});

export default PublicCreatorProfileScreen;
