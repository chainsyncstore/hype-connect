/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/WelcomeScreen.jsx';
import SignUpScreen from './src/SignUpScreen.jsx';
import LoginScreen from './src/LoginScreen.jsx';
import InterestsScreen from './src/InterestsScreen.jsx';
import SuccessScreen from './src/SuccessScreen.jsx';
import MainContentScreen from './src/MainContentScreen.jsx';
import PostDetailScreen from './src/PostDetailScreen.jsx';
import CommentSectionScreen from './src/CommentSectionScreen.jsx';

const Stack = createStackNavigator();

function App() {
  useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Interests" component={InterestsScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="MainContent" component={MainContentScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        <Stack.Screen name="CommentSection" component={CommentSectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
