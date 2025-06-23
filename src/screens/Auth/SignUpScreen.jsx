import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = ({ navigation: propNavigation }) => {
  const nativeNavigation = useNavigation();
  const navigation = propNavigation || nativeNavigation;

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
      { text: 'OK', onPress: () => navigation.navigate('Interests') },
    ]);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} className="pt-5">
        <View className="flex-row items-center w-full px-4 py-4">
          <TouchableOpacity onPress={handleGoBack} className="p-2 absolute left-4 z-10">
            <Text className="text-white text-2xl">{'<'}</Text>
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold text-center flex-1">Sign Up</Text>
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

        {/* Role Selection */}
        <Text className="text-white mt-3 mb-2">I am a:</Text>
        <View className="flex-row justify-center w-4/5 sm:w-3/5 lg:w-2/5 mb-6">
          <TouchableOpacity
            className={`flex-1 py-3 mx-1 rounded-lg items-center justify-center ${selectedRole === 'creator' ? 'bg-accent' : 'bg-gray-700 border border-accent'}`}
            onPress={() => setSelectedRole('creator')}
          >
            <Text className={`${selectedRole === 'creator' ? 'text-primary' : 'text-accent'} font-bold`}>
              Creator
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 py-3 mx-1 rounded-lg items-center justify-center ${selectedRole === 'client' ? 'bg-accent' : 'bg-gray-700 border border-accent'}`}
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

        <TouchableOpacity onPress={handleGoToLogin} className="my-5">
          <Text className="text-accent underline">
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
        <View className="h-5" />
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
