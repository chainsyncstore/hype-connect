import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../WelcomeScreen.jsx';
import SignUpScreen from '../SignUpScreen.jsx';
import LoginScreen from '../LoginScreen.jsx';
import InterestsScreen from '../InterestsScreen.jsx';
import SuccessScreen from '../SuccessScreen.jsx';
import MainContentScreen from '../MainContentScreen.jsx';
import PostDetailScreen from '../PostDetailScreen.jsx';
import CommentSectionScreen from '../CommentSectionScreen.jsx';

const Stack = createNativeStackNavigator();

export default function AppNavigatorNative() {
  return (
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
  );
}
