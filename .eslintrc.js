module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript/base',
    'airbnb-base',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: ["tsconfig.json"] ,
    sourceType: "module"
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.ts'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    "camelcase": ["error", {"allow": ["uuid_v4"]}],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
          "ts": "never",
          "tsx": "never",
      }
    ]
  },
  settings: {
    'import/resolver': {
        node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            moduleDirectory: ['node_modules', 'src/'],
        },
    },
  }
};
