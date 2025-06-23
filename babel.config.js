module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-runtime',
      // Only for Web
      [
        'module-resolver',
        {
          alias: {
            // Optional: add any needed aliases here
          },
        },
      ],
    ],
    // 👇 Prevents Babel from trying to compile node_modules
    ignore: [
      /node_modules\/(?!react-native|expo|@expo|@unimodules|@react-native|react-native-web|@react-navigation)/,
    ],
  };
};