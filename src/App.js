import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { TailwindProvider } from "nativewind";

import AuthStack from "./src/navigation/AuthStack";
import MainTabs from "./src/navigation/MainTabs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <SafeAreaView className="flex-1 bg-black">
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Auth flow */}
            <Stack.Screen name="AuthStack" component={AuthStack} />
            {/* Main app after login */}
            <Stack.Screen name="MainTabs" component={MainTabs} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </TailwindProvider>
  );
}
