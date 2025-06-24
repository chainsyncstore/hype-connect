// src/app/_layout.jsx
import React, { useState, useEffect } from 'react';
import { Stack, useRouter, SplashScreen } from 'expo-router';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Text } from 'react-native';

// Placeholder for actual auth state logic
// In a real app, you'd use a context, Zustand, Redux, or AsyncStorage to manage this.
let isAuthenticated = false; // Default to false, change to true to simulate logged in

export default function RootLayout() {
  const router = useRouter();
  const [appIsReady, setAppIsReady] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(isAuthenticated);

  useEffect(() => {
    // Simulate loading resources or checking auth status
    async function prepare() {
      try {
        // Prevent the splash screen from auto-hiding before asset loading is complete.
        SplashScreen.preventAutoHideAsync();
        
        // TODO: Add any font loading or other async tasks here
        // For now, just a delay to simulate loading
        await new Promise(resolve => setTimeout(resolve, 1000));

        // TODO: Check actual authentication status here
        // For demo purposes, we use the global 'isAuthenticated' variable.
        // You can manually change it at the top of this file to test flows.
        setIsUserAuthenticated(isAuthenticated); 

      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      if (isUserAuthenticated) {
        router.replace('/(tabs)/feed'); // Or your default screen inside (tabs)
      } else {
        router.replace('/(auth)/welcome'); // Or your default auth screen
      }
    }
  }, [appIsReady, isUserAuthenticated, router]);

  if (!appIsReady) {
    return null; // Or a custom loading component / splash screen view
  }

  return (
    <TailwindProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        {/* Add other global screens/modals here if needed, e.g., for settings not in tabs */}
        {/* <Stack.Screen name="settings" component={SettingsScreen} /> */}
        {/* Modals can also be defined here with presentation: 'modal' */}
        <Stack.Screen name="(modals)/book-now" options={{ presentation: 'modal', title: 'Book Service' }}/>
        <Stack.Screen name="(modals)/tip-creator" options={{ presentation: 'modal', title: 'Send a Tip' }}/>
        <Stack.Screen name="(modals)/report-block" options={{ presentation: 'modal', title: 'Report/Block' }}/>
        <Stack.Screen name="(modals)/profile-menu" options={{ presentation: 'modal', title: 'Menu' }}/>
        
        {/* Full screen modals / creation screens outside of auth/tabs flow */}
        <Stack.Screen name="create-post" options={{ title: 'Create Post' }}/>
        <Stack.Screen name="create-gig" options={{ title: 'Create Gig' }}/>
      </Stack>
    </TailwindProvider>
  );
}