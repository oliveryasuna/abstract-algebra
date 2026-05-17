import {GLOB_EXCLUDE} from '../globs';
import {pluginGitignore} from '../plugins';
import type {Config} from '../types';

const ignores = ((): Config[] => [
  {
    name: 'oliveryasuna/ignores/global',
    ignores: GLOB_EXCLUDE
  },
  {
    ...pluginGitignore({strict: false}),
    name: 'oliveryasuna/ignores/git'
  }
]);

export {
  ignores
};
