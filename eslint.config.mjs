import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.config({
    plugins: [ 'perfectionist', '@stylistic/js', 'react-hooks', 'react-refresh' ],
    rules: {
      'perfectionist/sort-named-imports': [
        1,
        {
          order: 'asc',
          type: 'line-length'
        }
      ],
      'perfectionist/sort-named-exports': [
        1,
        {
          order: 'asc',
          type: 'line-length'
        }
      ],
      'perfectionist/sort-exports': [
        1,
        {
          order: 'asc',
          type: 'line-length'
        }
      ],
      'perfectionist/sort-imports': [
        1,
        {
          order: 'asc',
          type: 'line-length',
          newlinesBetween: 'always',
          groups: [
            [ 'builtin', 'external' ],
            'custom-routes',
            'custom-hooks',
            'custom-utils',
            'internal',
            'custom-components',
            'custom-sections',
            'custom-types',
            [ 'parent', 'sibling', 'index' ],
            'object',
            'unknown'
          ],
          customGroups: {
            value: {
              'custom-routes': '^src/routes/.*',
              'custom-hooks': '^src/hooks/.*',
              'custom-utils': '^src/utils/.*',
              'custom-components': '^src/components/.*',
              'custom-sections': '^src/sections/.*',
              'custom-types': '^src/types/.*'
            }
          },
          internalPattern: [ '^src/.*' ]
        }
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'comma-dangle': [ 'error', 'never' ],
      indent: [ 'error', 2 ],
      'react/jsx-indent': [ 'error', 2 ],
      quotes: [ 'error', 'single' ],
      'jsx-quotes': [ 'error', 'prefer-single' ],
      semi: [ 'error', 'never' ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'warn',
      '@stylistic/js/no-trailing-spaces': 'error',
      '@stylistic/js/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/js/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/js/arrow-parens': [
        2,
        'as-needed',
        { requireForBlockBody: true }
      ]
    }
  }),
  {
    files: [ '**/*.{js,jsx,ts,tsx}' ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  ...compat.extends('next/core-web-vitals')
]

export default eslintConfig
