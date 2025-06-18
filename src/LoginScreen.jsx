import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
           <React.Fragment><Icon name="arrowleft" size={24} color="white" /></React.Fragment>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Welcome back</Text>

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

        <Text style={styles.forgotPasswordText}>Forgot password?</Text>

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

        <Text style={styles.signUpText}>
          Don't have an account? Sign up
        </Text>
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
    color: '#fff',
    fontSize: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '80%',
    paddingBottom: 12,
    paddingTop: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'medium',
    paddingBottom: 8,
  },
  input: {
    backgroundColor: '#493b22',
    color: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#cbb590',
    fontSize: 14,
    textDecorationLine: 'underline',
    width: '80%',
    textAlign: 'left',
    paddingBottom: 20,
    paddingTop: 4,
  },
  loginButton: {
    backgroundColor: '#f3ad34',
    borderRadius: 100,
    paddingVertical: 14,
    paddingHorizontal: 48,
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#231c10',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orContinueText: {
    color: '#cbb590',
    fontSize: 14,
    paddingBottom: 12,
  },
  socialButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 16,
  },
  socialButton: {
    backgroundColor: '#493b22',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#cbb590',
    fontSize: 14,
    textDecorationLine: 'underline',
    paddingBottom: 8,
  },
  bottomSpace: {
    height: 5,
    backgroundColor: '#231c10',
  },
});

export default LoginScreen;
