const { getDefaultConfig } = require('@react-native/metro-config');
const { withTailwind } = require('tailwindcss-react-native/metro');

/**
 * @type {import('expo/metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname, {
  // We are opting out of package exports for now to avoid breaking changes in SDK 53.
  unstable_enablePackageExports: false,
});

module.exports = withTailwind(config);