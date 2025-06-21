
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from '../app.json';

// Register the app component
AppRegistry.registerComponent(appName, () => App);

// Run the app for web
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root') || document.getElementById('app-root'),
});
