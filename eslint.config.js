import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
// import reactX from "eslint-plugin-react-x"
// import reactDom from "eslint-plugin-react-dom"

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      // // Remove tseslint.configs.recommended and replace with this
      // ...tseslint.configs.recommendedTypeChecked,
      // // Alternatively, use this for stricter rules
      // ...tseslint.configs.strictTypeChecked,
      // // Optionally, add this for stylistic rules
      // ...tseslint.configs.stylisticTypeChecked,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      // // Enable lint rules for React
      // reactX.configs["recommended-typescript"],
      // // Enable lint rules for React DOM
      // reactDom.configs.recommended,
    ],
    plugins: ['react', '@typescript-eslint'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslintConfigPrettier],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  },
])
