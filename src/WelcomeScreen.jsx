import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from './assets/logo.png';

const WelcomeScreen = ({ goTo }) => {
  useEffect(() => {
    // Any side effects here
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to Hype Connect</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => (goTo ? goTo('login') : null)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => (goTo ? goTo('signup') : null)}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#eead3e',
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginVertical: 8,
  },
  buttonText: {
    color: '#221c11',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;