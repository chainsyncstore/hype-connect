import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ApiService from './services/api';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('creator');
  const [loading, setLoading] = useState(false);

  console.log('SignUpScreen rendered');

  useEffect(() => {
    console.log('SignUpScreen mounted');

    return () => {
      console.log('SignUpScreen unmounted');
    };
  }, []);

  const handleSignup = async () => {
    if (!fullName || !email || !username || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const userData = {
        fullName,
        email,
        username,
        password,
        role: selectedRole,
      };

      const response = await ApiService.signup(userData);
      if (response.success) {
        Alert.alert('Success', 'Account created successfully!', [
          { text: 'OK', onPress: () => navigation.navigate('Interests') },
        ]);
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

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
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#cbb690"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#cbb690"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#cbb690"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[styles.roleButton, selectedRole === 'creator' && styles.roleButtonSelected]}
            onPress={() => setSelectedRole('creator')}
          >
            <Text
              style={[
                styles.roleButtonText,
                selectedRole === 'creator' && styles.roleButtonTextSelected,
              ]}
            >
              Creator
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, selectedRole === 'client' && styles.roleButtonSelected]}
            onPress={() => setSelectedRole('client')}
          >
            <Text
              style={[
                styles.roleButtonText,
                selectedRole === 'client' && styles.roleButtonTextSelected,
              ]}
            >
              Client
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.continueButton, loading && styles.continueButtonDisabled]}
          onPress={handleSignup}
          disabled={loading}
        >
          <Text style={styles.continueButtonText}>
            {loading ? 'Creating Account...' : 'Continue'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleGoToLogin}>
          <Text style={styles.loginText}>Already have an account? Log in</Text>
        </TouchableOpacity>
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
  roleButtonSelected: {
    backgroundColor: '#f4b43d',
  },
  roleButtonText: {
    color: '#cbb690',
    fontSize: 16,
  },
  roleButtonTextSelected: {
    color: '#231c10',
  },
  continueButton: {
    backgroundColor: '#f4b43d',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 48,
    marginBottom: 16,
  },
  continueButtonDisabled: {
    backgroundColor: '#cbb690',
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
