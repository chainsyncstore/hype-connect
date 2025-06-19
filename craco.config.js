// craco.config.js
// Customize CRA webpack to relax fullySpecified ESM import requirement for @react-navigation/native

module.exports = {
  eslint: {
    enable: false, // Disable craco's ESLint handling
  },
  webpack: {
    configure: webpackConfig => {
      // Disable the fullySpecified check for @react-navigation/native
      // Disable `fullySpecified` for *all* JS imports so packages that omit extensions (e.g. @react-navigation/*) resolve correctly.
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      // Add rule for .jsx files
      webpackConfig.module.rules.push({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      });

      return webpackConfig;
    },
  },
};
