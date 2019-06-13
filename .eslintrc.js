module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
