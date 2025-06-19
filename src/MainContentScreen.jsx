import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import CreatorCard from './CreatorCard';

const MainContentScreen = () => {
  const navigation = useNavigation();

  const [isCreatorCardVisible, setIsCreatorCardVisible] = useState(false);

  const toggleCreatorCard = () => {
    setIsCreatorCardVisible(!isCreatorCardVisible);
  };

  console.log('MainContentScreen rendered');

  useEffect(() => {
    console.log('MainContentScreen mounted');

    return () => {
      console.log('MainContentScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hype Connect</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButtonActive}>
          <Text style={styles.tabButtonTextActive}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabButtonText}>Following</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('PostDetail')}>
          <View style={styles.postContainer}>
            <Image
              style={styles.postImage}
              source={{
                uri: '/assets/images/post-alex-beats-track.png',
              }}
            />
            <View style={styles.postDetails}>
              <Text style={styles.postCategory}>Music</Text>
              <Text style={styles.postTitle}>New track out now!</Text>
              <View style={styles.postFooter}>
                <TouchableOpacity onPress={toggleCreatorCard}>
                  <Text style={styles.postAuthor}>By @Alex_Beats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postButton}>
                  <Text style={styles.postButtonText}>123</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.postActions}>
              <View style={styles.postAction}>
                <Text style={styles.postActionText}>💬 45</Text>
              </View>
              <View style={styles.postAction}>
                <Text style={styles.postActionText}>$ 23</Text>
              </View>
              <View style={styles.postAction}>
                <Text style={styles.postActionText}>🔖 67</Text>
              </View>
            </View>
            <Text style={styles.postDescription}>
              Check out my latest track, a blend of electronic and hip-hop
              beats. Let me know what you think!
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PostDetail')}>
          <View style={styles.postContainer}>
            <Image
              style={styles.postImage}
              source={{
                uri: '/assets/images/post-art-by-sarah.png',
              }}
            />
            <View style={styles.postDetails}>
              <Text style={styles.postCategory}>Art</Text>
              <Text style={styles.postTitle}>Digital painting</Text>
              <View style={styles.postFooter}>
                <TouchableOpacity onPress={toggleCreatorCard}>
                  <Text style={styles.postAuthor}>By @Art_by_Sarah</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postButton}>
                  <Text style={styles.postButtonText}>210</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.postActions}>
              <View style={styles.postAction}>
                <Text style={styles.postActionText}>💬 78</Text>
              </View>
              <View style={styles.postAction}>
                <Text style={styles.postActionText}>$ 42</Text>
              </View>
              <View style={styles.postAction}>
                <Text style={styles.postActionText}>🔖 80</Text>
              </View>
            </View>
            <Text style={styles.postDescription}>
              Experimenting with new color palettes and techniques. This piece
              captures the vibrant energy of the city at night.
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.bottomNavigation}>
          <Text>🏠</Text>
          <Text>🔎</Text>
          <Text>➕</Text>
          <Text>🗄️</Text>
          <Text>👤</Text>
        </View>
        <View style={styles.bottomSpace} />
      </ScrollView>

      <Modal
        visible={isCreatorCardVisible}
        transparent={true}
        animationType="slide"
      >
        <CreatorCard />
      </Modal>
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
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingLeft: 40,
  },
  settingsButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#332a19',
    paddingVertical: 8,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
  },
  tabButtonActive: {
    backgroundColor: '#221c11',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
  },
  tabButtonText: {
    color: '#c9b592',
  },
  tabButtonTextActive: {
    color: '#fff',
  },
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#483a23',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  postDetails: {
    paddingVertical: 8,
  },
  postCategory: {
    color: '#c9b592',
    fontSize: 14,
  },
  postTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postAuthor: {
    color: '#c9b592',
    fontSize: 16,
  },
  postButton: {
    backgroundColor: '#eead3e',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  postButtonText: {
    color: '#221c11',
    fontSize: 14,
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
  postDescription: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 8,
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

export default MainContentScreen;
