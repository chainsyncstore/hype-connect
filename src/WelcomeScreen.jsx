import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.png';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  console.log('WelcomeScreen rendered');

  useEffect(() => {
    console.log('WelcomeScreen mounted');

    const handleTouchStart = event => {
      console.log('Touch start detected:', {
        identifier: event.touches[0]?.identifier,
        pageX: event.touches[0]?.pageX,
        pageY: event.touches[0]?.pageY,
        timestamp: event.timeStamp,
      });
    };

    const handleTouchEnd = event => {
      console.log('Touch end detected:', {
        identifier: event.changedTouches[0]?.identifier,
        pageX: event.changedTouches[0]?.pageX,
        pageY: event.changedTouches[0]?.pageY,
        timestamp: event.timeStamp,
      });
      console.log('Current Touch Bank:', event.targetTouches);
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      console.log('WelcomeScreen unmounted');
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const handleJoinToConnect = () => {
    console.log('Join to Connect button pressed');
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    console.log('Log In button pressed');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.logoContainer, styles.interactive]}>
        <Image style={styles.logo} source={Logo} />
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
    backgroundColor: '#1B1B1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headline: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 36,
    color: '#FFFFFF',
  },
  accentColor: {
    color: '#F5A623',
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    color: '#A0A0A0',
    marginBottom: 48,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 320,
  },
  primaryButton: {
    backgroundColor: '#F5A623',
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#1B1B1E',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: '#F5A623',
  },
  secondaryButtonText: {
    color: '#F5A623',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 18,
  },
  interactive: {
    pointerEvents: 'auto',
  },
});

export default WelcomeScreen;
