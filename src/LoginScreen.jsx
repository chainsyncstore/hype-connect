
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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('LoginScreen rendered');

  useEffect(() => {
    return () => {};
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await ApiService.login(email, password);
      if (response.success) {
        Alert.alert('Success', 'Login successful!', [
          { text: 'OK', onPress: () => navigation.navigate('MainContent') },
        ]);
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoToSignup = () => {
    navigation.navigate('SignUp');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleGoBack}
          >
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Welcome back</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email or phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email or phone"
            placeholderTextColor="#cbb590"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#cbb590"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Text style={styles.forgotPasswordText}>Forgot password?</Text>

        <TouchableOpacity
          style={[styles.loginButton, loading && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Logging in...' : 'Log In'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.orContinueText}>Or continue with</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleGoToSignup}>
          <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
        <View style={styles.bottomSpace} />
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
    color: 'white',
    fontSize: 24,
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    marginVertical: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#493b22',
    color: 'white',
    borderRadius: 8,
    padding: 12,
  },
  forgotPasswordText: {
    color: '#cbb590',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#f4b43d',
    padding: 12,
    borderRadius: 8,
    marginVertical: 20,
  },
  loginButtonDisabled: {
    backgroundColor: '#cbb590',
  },
  loginButtonText: {
    color: '#231c10',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orContinueText: {
    color: 'white',
    marginVertical: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#493b22',
    padding: 12,
    borderRadius: 8,
  },
  socialButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signUpText: {
    color: '#cbb590',
    textDecorationLine: 'underline',
    marginVertical: 20,
  },
  bottomSpace: {
    height: 20,
  },
});

export default LoginScreen;
