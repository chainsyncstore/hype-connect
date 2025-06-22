module.exports = {
  eslint: {
    enable: true,
    mode: 'file', // Or 'extends', but 'file' is often simpler if not deeply customizing ESLint rules via craco
    pluginOptions: (eslintPluginOptions, { env, paths }) => {
      // You can customize eslint-webpack-plugin options here if needed
      // For now, let's keep it simple and rely on defaults
      // Ensure it uses the project's .eslintrc.js
      eslintPluginOptions.overrideConfigFile = '.eslintrc.js';
      // Attempt to fix linting issues automatically during build
      eslintPluginOptions.fix = true;
      return eslintPluginOptions;
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Completely disable React Fast Refresh
      if (env === 'development') {
        // Remove React Refresh webpack plugin
        webpackConfig.plugins = webpackConfig.plugins.filter(
          plugin => plugin.constructor.name !== 'ReactRefreshWebpackPlugin',
        );

        // Remove React Refresh from babel-loader options
        const oneOfRules = webpackConfig.module.rules.find(rule => rule.oneOf);
        if (oneOfRules && oneOfRules.oneOf) {
          oneOfRules.oneOf.forEach(rule => {
            if (rule.test && rule.test.toString().includes('js') && rule.use) {
              rule.use.forEach(use => {
                if (use.loader && use.loader.includes('babel-loader')) {
                  if (use.options && use.options.plugins) {
                    use.options.plugins = use.options.plugins.filter(plugin => {
                      if (typeof plugin === 'string') {
                        return !plugin.includes('react-refresh');
                      }
                      if (Array.isArray(plugin)) {
                        return !plugin[0].includes('react-refresh');
                      }
                      return true;
                    });
                  }
                  // Ensure react-refresh is completely disabled
                  if (use.options && use.options.env) {
                    delete use.options.env.development;
                  }
                }
              });
            }
          });
        }
      }

      // Disable the fullySpecified check for ES modules
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      // Add fallbacks for node modules
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: false,
        stream: false,
        buffer: false,
        util: false,
      };

      return webpackConfig;
    },
  },
};
