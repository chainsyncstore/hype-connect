// src/app/(auth)/_layout.jsx
import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      {/* You might also have screens like 'forgot-password' in this stack */}
      {/* <Stack.Screen name="forgot-password" /> */}
      {/* The 'interests' screen might also live here if it's part of the signup flow before reaching main tabs */}
      <Stack.Screen name="interests" /> 
    </Stack>
  );
}