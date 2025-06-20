import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import InterestsScreen from './InterestsScreen';
import SuccessScreen from './SuccessScreen';
import MainContentScreen from './MainContentScreen';
import PublicCreatorProfileScreen from './PublicCreatorProfileScreen';
import PrivateCreatorProfileScreen from './PrivateCreatorProfileScreen';
import CreatorEarningsScreen from './CreatorEarningsScreen';
import PostDetailScreen from './PostDetailScreen';
import CommentSectionScreen from './CommentSectionScreen';
import FollowersListScreen from './FollowersListScreen';
import GigsMarketplaceScreen from './GigsMarketplaceScreen';
import LiveStreamScreen from './LiveStreamScreen';
import WalletScreen from './WalletScreen';
import MessagesScreen from './MessagesScreen';
import AdminDashboardScreen from './AdminDashboardScreen';

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
        <Stack.Screen name="CommentSection">
          {(props) => <CommentSectionScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FollowersList">
          {(props) => <FollowersListScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="GigsMarketplace" component={GigsMarketplaceScreen} />
        <Stack.Screen name="LiveStream" component={LiveStreamScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
        <Stack.Screen name="CreatorEarnings">
          {(props) => <CreatorEarningsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}