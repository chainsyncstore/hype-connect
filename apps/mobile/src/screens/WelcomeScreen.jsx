
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('WelcomeScreen mounted');

    const handleTouchStart = (event) => {
      console.log('Touch start detected:', {
        identifier: event.touches[0]?.identifier,
        pageX: event.touches[0]?.pageX,
        pageY: event.touches[0]?.pageY,
        timestamp: event.timeStamp,
      });
    };

    const handleTouchEnd = (event) => {
      console.log('Touch end detected:', {
        identifier: event.changedTouches[0]?.identifier,
        pageX: event.changedTouches[0]?.pageX,
        pageY: event.touches[0]?.pageY,
        timestamp: event.timeStamp,
      });
      console.log('Current Touch Bank:', event.targetTouches);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      console.log('WelcomeScreen unmounted');
      if (typeof window !== 'undefined') {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  const handleJoinToConnect = () => {
    console.log('Navigating to SignUp');
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    console.log('Navigating to Login');
    navigation.navigate('Login');
  };

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
          onPress={handleJoinToConnect}
          onPressIn={() => console.log('Join to Connect button press in')}
          onPressOut={() => console.log('Join to Connect button press out')}
        >
          <Text style={styles.primaryButtonText}>Join to Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={handleLogin}
          onPressIn={() => console.log('Log In button press in')}
          onPressOut={() => console.log('Log In button press out')}
        >
          <Text style={styles.secondaryButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#221c11',
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#F5A623',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1B1B1E',
  },
  headline: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
  },
  accentColor: {
    color: '#F5A623',
  },
  tagline: {
    color: '#cbb590',
    fontSize: 18,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: '#eead3e',
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginHorizontal: 8,
  },
  primaryButtonText: {
    color: '#221c11',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#493b22',
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginHorizontal: 8,
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  interactive: {
    // For touch feedback if needed
  },
});

export default WelcomeScreen;
