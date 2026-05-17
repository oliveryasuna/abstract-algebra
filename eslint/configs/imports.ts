import {pluginImportX} from '../plugins';
import type {Config} from '../types';

const imports = ((): Config[] => [
  {
    name: 'oliveryasuna/imports/base',
    plugins: {'import-x': pluginImportX},
    rules: {
      'import-x/consistent-type-specifier-style': ['error'],
      'import-x/default': ['error'],
      'import-x/dynamic-import-chunkname': ['off'],
      'import-x/export': ['error'],
      'import-x/exports-last': ['error'],
      'import-x/extensions': ['error', 'never', {json: 'always'}],
      'import-x/first': ['error', 'absolute-first'],
      'import-x/group-exports': ['error'],
      'import-x/max-dependencies': ['off'],
      'import-x/named': ['error'],
      'import-x/namespace': ['error'],
      'import-x/newline-after-import': ['error'],
      'import-x/no-absolute-path': ['error'],
      'import-x/no-cycle': ['off'],  // Useful, but takes too long to run
      'import-x/no-default-export': ['warn'],
      'import-x/no-deprecated': ['warn'],
      'import-x/no-duplicates': ['error'],
      'import-x/no-dynamic-require': ['error'],
      'import-x/no-empty-named-blocks': ['error'],
      'import-x/no-internal-modules': ['off'],
      'import-x/no-mutable-exports': ['error'],
      'import-x/no-named-as-default': ['off'],
      'import-x/no-named-as-default-member': ['off'],
      'import-x/no-named-default': ['off'],
      'import-x/no-named-export': ['off'],
      'import-x/no-namespace': ['off'],
      'import-x/no-nodejs-modules': ['off'],
      'import-x/no-relative-packages': ['error'],
      'import-x/no-relative-parent-imports': ['off'],
      'import-x/no-rename-default': ['off'],
      'import-x/no-restricted-paths': ['off'],
      'import-x/no-self-import': ['error'],
      'import-x/no-unassigned-import': ['error'],
      'import-x/no-unresolved': ['error'],
      'import-x/no-unused-modules': ['error'],
      'import-x/no-useless-path-segments': ['error'],
      'import-x/no-webpack-loader-syntax': ['error'],
      'import-x/order': ['error', {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
          orderImportKind: 'asc'
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index']
      }],
      'import-x/prefer-default-export': ['off'],
      'import-x/prefer-namespace-import': ['error'],
      'import-x/unambiguous': ['error']
    }
  },
  {
    name: 'oliveryasuna/imports/typescript',
    plugins: {'import-x': pluginImportX},
    settings: {
      'import-x/extensions': [
        '.js',
        '.jsx',
        '.cjs',
        '.mjs',
        '.ts',
        '.tsx',
        '.cts',
        '.mts'
      ],
      'import-x/external-module-folders': [
        'node_modules',
        'node_modules/@types'
      ],
      'import-x/parsers': {
        '@typescript-eslint/parser': [
          '.ts',
          '.tsx',
          '.cts',
          '.mts'
        ]
      },
      'import-x/resolver': {typescript: true}
    },
    rules: {'import-x/named': ['off']}
  }
]);

export {
  imports
};
