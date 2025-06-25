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
import WelcomeScreen from './src/screens/WelcomeScreen.jsx';
import SignUpScreen from './src/screens/SignUpScreen.jsx';
import LoginScreen from './src/screens/LoginScreen.jsx';
import InterestsScreen from './src/screens/InterestsScreen.jsx';
import SuccessScreen from './src/screens/SuccessScreen.jsx';
import MainContentScreen from './src/screens/MainContentScreen.jsx';
import PostDetailScreen from './src/screens/PostDetailScreen.jsx';
import CommentSectionScreen from './src/screens/CommentSectionScreen.jsx';

const Stack = createStackNavigator();

function App() {
  console.log('App component is being rendered');
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
