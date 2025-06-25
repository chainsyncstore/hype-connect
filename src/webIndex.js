import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
const appName = 'HypeConnect';

// Register the app component
AppRegistry.registerComponent(appName, () => App);

// Run the app for web
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
