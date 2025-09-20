import { reactConfig } from '@repo/eslint-config/react-internal';

export default [
  ...reactConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Library code often needs any for generic components
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
  { ignores: ['dist/'] },
];
