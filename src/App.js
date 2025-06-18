import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import WelcomeScreen from './WelcomeScreen';
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
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainContentScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        <Stack.Screen
          name="CreatorEarnings"
          component={CreatorEarningsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
