const { getDefaultConfig } = require('@react-native/metro-config');

/**
 * @type {import('expo/metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname, {
  // We are opting out of package exports for now to avoid breaking changes in SDK 53.
  unstable_enablePackageExports: false,
});

module.exports = config;