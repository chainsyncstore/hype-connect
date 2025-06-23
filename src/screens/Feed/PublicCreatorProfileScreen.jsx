import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PublicCreatorProfileScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('PublicCreatorProfileScreen mounted');
    return () => console.log('PublicCreatorProfileScreen unmounted');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://via.placeholder.com/24' }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.flex} />
        <TouchableOpacity
          style={styles.shareButton}
          onPress={() => console.log('Share action')}
        >
          <Image
            source={{ uri: 'https://via.placeholder.com/24' }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* ... all unchanged content ... */}
        {/* Example retained: */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUsD4PV-NWVkwPYLn09JGAUVY_qh6_Cf88fW63-yK_4QsqCPo1T6b2qD3X3vp7x9Zb5s9BVHb_uzo9vtLk0htm-tNV7314rrKkH34YaMPziRnqgwHo4l0hWhbemB-9Huimbkx5XaokEynCNdoCSXrUFMtkBIbqsVxPCgHb8VmGfiWao2q13_21nx3Wjo3eC8V8HYaSvi6pcNfV_ELSzy1YV_ZuqdCAzSPL4YsPnN_XKQbs2A1G8KjwGDWgtonn4sTEw6wrMJRwaXE',
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Ethan Carter</Text>
            <Text style={styles.username}>@ethan_carter</Text>
            <Text style={styles.bio}>Producer | Photographer</Text>
          </View>
        </View>

        {/* ... rest of content remains unchanged ... */}

      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discover')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Create')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Messages')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: 'data:image/svg+xml;base64,...' }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // your entire existing styles remain unchanged
});

export default PublicCreatorProfileScreen;