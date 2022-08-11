module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['custom', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'custom/no-console': 'warn',
    // 'custom/name-interface-const-component': 'warn',
    'custom/count-interface-component': 'warn',
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'custom/count-interface-component': 'off'
      },
    },
  ]
};