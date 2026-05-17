import {eslint, presetAll} from './eslint';

export default eslint(presetAll(import.meta.dirname, {
  tsconfigs: [
    './tsconfig.build.json',
    './tsconfig.config.json',
    './tsconfig.test.json'
  ]
})).append(
  {ignores: ['./eslint/typegen.d.ts']},
  {
    files: ['./eslint/**/*.ts'],
    rules: {
      complexity: ['off'],
      'max-lines-per-function': ['off'],
      'max-statements': ['off']
    }
  }
);
