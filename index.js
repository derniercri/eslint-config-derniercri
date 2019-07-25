module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'jsx-boolean-value': 0,
    'jsx-no-lambda': 0,
    'newline-before-return': 1
  }
}
