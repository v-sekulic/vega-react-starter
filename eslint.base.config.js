// eslint.base.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.jest },
    },
    plugins: {
      '@typescript-eslint': ts,
      'react-hooks': reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules, // ESLint recommended rules
      ...ts.configs.recommended.rules, // TypeScript recommended rules
      ...reactHooks.configs.recommended.rules, // React hooks rules
      ...prettierConfig.rules,
      // '@typescript-eslint/no-unused-vars': 'error', // Unused variables will now throw an error
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
