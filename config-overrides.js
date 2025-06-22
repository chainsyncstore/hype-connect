const path = require('path'); // Ensure path is imported
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

    // Attempt to resolve issues with extensionless imports in ESM modules
    config.resolve.extensions = [...(config.resolve.extensions || []), '.js', '.jsx', '.ts', '.tsx'];
    config.resolve.fullySpecified = false;
    config.resolve.preferRelative = true;

    // Allow importing app.json from the root directory
    const moduleScopePlugin = config.resolve.plugins.find(
      (plugin) => plugin.constructor.name === 'ModuleScopePlugin'
    );
    if (moduleScopePlugin) {
      const appJsonPath = path.resolve(__dirname, 'app.json');
      moduleScopePlugin.allowedFiles.add(appJsonPath);
      // If ModuleScopePlugin has allowedPaths instead of allowedFiles (older versions)
      // moduleScopePlugin.allowedPaths.push(appJsonPath);
    } else {
      console.warn('ModuleScopePlugin not found, cannot allow app.json import.');
    }
    
    return config;
  }
);
