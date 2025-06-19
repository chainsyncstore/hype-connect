module.exports = {
  presets: [
    '@babel/preset-env',
    'module:metro-react-native-babel-preset',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // Enable modern JSX transform
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-optional-chaining',
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
  ],
};
