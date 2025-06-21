
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
    if (process.env.NODE_ENV === 'production') {
      config.plugins = config.plugins.filter(
        (plugin) => !plugin.constructor.name.includes('ReactRefreshPlugin')
      );
    }
    
    // Fix module resolution for react-refresh
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-refresh/runtime': require.resolve('react-refresh/runtime'),
    };
    
    return config;
  }
);
