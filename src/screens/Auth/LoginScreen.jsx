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

const LoginScreen = ({ navigation: propNavigation }) => {
  const nativeNavigation = useNavigation();
  const navigation = propNavigation || nativeNavigation;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Demo', 'Please fill in all fields');
      return;
    }
    console.log('Attempting login with:', email, password);
    Alert.alert('Demo Success', 'Login successful! (Demo)', [
      { text: 'OK', onPress: () => navigation.navigate('MainContent') },
    ]);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoToSignup = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }} className="pt-5">
        <View className="flex-row items-center w-full px-4 py-4">
          <TouchableOpacity onPress={handleGoBack} className="p-2">
            <Text className="text-white text-2xl">{'<'}</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-white text-2xl font-bold my-5">Welcome back</Text>

        <View className="w-4/5 sm:w-3/5 lg:w-2/5 mb-4">
          <Text className="text-white mb-2 ml-1">Email or phone</Text>
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3"
            placeholder="Enter your email or phone"
            placeholderTextColor="#A0A0A0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="w-4/5 sm:w-3/5 lg:w-2/5 mb-4">
          <Text className="text-white mb-2 ml-1">Password</Text>
          <TextInput
            className="bg-gray-700 text-white rounded-lg p-3"
            placeholder="Enter your password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity className="w-4/5 sm:w-3/5 lg:w-2/5 items-end mb-5">
          <Text className="text-accent text-sm">Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-accent py-3 rounded-lg my-5 w-4/5 sm:w-3/5 lg:w-2/5"
          onPress={handleLogin}
        >
          <Text className="text-primary font-bold text-center text-lg">
            Log In
          </Text>
        </TouchableOpacity>

        <Text className="text-gray-400 my-3">Or continue with</Text>

        <View className="flex-row justify-around w-4/5 sm:w-3/5 lg:w-2/5 mb-5">
          <TouchableOpacity className="bg-gray-700 p-3 rounded-lg flex-1 mx-2 items-center">
            <Text className="text-white">Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-700 p-3 rounded-lg flex-1 mx-2 items-center">
            <Text className="text-white">Apple</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleGoToSignup} className="my-5">
          <Text className="text-accent underline">
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
        <View className="h-5" />
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
