module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Plugins can be added here if specific ones are needed beyond what babel-preset-expo provides
    // For example, if you still need react-native-reanimated/plugin, it would go here.
    // plugins: ['react-native-reanimated/plugin'],
  };
};
