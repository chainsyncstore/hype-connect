import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = ({ navigation: propNavigation }) => {
  const nativeNavigation = useNavigation();
  const navigation = propNavigation || nativeNavigation;

  useEffect(() => {
    console.log('WelcomeScreen mounted');

    const handleTouchStart = (event) => {
      console.log('Touch start:', {
        identifier: event.touches[0]?.identifier,
        pageX: event.touches[0]?.pageX,
        pageY: event.touches[0]?.pageY,
        timestamp: event.timeStamp,
      });
    };

    const handleTouchEnd = (event) => {
      console.log('Touch end:', {
        identifier: event.changedTouches[0]?.identifier,
        pageX: event.changedTouches[0]?.pageX,
        pageY: event.touches[0]?.pageY,
        timestamp: event.timeStamp,
      });
      console.log('Touch bank:', event.targetTouches);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.logo, styles.interactive]}>
        <Text style={styles.logoText}>H</Text>
      </View>
      <Text style={styles.headline}>
        Connect. <Text style={styles.accentColor}>Create.</Text> Cash Out.
      </Text>
      <Text style={styles.tagline}>For creators</Text>
      <View style={[styles.buttonContainer, styles.interactive]}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.primaryButtonText}>Join to Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.secondaryButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#221c11' },
  logo: { width: 100, height: 100, backgroundColor: '#F5A623', borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 48, fontWeight: 'bold', color: '#1B1B1E' },
  headline: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginTop: 32, marginBottom: 8 },
  accentColor: { color: '#F5A623' },
  tagline: { color: '#cbb590', fontSize: 18, marginBottom: 32 },
  buttonContainer: { flexDirection: 'row', marginTop: 16 },
  primaryButton: { backgroundColor: '#eead3e', borderRadius: 100, paddingHorizontal: 32, paddingVertical: 12, marginHorizontal: 8 },
  primaryButtonText: { color: '#221c11', fontSize: 18, fontWeight: 'bold' },
  secondaryButton: { backgroundColor: '#493b22', borderRadius: 100, paddingHorizontal: 32, paddingVertical: 12, marginHorizontal: 8 },
  secondaryButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  interactive: {},
});

export default WelcomeScreen;