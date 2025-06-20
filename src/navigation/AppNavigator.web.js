import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomeScreen from '../WelcomeScreen.jsx';
// Import other screens as needed for web navigation

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomeScreen />,
  },
  {
    path: '/welcome',
    element: <WelcomeScreen />,
  },
  // Define other web routes here
  // Example:
  // {
  //   path: '/signup',
  //   element: <SignUpScreen />,
  // },
]);

export default function AppNavigatorWeb() {
  return <RouterProvider router={router} />;
}
