module.exports = {
  plugins: ['prettier'],
  extends: ['next/core-web-vitals'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'warn',
    'react-hooks/exhaustive-deps': 'off',
  },
};
