// ESLint flat config (ESLint v10)
const js = require("@eslint/js");
const globals = require("globals");
const security = require("eslint-plugin-security");

module.exports = [
  { ignores: ["node_modules/**", "coverage/**"] },
  js.configs.recommended,
  security.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: {
      eqeqeq: "warn",
      "no-unused-vars": "warn",
      "no-var": "warn",
      "prefer-const": "warn",
    },
  },
];
