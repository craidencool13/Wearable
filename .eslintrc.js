module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    // 'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/exhaustive-deps': 0,
    curly: [true, 'ignore-same-line'],
  },
};
