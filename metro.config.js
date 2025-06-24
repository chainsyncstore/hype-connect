const { getDefaultConfig } = require('expo/metro-config');

/**
 * @type {import('expo/metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname, {
  // Opt out of package exports in SDK 53 to avoid breaking changes.
  unstable_enablePackageExports: false,
});

module.exports = config;