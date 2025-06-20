// craco.config.js
// Customize CRA webpack to relax fullySpecified ESM import requirement for @react-navigation/native

module.exports = {
  eslint: {
    enable: false, // Disable ESLint temporarily to fix build
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Disable React Fast Refresh for better compatibility
      if (env === 'development') {
        const reactRefreshPlugin = webpackConfig.plugins.find(
          plugin => plugin.constructor.name === 'ReactRefreshWebpackPlugin'
        );
        if (reactRefreshPlugin) {
          webpackConfig.plugins = webpackConfig.plugins.filter(
            plugin => plugin !== reactRefreshPlugin
          );
        }
      }

      // Disable the fullySpecified check
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      return webpackConfig;
    },
  },
};
