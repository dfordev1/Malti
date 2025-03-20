export default {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals'
  ],
  rules: {},
}; 