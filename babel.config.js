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
    [
      'module-resolver',
      {
        alias: {
          "@mobile": "./apps/mobile/src",
          "@web": "./apps/web/src",
          "@utils": "./packages/utils/src",
          "@ui": "./packages/ui/src",
          "@services": "./apps/mobile/src/services"
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
      }
    ],
    '@babel/plugin-transform-optional-chaining',
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
  ],
  env: {
    development: {
      plugins: [
        // Explicitly exclude react-refresh
      ],
    },
  },
};
