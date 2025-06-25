
const { override, addBabelPlugin, disableEsLint } = require('customize-cra');

module.exports = override(
  disableEsLint(),
  addBabelPlugin([
    'react-refresh/babel',
    {
      skipEnvCheck: true,
    },
  ]),
  (config) => {
    // Disable react-refresh for production builds
    // Remove ReactRefreshPlugin in production builds
    if (process.env.NODE_ENV === 'production') {
      config.plugins = config.plugins.filter(
        (plugin) => !plugin.constructor.name.includes('ReactRefreshPlugin')
      );
    }

    // Remove ForkTsCheckerWebpackPlugin to disable TypeScript type checking (we rely on Babel)
    config.plugins = config.plugins.filter(
      (plugin) => !plugin.constructor.name.includes('ForkTsCheckerWebpackPlugin')
    );
    
    // Fix module resolution for react-refresh
    // Add aliases including react-native -> react-native-web
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-refresh/runtime': require.resolve('react-refresh/runtime'),
      'react-native$': 'react-native-web',
      '@react-navigation/native-stack': '@react-navigation/native-stack/lib/commonjs',
      '@react-navigation/native-stack/lib/module/views/NativeStackView': '@react-navigation/native-stack/lib/commonjs/views/NativeStackView.js',
      '@react-navigation/native-stack/lib/module/views/NativeStackView/': '@react-navigation/native-stack/lib/commonjs/views/NativeStackView.js',
      '@react-navigation/native': '@react-navigation/native/lib/commonjs',
      // Fix fullySpecified issues by aliasing to .js files
      '@react-navigation/native/lib/module/useBackButton': '@react-navigation/native/lib/commonjs/useBackButton.js',
      '@react-navigation/native/lib/module/useDocumentTitle': '@react-navigation/native/lib/commonjs/useDocumentTitle.js',
      '@react-navigation/native/lib/module/useLinking': '@react-navigation/native/lib/commonjs/useLinking.js',
      
    };

    // Disable fullySpecified extension enforcement globally
    config.module.rules.push({
      test: /@react-navigation\/.*\/lib\/module/,
      resolve: { fullySpecified: false },
    });

    // Disable fullySpecified extension enforcement globally
    config.resolve = {
      ...config.resolve,
      fullySpecified: false,
      byDependency: {
        ...(config.resolve.byDependency || {}),
        esm: { fullySpecified: false },
      },
    };

    // Support platform-specific web extensions first
    if (config.resolve.extensions && Array.isArray(config.resolve.extensions)) {
      const webExtensions = ['.web.js', '.web.jsx', '.web.ts', '.web.tsx'];
      config.resolve.extensions = [...webExtensions, ...config.resolve.extensions];
    }
    
    return config;
  }
);
