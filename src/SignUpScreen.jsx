import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from './assets/logo.png';

const SignUpScreen = () => {
  const navigation = useNavigation();

  console.log('SignUpScreen rendered');

  useEffect(() => {
    console.log('SignUpScreen mounted');

    return () => {
      console.log('SignUpScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sign Up</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#cbb690"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#cbb690"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#cbb690"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#cbb690"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.roleContainer}>
          <TouchableOpacity style={styles.roleButton}>
            <Text style={styles.roleButtonText}>Creator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.roleButton}>
            <Text style={styles.roleButtonText}>Client</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Interests')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231c10',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#231c10',
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#493b22',
    color: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 16,
  },
  roleButton: {
    backgroundColor: '#493b22',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  roleButtonText: {
    color: '#cbb690',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#f4b43d',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 48,
    marginBottom: 16,
  },
  continueButtonText: {
    color: '#231c10',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#cbb690',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
