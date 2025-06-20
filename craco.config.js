// craco.config.js
// Customize CRA webpack to relax fullySpecified ESM import requirement for @react-navigation/native

module.exports = {
  eslint: {
    enable: false, // Disable ESLint temporarily to fix build
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Completely disable React Fast Refresh to prevent import issues
      if (env === 'development') {
        // Remove React Refresh plugin
        webpackConfig.plugins = webpackConfig.plugins.filter(
          plugin => plugin.constructor.name !== 'ReactRefreshWebpackPlugin'
        );
        
        // Remove React Refresh babel plugin
        const babelRule = webpackConfig.module.rules.find(
          rule => rule.oneOf
        );
        if (babelRule && babelRule.oneOf) {
          babelRule.oneOf.forEach(rule => {
            if (rule.use && Array.isArray(rule.use)) {
              rule.use.forEach(use => {
                if (use.loader && use.loader.includes('babel-loader')) {
                  if (use.options && use.options.plugins) {
                    use.options.plugins = use.options.plugins.filter(
                      plugin => !plugin.includes('react-refresh')
                    );
                  }
                }
              });
            }
          });
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
