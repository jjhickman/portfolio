module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaVersion: 2021
  },
  extends: [
    'xo-space/esnext',
    'xo-react/space',
    'xo-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier'],
  rules: {
    'object-curly-spacing': 'always',
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    'capitalized-comments': 'off',
    'no-warning-comments': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
  }
};
