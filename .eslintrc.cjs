/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    indent: 'off',
    'linebreak-style': ['warn', 'unix'],
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'generator-star-spacing': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        tabWidth: 2,
        singleQuote: true,
        // printWidth: 180,
        trailingComma: 'es5',
      },
    ],
  },
}
