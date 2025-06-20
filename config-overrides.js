module.exports = function override(config, env) {
  // Add a rule to handle .mjs files and disable fullySpecified
  // This is to handle issues like the one with @react-navigation/native
  // Ensure config.module and config.module.rules exist
  config.module = config.module || {};
  config.module.rules = config.module.rules || [];

  config.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false,
    },
  });
  return config;
};
