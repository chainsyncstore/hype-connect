import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ProfileMenuModal from './ProfileMenuModal';

const PrivateCreatorProfileScreen = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  console.log('PrivateCreatorProfileScreen rendered');

  useEffect(() => {
    console.log('PrivateCreatorProfileScreen mounted');

    return () => {
      console.log('PrivateCreatorProfileScreen unmounted');
    };
  }, []);

  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuVisible(true)}
          >
            <Text style={styles.menuIcon}>⋮</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-FWY39n52wWmXVptxh8AG6yRm_Y2kRVpLxqvVygnqB5rM4ER52rmEQNlYyfJEuwKFsmGxqOphcfkxmnK4aQC3zN3LUzh6gDFBJdUTdMRwdEHBLRa6kYUpAfb781_kxW1mGbPstBU6DDLrpMpyqyXS_nlS8FU0MAVrxhor1p0yuYiNwBFzMEe0PtnJbrZuL16hXSIz14X9PRPFHIsh89GULISyz4kyzhWkMH3yObTp6_3IvB_7KMVPsvqdf2sgMFy4Orgg0WtTfj8',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName} selectable={true}>Ethan Blake</Text>
          <Text style={styles.profileTitle} selectable={true}>Illustrator</Text>
          <Text style={styles.profileLocation} selectable={true}>Based in San Francisco</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.liveButton}>
            <Text style={styles.liveButtonText}>Go Live</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statsSection}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber} selectable={true}>123</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber} selectable={true}>456</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber} selectable={true}>789</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber} selectable={true}>4.5</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>
        <View style={styles.tabsSection}>
          <Text style={styles.activeTab}>Posts</Text>
          <Text style={styles.inactiveTab}>About</Text>
          <Text style={styles.inactiveTab}>Skills</Text>
        </View>
        <View style={styles.postsGrid}>{/* Add post images here */}</View>
      </ScrollView>
      <ProfileMenuModal
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1b14',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    color: 'white',
    fontSize: 24,
  },
  profileSection: {
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 16,
  },
  profileName: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileTitle: {
    color: '#bfb39b',
    fontSize: 16,
  },
  profileLocation: {
    color: '#bfb39b',
    fontSize: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  editButton: {
    backgroundColor: '#41392a',
    padding: 12,
    borderRadius: 8,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  liveButton: {
    backgroundColor: '#f3e9d7',
    padding: 12,
    borderRadius: 8,
  },
  liveButtonText: {
    color: '#1f1b14',
    fontWeight: 'bold',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#bfb39b',
    fontSize: 14,
  },
  tabsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#5d523c',
    paddingVertical: 8,
  },
  activeTab: {
    color: 'white',
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#bfb39b',
  },
  postsGrid: {
    padding: 16,
  },
});

export default PrivateCreatorProfileScreen;
