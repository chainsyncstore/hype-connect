
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import InterestsScreen from './InterestsScreen';
import SuccessScreen from './SuccessScreen';
import SignUpScreen from './SignUpScreen';
import MainContentScreen from './MainContentScreen';
import PostDetailScreen from './PostDetailScreen';
import CreatorEarningsScreen from './CreatorEarningsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome">
          {(props) => <WelcomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {(props) => <SignUpScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Interests">
          {(props) => <InterestsScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Success">
          {(props) => <SuccessScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MainContent">
          {(props) => <MainContentScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="PostDetail">
          {(props) => <PostDetailScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CreatorEarnings">
          {(props) => <CreatorEarningsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
