module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [0],
    'import/prefer-default-export': [0],
    'no-param-reassign': [0],
    'no-use-before-define': [0],
    'react/no-unescaped-entities': [0],
    'react/forbid-prop-types': [0],
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': [0],
    'react/no-unstable-nested-components': [0],
  },
};
