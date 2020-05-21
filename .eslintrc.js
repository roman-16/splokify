const defaultConfig = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['@blue-tomato'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};

module.exports = {
  ...defaultConfig,
  root: true,
  overrides: [
    {
      ...defaultConfig,
      files: ['*.ts', '*.ts.string'],
      extends: [
        ...defaultConfig.extends,
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ...defaultConfig.parserOptions,
        project: './tsconfig.json',
        extraFileExtensions: ['.ts.string'],
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
      },
    },
  ],
};
