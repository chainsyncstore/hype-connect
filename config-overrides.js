
const path = require('path');
const paths = require('react-scripts/config/paths');
paths.appSrc = path.resolve(__dirname, 'apps/web/src');
paths.appIndexJs = path.resolve(__dirname, 'apps/web/src/index.js');
paths.appPublic = path.resolve(__dirname, 'apps/web/public');
paths.appHtml = path.resolve(__dirname, 'apps/web/public/index.html');

const { override, addBabelPlugin, disableEsLint } = require('customize-cra');

module.exports = override(
  disableEsLint(),
  addBabelPlugin([
    'module-resolver',
    {
      alias: {
        '@mobile': path.resolve(__dirname, 'apps/mobile/src'),
        '@web': path.resolve(__dirname, 'apps/web/src'),
        '@utils': path.resolve(__dirname, 'packages/utils/src'),
        '@ui': path.resolve(__dirname, 'packages/ui/src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
  ]),
  ...(process.env.NODE_ENV === 'production'
    ? []
    : [
        addBabelPlugin([
          'react-refresh/babel',
          {
            skipEnvCheck: true,
          },
        ]),
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
      '@mobile': path.resolve(__dirname, 'apps/mobile/src'),
      '@web': path.resolve(__dirname, 'apps/web'),
      '@services': path.resolve(__dirname, 'apps/mobile/src/services'),
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

    // Include mobile app path for Babel/TSX processing
    const mobilePath = path.resolve(__dirname, 'apps/mobile');
    // find babel-loader in oneOf array
    config.module.rules.forEach((rule) => {
      if (Array.isArray(rule.oneOf)) {
        rule.oneOf.forEach((one) => {
          if (one?.loader && one.loader.includes('babel-loader') && one.include) {
            if (Array.isArray(one.include)) {
              one.include.push(mobilePath);
            } else {
              one.include = [one.include, mobilePath];
            }
          }
        });
      }
    });

    // Support platform-specific web extensions first
    if (config.resolve.extensions && Array.isArray(config.resolve.extensions)) {
      const webExtensions = ['.web.js', '.web.jsx', '.web.ts', '.web.tsx'];
      config.resolve.extensions = [...webExtensions, ...config.resolve.extensions];
    }
    
        // Remove ModuleScopePlugin to allow imports outside src folder (monorepo)
    config.resolve.plugins = (config.resolve.plugins || []).filter(
      (plugin) => plugin.constructor && plugin.constructor.name !== 'ModuleScopePlugin'
    );
    return config;
  }
);
