import React, { useState } from 'react';
import { View } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MainContentScreen from './MainContentScreen';
import InterestsScreen from './InterestsScreen';

const WebApp = () => {
  const [currentScreen, setCurrentScreen] = useState('Welcome');
  const [user, setUser] = useState(null);

  const navigateToScreen = screenName => {
    setCurrentScreen(screenName);
  };

  const renderScreen = () => {
    const navigation = {
      navigate: navigateToScreen,
    };

    switch (currentScreen) {
      case 'Welcome':
        return <WelcomeScreen navigation={navigation} />;
      case 'Login':
        return <LoginScreen navigation={navigation} setUser={setUser} />;
      case 'SignUp':
        return <SignUpScreen navigation={navigation} setUser={setUser} />;
      case 'MainContent':
        return <MainContentScreen navigation={navigation} user={user} />;
      case 'Interests':
        return <InterestsScreen navigation={navigation} />;
      default:
        return <WelcomeScreen navigation={navigation} />;
    }
  };

  return (
    <View
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#1b1b1e',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {renderScreen()}
    </View>
  );
};

export default WebApp;
