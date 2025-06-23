import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { View, StyleSheet } from 'react-native';

// Screens
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MainContentScreen from './MainContentScreen';
import InterestsScreen from './InterestsScreen';

const WebApp = () => {
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/login" element={<LoginScreen setUser={setUser} />} />
          <Route path="/signup" element={<SignUpScreen setUser={setUser} />} />
          <Route path="/interests" element={<InterestsScreen />} />
          <Route
            path="/main"
            element={user ? <MainContentScreen user={user} /> : <Navigate to="/login" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#1b1b1e',
    overflow: 'hidden',
  },
});

export default WebApp;