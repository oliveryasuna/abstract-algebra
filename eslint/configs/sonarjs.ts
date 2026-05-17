import {pluginSonarjs} from '../plugins';
import type {Config} from '../types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const sonarjs = ((): Config[] => [
  {
    ...pluginSonarjs.configs.recommended,
    name: 'oliveryasuna/sonarjs/recommended'
  },
  {
    name: 'oliveryasuna/sonarjs/rules/base',
    rules: {
      'sonarjs/class-name': ['off'],  // Broken
      'sonarjs/disabled-resource-integrity': ['off'],  // Useful, but takes too long to run
      'sonarjs/no-commented-code': ['off'],  // Just takes too long to run
      'sonarjs/no-dead-store': ['off'],  // Broken
      'sonarjs/deprecation': ['off'],  // Handled by import-x/no-deprecated
      'sonarjs/no-empty-test-file': ['off'],  // Broken
      'sonarjs/no-unused-vars': ['off'],  // Broken
      'sonarjs/todo-tag': ['off'],  // Handled by no-warning-comments
      'sonarjs/use-type-alias': ['off'],  // Broken
      'sonarjs/no-nested-template-literals': ['off']
    }
  }
]);

export {
  sonarjs
};
