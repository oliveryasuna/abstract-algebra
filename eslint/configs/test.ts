import {GLOB_TESTS} from '../globs';
import type {Config} from '../types';

// TODO: ESLint Vitest
const test = ((): Config[] => [
  {
    name: 'oliveryasuna/test/setup',
    plugins: {}
  },
  {
    name: 'oliveryasuna/test/rules/base',
    files: [GLOB_TESTS],
    rules: {
      'max-lines': ['off'],
      'max-lines-per-function': ['off'],
      'max-statements': ['off'],

      'sonarjs/no-nested-functions': ['off']
    }
  }
]);

export {
  test
};
