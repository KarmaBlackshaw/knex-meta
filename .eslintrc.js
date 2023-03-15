module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-useless-catch': 'off',
    eqeqeq: 'off',
    'prefer-regex-literals': 'off',
    'default-case': 'off',
    'comma-dangle': ['error', 'never'],
    'prefer-const': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'arrow-parens': [2, 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    curly: [2, 'all'],
    indent: ['error', 2, {
      SwitchCase: 1,
      outerIIFEBody: 'off'
    }],
    'comma-spacing': ['error', {
      before: false, after: true
    }],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false
    }],
    'no-unused-vars': ['error',
      {
        argsIgnorePattern: 'next|_.+',
        varsIgnorePattern: '_'
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off'
  }
}
