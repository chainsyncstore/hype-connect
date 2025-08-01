import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App'; // Assuming App.tsx is correctly resolved by the bundler
const appName = 'HypeConnect';

AppRegistry.registerComponent(appName, () => App);

// For web
if (typeof document !== 'undefined') {
  const rootTag = document.getElementById('root') || document.getElementById('app-root');
  if (rootTag) {
    AppRegistry.runApplication(appName, {
      initialProps: {},
      rootTag,
    });
  } else {
    console.warn('Root tag not found for web. App will not be rendered.');
  }
}
