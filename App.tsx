/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Platform, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigatorNative from './src/navigation/AppNavigator.native.js';
import AppNavigatorWeb from './src/navigation/AppNavigator.web.js';

function App() {
  console.log('App component is being rendered');
  useColorScheme(); // Removed '=== dark' as it wasn't used

  if (Platform.OS === 'web') {
    return <AppNavigatorWeb />;
  } else {
    return (
      <NavigationContainer>
        <AppNavigatorNative />
      </NavigationContainer>
    );
  }
}

export default App;
