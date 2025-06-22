const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const {
    fixupConfigRules,
    fixupPluginRules,
} = require("@eslint/compat");

const react = require("eslint-plugin-react");
const globals = require("globals"); // Added
const babelParser = require("@babel/eslint-parser"); // Added
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([
    {
        files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Apply this config to relevant files
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
                babelOptions: {
                    presets: ["@babel/preset-react"]
                }
            },
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.jest, // Assuming jest is used, can be removed if not
                // Add any other specific globals your project needs
            },
        },
        settings: { // Moved settings here as it's usually per-config object
            react: {
                version: "detect",
            },
        },
        // extends: fixupConfigRules( // Temporarily commented out to isolate parser issues
        //     compat.extends("react-app", "react-app/jest", "plugin:react/recommended", "prettier"),
        // ),
        plugins: {
            react: fixupPluginRules(react),
            // Consider adding '@typescript-eslint' plugin here if you have .ts/.tsx files and typescript-specific rules
        },
        rules: {
            "react/prop-types": "off",
            "react/no-unescaped-entities": "off",
            // Add or override other rules as needed
        },
    },
    {
        ignores: ["**/build/", "**/dist/", "**/node_modules/"], // More explicit ignores
    }
]);
