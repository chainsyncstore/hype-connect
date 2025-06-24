// src/screens/Auth/SignUpScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter, Link } from 'expo-router'; // Import useRouter and Link
import WebHeader from '../../components/WebHeader';

const SignUpScreen = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('creator'); // 'creator' or 'client'

  const handleSignup = () => {
    if (!fullName || !email || !username || !password) {
      Alert.alert('Demo', 'Please fill in all fields');
      return;
    }
    console.log('Attempting signup with:', { fullName, email, username, password, selectedRole });
    Alert.alert('Demo Success', 'Account created successfully! (Demo)', [
      // Navigate to interests screen within the (auth) group or directly to tabs if no interests screen
      { text: 'OK', onPress: () => router.push('/(auth)/interests') }, 
    ]);
  };

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(auth)/welcome'); // Fallback to welcome
    }
  };

  return (
    <View className="flex-1 bg-primary">
      <WebHeader />
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} className="pt-5">
        <View className="flex-row items-center w-full px-4 py-4 self-start">
          <TouchableOpacity onPress={handleGoBack} className="p-2">
            <Text className="text-white text-2xl">{'<'}</Text>
          </TouchableOpacity>
          {/* Centered Title - remove absolute positioning if it causes issues with flex centering */}
          <View className="flex-1 items-center">
            <Text className="text-white text-xl font-bold text-center">Sign Up</Text>
          </View>
          <View className="w-10" /> {/* Spacer to balance the back button for centering title */}
        </View>

        <View className="w-4/5 sm:w-3/5 lg:w-2/5 mb-4 mt-5">
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3"
            placeholder="Full Name"
            placeholderTextColor="#A0A0A0"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View className="w-4/5 sm:w-3/5 lg:w-2/5 mb-4">
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3"
            placeholder="Email"
            placeholderTextColor="#A0A0A0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="w-4/5 sm:w-3/5 lg:w-2/5 mb-4">
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3"
            placeholder="Username"
            placeholderTextColor="#A0A0A0"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View className="w-4/5 sm:w-3/5 lg:w-2/5 mb-4">
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3"
            placeholder="Password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Text className="text-white mt-3 mb-2">I am a:</Text>
        <View className="flex-row justify-center w-4/5 sm:w-3/5 lg:w-2/5 mb-6">
          <TouchableOpacity
            className={`flex-1 py-3 mx-1 rounded-lg items-center justify-center ${
              selectedRole === 'creator' ? 'bg-accent' : 'bg-gray-700 border border-accent'
            }`}
            onPress={() => setSelectedRole('creator')}
          >
            <Text className={`${selectedRole === 'creator' ? 'text-primary' : 'text-accent'} font-bold`}>
              Creator
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 py-3 mx-1 rounded-lg items-center justify-center ${
              selectedRole === 'client' ? 'bg-accent' : 'bg-gray-700 border border-accent'
            }`}
            onPress={() => setSelectedRole('client')}
          >
            <Text className={`${selectedRole === 'client' ? 'text-primary' : 'text-accent'} font-bold`}>
              Client
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-accent py-3 rounded-lg my-3 w-4/5 sm:w-3/5 lg:w-2/5"
          onPress={handleSignup}
        >
          <Text className="text-primary font-bold text-center text-lg">
            Continue
          </Text>
        </TouchableOpacity>

        <Link href="/(auth)/login" asChild>
          <TouchableOpacity className="my-5">
            <Text className="text-accent underline">
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </Link>
        <View className="h-5" />
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
