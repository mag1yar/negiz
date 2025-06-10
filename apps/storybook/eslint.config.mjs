import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import { reactConfig } from '@repo/eslint-config/react-internal';

export default [
  ...reactConfig,
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  { ignores: ['dist/'] },
];
