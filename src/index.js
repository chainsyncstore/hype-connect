
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from '../app.json';

AppRegistry.registerComponent(appName, () => App);

// For web
if (typeof document !== 'undefined') {
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('root') || document.getElementById('app-root'),
  });
}
