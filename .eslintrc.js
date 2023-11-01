const jsExtensions = ['.js', '.jsx', '.json'];
const tsExtensions = ['.ts', '.tsx', '.tson', '.d.ts'];
const tryExtensions = ['.ts', '.tsx', '.tson', '.js', '.jsx', '.json', '.mjs', '.node', '.d.ts'];
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    // tsconfigRootDir: __dirname,
    // project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['hardcore'],
  extends: ['next/core-web-vitals', 'plugin:hardcore/recommended', 'plugin:hardcore/react'],
  env: {
    es6: true,
    node: true,
    commonjs: true,
    browser: false,
  },
  settings: {
    node: {
      tryExtensions,
      allowModules: [],
      resolvePaths: [__dirname],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        extensions: tsExtensions,
        project: './tsconfig.json',
      },
      node: {
        extensions: jsExtensions,
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
  },
  rules: {
    'react/jsx-no-bind': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-for-in-array': 'off',
  },
  overrides: [
    {
      files: [
        'src/app/**/layout.tsx',
        'src/app/**/page.tsx',
        'src/pages/**',
        '**/*.stories.tsx',
        'src/components/icons/**',
        'functions/**',
      ],
      rules: {
        'import/no-default-export': 'off',
        'filenames/no-index': 'off',
        'import/prefer-default-export': 'error',
        'hardcore/export-match-filename': 'off',
      },
    },
  ],
};
