
import React, { useState } from 'react';
import './input.css';

// Import your screens but we'll render them conditionally
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import InterestsScreen from './InterestsScreen';
import SuccessScreen from './SuccessScreen';
import MainContentScreen from './MainContentScreen';
import PostDetailScreen from './PostDetailScreen';
import CreatorEarningsScreen from './CreatorEarningsScreen';

export default function WebApp() {
  const [currentScreen, setCurrentScreen] = useState('Welcome');

  // Create a navigation object similar to React Navigation
  const navigation = {
    navigate: (screenName) => {
      setCurrentScreen(screenName);
    },
    goBack: () => {
      // Simple back navigation - you can enhance this
      setCurrentScreen('Welcome');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Welcome':
        return <WelcomeScreen navigation={navigation} />;
      case 'Login':
        return <LoginScreen navigation={navigation} />;
      case 'SignUp':
        return <SignUpScreen navigation={navigation} />;
      case 'Interests':
        return <InterestsScreen navigation={navigation} />;
      case 'Success':
        return <SuccessScreen navigation={navigation} />;
      case 'MainContent':
        return <MainContentScreen navigation={navigation} />;
      case 'PostDetail':
        return <PostDetailScreen navigation={navigation} />;
      case 'CreatorEarnings':
        return <CreatorEarningsScreen navigation={navigation} />;
      default:
        return <WelcomeScreen navigation={navigation} />;
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      backgroundColor: '#1b1b1e',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      {renderScreen()}
    </div>
  );
}
