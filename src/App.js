import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import InterestsScreen from './InterestsScreen';
import SuccessScreen from './SuccessScreen';
import MainContentScreen from './MainContentScreen';
import PostDetailScreen from './PostDetailScreen';
import CommentSectionScreen from './CommentSectionScreen';
import GigsMarketplaceScreen from './GigsMarketplaceScreen';
import LiveStreamScreen from './LiveStreamScreen';
import WalletScreen from './WalletScreen';
import MessagesScreen from './MessagesScreen';
import AdminDashboardScreen from './AdminDashboardScreen';

const Stack = createNativeStackNavigator();

function App() {
  console.log("src/App.js: App.js component rendering/mounted");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Interests" component={InterestsScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="MainContent" component={MainContentScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} />
        <Stack.Screen name="CommentSection" component={CommentSectionScreen} />
        <Stack.Screen name="Gigs" component={GigsMarketplaceScreen} />
        <Stack.Screen name="LiveStream" component={LiveStreamScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="Admin" component={AdminDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
