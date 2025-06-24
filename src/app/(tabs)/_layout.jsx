// src/app/(tabs)/_layout.jsx
import React from 'react';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const ACCENT_COLOR = '#F5A623';
const PRIMARY_COLOR = '#1B1B1E';
const INACTIVE_COLOR = '#888';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ACCENT_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarStyle: {
          backgroundColor: PRIMARY_COLOR,
          borderTopColor: '#333',
        },
        tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
      }}
    >
      <Tabs.Screen name="feed"
        options={{ title: 'Feed', tabBarIcon: ({ focused }) => 
          <Text style={{ color: focused ? ACCENT_COLOR : INACTIVE_COLOR, fontSize: 20 }}>🏠</Text> }}
      />
      <Tabs.Screen name="gigs"
        options={{ title: 'Gigs', tabBarIcon: ({ focused }) => 
          <Text style={{ color: focused ? ACCENT_COLOR : INACTIVE_COLOR, fontSize: 20 }}>💼</Text> }}
      />
      <Tabs.Screen name="live"
        options={{ title: 'Live', tabBarIcon: ({ focused }) => 
          <Text style={{ color: focused ? ACCENT_COLOR : INACTIVE_COLOR, fontSize: 20 }}>📺</Text> }}
      />
      <Tabs.Screen name="messages"
        options={{ title: 'Messages', tabBarIcon: ({ focused }) => 
          <Text style={{ color: focused ? ACCENT_COLOR : INACTIVE_COLOR, fontSize: 20 }}>💬</Text> }}
      />
      <Tabs.Screen name="profile"
        options={{ title: 'Profile', tabBarIcon: ({ focused }) => 
          <Text style={{ color: focused ? ACCENT_COLOR : INACTIVE_COLOR, fontSize: 20 }}>👤</Text> }}
      />
    </Tabs>
  );
}