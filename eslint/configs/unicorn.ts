import {pluginUnicorn} from '../plugins';
import type {Config} from '../types';

// TODO: Do not use preconfigured configs
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const unicorn = ((): Config[] => [
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ...pluginUnicorn.configs.recommended,
    name: 'oliveryasuna/unicorn/recommended'
  },
  {
    name: 'oliveryasuna/unicorn/rules/base',
    rules: {
      'unicorn/catch-error-name': [
        'error',
        {name: 'err'}
      ],
      'unicorn/consistent-function-scoping': ['off'],
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
          ignore: [
            String.raw`^.+\.tsx$`,
            String.raw`^.+\.props\.ts$`,
            String.raw`^use.+\.ts$`,
            String.raw`^.+\.css\.ts$`,
            String.raw`^.+Context\.ts$`
          ]
        }
      ],
      'unicorn/no-array-reduce': ['off'],
      'unicorn/no-await-expression-member': ['off'],
      'unicorn/no-null': ['off'],
      'unicorn/no-useless-switch-case': ['off'],
      'unicorn/numeric-separators-style': ['off'],
      'unicorn/prefer-class-fields': ['off'],
      'unicorn/prefer-export-from': ['off'],
      'unicorn/prefer-global-this': ['off'],
      'unicorn/prefer-module': ['off'],
      'unicorn/prefer-optional-catch-binding': ['off'],
      'unicorn/prefer-ternary': [
        'error',
        'only-single-line'
      ],
      'unicorn/prevent-abbreviations': ['off'],
      'unicorn/relative-url-style': ['off']
    }
  }
]);

export {
  unicorn
};
