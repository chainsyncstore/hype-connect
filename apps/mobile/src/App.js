
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import WelcomeScreen from './screens/WelcomeScreen.jsx';
import SignUpScreen from './screens/SignUpScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import InterestsScreen from './screens/InterestsScreen.jsx';
import SuccessScreen from './screens/SuccessScreen.jsx';
import MainContentScreen from './screens/MainContentScreen.jsx';
import PostDetailScreen from './screens/PostDetailScreen.jsx';
import CommentSectionScreen from './screens/CommentSectionScreen.jsx';
import GigsMarketplaceScreen from './screens/GigsMarketplaceScreen.jsx';
import LiveStreamScreen from './screens/LiveStreamScreen.jsx';
import WalletScreen from './screens/WalletScreen.jsx';
import MessagesScreen from './screens/MessagesScreen.jsx';
import AdminDashboardScreen from './screens/AdminDashboardScreen.jsx';
import PrivateCreatorProfileScreen from './screens/PrivateCreatorProfileScreen.jsx';
import PublicCreatorProfileScreen from './screens/PublicCreatorProfileScreen.jsx';
import FollowersListScreen from './screens/FollowersListScreen.jsx';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['http://localhost:3000', 'https://your-repl-url.repl.co'],
  config: {
    screens: {
      Welcome: '',
      SignUp: 'signup',
      Login: 'login',
      Interests: 'interests',
      Success: 'success',
      MainContent: 'main',
      PostDetail: 'post/:id',
      CommentSection: 'comments/:id',
      GigsMarketplace: 'gigs',
      LiveStream: 'live',
      Wallet: 'wallet',
      Messages: 'messages',
      AdminDashboard: 'admin',
      PrivateCreatorProfile: 'profile/private',
      PublicCreatorProfile: 'profile/:id',
      FollowersList: 'followers/:id',
    },
  },
};

function App() {
  console.log('App component is being rendered');

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
        <Stack.Screen name="GigsMarketplace" component={GigsMarketplaceScreen} />
        <Stack.Screen name="LiveStream" component={LiveStreamScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
        <Stack.Screen name="PrivateCreatorProfile" component={PrivateCreatorProfileScreen} />
        <Stack.Screen name="PublicCreatorProfile" component={PublicCreatorProfileScreen} />
        <Stack.Screen name="FollowersList" component={FollowersListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
