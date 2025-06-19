import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignUpScreen from './SignUpScreen.jsx';

const WelcomeScreen = () => {
  const navigation = useNavigation();

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
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxwEzOQeClCnHKX4TnKD5D7LuAGw3woEpIuKyGk3CeC1RWKwm-SqhrW_YWYAuhug84fk0em05kQah2e6k4c4uMPMLyCUwE7MU4iMngYYHqChG0LPqDgd21BPsyRVt84Ma7BtnOQjbHM6IoT-_ysWhTHrqjC_Qe93sYKL8KvpEtQiB9Xi2HAeXVgdFb-L223HIxI1MYK4RLGc9x9TFuQKAbM2qNUFNIQcNWstbd1Ezd7HZYiFCrLP--b7USN4Hz1l2-ykRJGBQK-BM',
          }}
        />
      </View>
      <Text style={styles.headline}>
        Connect. <Text style={styles.accentColor}>Create.</Text> Cash Out.
      </Text>
      <Text style={styles.tagline}>For creators</Text>
      <View style={styles.buttonContainer}>
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
});

export default WelcomeScreen;
