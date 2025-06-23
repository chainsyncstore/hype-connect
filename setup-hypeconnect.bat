@echo off
echo 📦 Setting up HypeConnect directory structure and essential files...

:: Create folders
for %%F in (
  "assets\fonts"
  "assets\images"
  "src\components"
  "src\constants"
  "src\navigation"
  "src\screens\Auth"
  "src\screens\Feed"
  "src\screens\Profile"
  "src\screens\Gigs"
  "src\screens\Live"
  "src\screens\Wallet"
  "src\screens\Messages"
  "src\screens\Admin"
  "src\services"
  "src\utils"
) do (
  if not exist %%F (
    mkdir %%F
    echo Created directory: %%F
  )
)

:: Create essential navigation files if missing

if not exist src\navigation\AuthStack.js (
  (
    echo(// AuthStack Navigation
    echo(import React from 'react';)
    echo(import ^{ createNativeStackNavigator ^} from '@react-navigation/native-stack';)
    echo(const Stack = createNativeStackNavigator();)
    echo(// TODO: add screens to this navigator)
    echo(export default function AuthStack() ^{
    echo(  // return stack navigator here)
    echo(^})
  ) > src\navigation\AuthStack.js
  echo Created src\navigation\AuthStack.js
)

if not exist src\navigation\MainTabs.js (
  (
    echo(// MainTabs Navigation
    echo(import React from 'react';)
    echo(import ^{ createBottomTabNavigator ^} from '@react-navigation/bottom-tabs';)
    echo(const Tab = createBottomTabNavigator();)
    echo(// TODO: add tabs to this navigator)
    echo(export default function MainTabs() ^{
    echo(  // return tab navigator here)
    echo(^})
  ) > src\navigation\MainTabs.js
  echo Created src\navigation\MainTabs.js
)

:: Create App.js if missing
if not exist App.js (
  (
    echo(import React from 'react';)
    echo(import ^{ NavigationContainer ^} from '@react-navigation/native';)
    echo(import AuthStack from './src/navigation/AuthStack';)
    echo(export default function App() ^{
    echo(  // return NavigationContainer wrapping your AuthStack)
    echo(^})
  ) > App.js
  echo Created App.js
)

echo ✅ Project scaffold complete.
pause
