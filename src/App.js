
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

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
import GigDetailScreen from './GigDetailScreen'; // Import GigDetailScreen
import LiveStreamScreen from './LiveStreamScreen';
import WalletScreen from './WalletScreen';
import MessagesScreen from './MessagesScreen';
import AdminDashboardScreen from './AdminDashboardScreen';
import PrivateCreatorProfileScreen from './PrivateCreatorProfileScreen';
import PublicCreatorProfileScreen from './PublicCreatorProfileScreen';
import FollowersListScreen from './FollowersListScreen';
import PostCreationModal from './PostCreationModal';
import GigCreationModal from './GigCreationModal';
import BookingModal from './BookingModal';

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
      GigDetail: 'gigs/:gigId', // Added route for GigDetailScreen
      LiveStream: 'live',
      Wallet: 'wallet',
      Messages: 'messages',
      AdminDashboard: 'admin',
      PrivateCreatorProfile: 'profile/private',
      PublicCreatorProfile: 'profile/:id',
      FollowersList: 'followers/:id',
      PostCreation: 'create-post',
      GigCreationModal: 'create-gig',
      BookingModal: 'book-gig',
    },
  },
};

function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
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
        <Stack.Screen name="GigDetail" component={GigDetailScreen} /> {/* Added GigDetailScreen */}
        <Stack.Screen name="LiveStream" component={LiveStreamScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
        <Stack.Screen name="PrivateCreatorProfile" component={PrivateCreatorProfileScreen} />
        <Stack.Screen name="PublicCreatorProfile" component={PublicCreatorProfileScreen} />
        <Stack.Screen name="FollowersList" component={FollowersListScreen} />
        <Stack.Screen name="PostCreation" component={PostCreationModal} />
        <Stack.Screen name="GigCreationModal" component={GigCreationModal} />
        <Stack.Screen name="BookingModal" component={BookingModal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
