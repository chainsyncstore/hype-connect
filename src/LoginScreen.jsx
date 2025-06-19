import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const LoginScreen = () => {
  console.log('LoginScreen rendered');

  useEffect(() => {
    console.log('LoginScreen mounted');

    return () => {
      console.log('LoginScreen unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText} selectable={true}>Welcome back</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email or phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email or phone"
            placeholderTextColor="#cbb590"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#cbb590"
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.forgotPasswordText} selectable={true}>Forgot password?</Text>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
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

        <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
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
