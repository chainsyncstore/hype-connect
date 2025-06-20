import React, { useState } from 'react';
import './input.css';

// Import your screens but we'll render them conditionally
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import InterestsScreen from './InterestsScreen';
import MainContentScreen from './MainContentScreen';

const WebApp = () => {
  const [screen, setScreen] = useState('welcome');

  // Simple navigation logic for web
  const goTo = nextScreen => setScreen(nextScreen);

  let ScreenComponent;
  switch (screen) {
    case 'welcome':
      ScreenComponent = <WelcomeScreen goTo={goTo} />;
      break;
    case 'login':
      ScreenComponent = <LoginScreen goTo={goTo} />;
      break;
    case 'signup':
      ScreenComponent = <SignUpScreen goTo={goTo} />;
      break;
    case 'interests':
      ScreenComponent = <InterestsScreen goTo={goTo} />;
      break;
    case 'main':
      ScreenComponent = <MainContentScreen goTo={goTo} />;
      break;
    default:
      ScreenComponent = <WelcomeScreen goTo={goTo} />;
  }

  return <div className="web-app">{ScreenComponent}</div>;
};

export default WebApp;
