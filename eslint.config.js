import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import babelParser from '@babel/eslint-parser';

// mimic CommonJS variables -- not needed if using CommonJS, but good practice for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // Recommended to correctly resolve paths in the extended config
  // resolvePluginsRelativeTo: __dirname // Optional: if you have plugins referenced by the extended config
});

export default [
  {
    ignores: ['dist/*'],
  },
  // Mimic extends: '@react-native-community/eslint-config'
  ...compat.extends('@react-native-community/eslint-config'),

  // Add other configurations as objects in this array
  {
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        // Add any global variables here if needed, e.g.:
        // "myGlobal": "readonly"
      },
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // You can specify files, plugins, rules, etc. here
    // For example:
    // files: ["**/*.js", "**/*.jsx"],
    // rules: {
    //   "semi": "error"
    // }
  },
];
