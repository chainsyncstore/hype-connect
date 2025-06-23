import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
-import CreatorCard from './CreatorCard';
+import CreatorCard from '../../modals/CreatorCard';

const MainContentScreen = () => {
  const navigation = useNavigation();

  const [isCreatorCardVisible, setIsCreatorCardVisible] = useState(false);

  const toggleCreatorCard = () => {
    setIsCreatorCardVisible(!isCreatorCardVisible);
  };

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
        {/* Post 1 */}
        <TouchableOpacity onPress={() => navigation.navigate('PostDetail')}>
          <View style={styles.postContainer}>
            <Image
              style={styles.postImage}
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7FzR1cYUKJ1-KVHyHlMuiSLCg1pWpdM3cqJZiLHNvuXWhxQhDo6nfCVkkxi52T3BaDtQC8SYa2XiaoIc4Tc8eK-6mj80a1x2xx_sicso5ED5UlSypVoJhXU2Aou_OP5m2TlfGTX5Y50tE-su_f4eWsmyI7u_BldcWqMy6-5gtxW2BC1CUws5-nqR7W2LZsyZ73JSFucam_Dj_1LMBqCrP1k0hXkIwZLo2PwFkF00y83qa1Qt6otm_74imRESC8tvOM35uRbMrFvw',
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

        {/* Post 2 */}
        <TouchableOpacity onPress={() => navigation.navigate('PostDetail')}>
          <View style={styles.postContainer}>
            <Image
              style={styles.postImage}
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpb3HZZUDi60aTvAs81QytTRk2ayVUOy05A9pnhS9MQYX7WXtPpOiSV-rPCc0gVWAIdZMTrbmSMHqzuyIU0We_EAp2a-6jLCxX3jMW6aRVuVKRNBk8jTmB0SBKyCUMQsFcZ7Rt03OVe_e3rnLpj-5HbYERYjmom6jC7yI5hHi2gAB4RCj75Zrcn-6xKmeKLs6shXh4aWfRsI2luDLsCipQU8ETykIm9LW5ZLP9dPZ8DqTSLSmCZ2P2s-KGMdDtiB7Y5-GAu8wNAN8',
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

        {/* Bottom Navigation */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity>
            <Text>🏠</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('GigsMarketplace')}>
            <Text>💼</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('LiveStream')}>
            <Text>📺</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
            <Text>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Text>💰</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Creator Card Modal */}
      <Modal
        visible={isCreatorCardVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleCreatorCard}
      >
        <CreatorCard />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // [same styles as before]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  settingsButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  tabButtonActive: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#F5A623',
  },
  tabButtonText: {
    color: '#999',
    fontSize: 16,
  },
  tabButtonTextActive: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postContainer: {
    backgroundColor: '#2A2A2A',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDetails: {
    marginBottom: 10,
  },
  postCategory: {
    color: '#F5A623',
    fontSize: 12,
    marginBottom: 5,
  },
  postTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postAuthor: {
    color: '#999',
    fontSize: 14,
  },
  postButton: {
    backgroundColor: '#F5A623',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  postButtonText: {
    color: '#1B1B1E',
    fontWeight: 'bold',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionText: {
    color: '#999',
    fontSize: 14,
  },
  postDescription: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 20,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2A2A2A',
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  bottomSpace: {
    height: 20,
  },
});
export default MainContentScreen;