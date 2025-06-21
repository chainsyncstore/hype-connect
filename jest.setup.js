// jest.setup.js

// Mock RefreshControl first to address the "Cannot find module RefreshControlMock" error
jest.mock('react-native/Libraries/Components/RefreshControl/RefreshControl', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return View; // Mock RefreshControl with a simple View or a more specific mock if needed
});

// Let jest-expo handle the react-native-gesture-handler mock.
// If problems persist, a minimal mock might be needed, e.g.:
jest.mock('react-native-gesture-handler', () => {
  const actualGestureHandler = jest.requireActual('react-native-gesture-handler');
  return {
    ...actualGestureHandler,
    RNGestureHandlerModule: {
      ...(actualGestureHandler.RNGestureHandlerModule || {}), // Ensure RNGestureHandlerModule object exists
      State: (actualGestureHandler.RNGestureHandlerModule && actualGestureHandler.RNGestureHandlerModule.State) || {},
      // Provide install/flush directly on the module
      install: jest.fn(),
      flushOperations: jest.fn(),
      default: { // Also provide on default for compatibility
        ...((actualGestureHandler.RNGestureHandlerModule && actualGestureHandler.RNGestureHandlerModule.default) || {}),
        install: jest.fn(),
        flushOperations: jest.fn(),
      },
    },
    gestureHandlerRootHOC: (Component) => Component,
  };
});


// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.useSharedValue = jest.fn(() => ({ value: 0 }));
  Reanimated.useAnimatedStyle = jest.fn(() => ({}));
  Reanimated.withTiming = jest.fn((toValue, options, callback) => {
    if (callback) {
      callback(true); // or false, depending on what you want to simulate
    }
    return toValue;
  });
  Reanimated.withSpring = jest.fn((toValue, options, callback) => {
    if (callback) {
      callback(true);
    }
    return toValue;
  });
  Reanimated.Easing = {
    // Provide mock implementations or actual Easing functions if needed
    linear: (t) => t,
    // ... other easing functions
  };
  // Add any other functions from reanimated that your components might use
  return Reanimated;
});


// You can add other global setup here, for example, extending expect:
// import '@testing-library/jest-native/extend-expect';

console.log('jest.setup.js loaded with mocks for gesture-handler and reanimated');
