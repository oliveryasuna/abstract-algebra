import type {TSESLint} from '@typescript-eslint/utils';
import type {Rules} from './typegen';
// @ts-expect-error TS(2305): Module '"eslint"' has no exported member 'Linter'.
// eslint-disable-next-line import-x/first
import type {Linter} from 'eslint';

type Config = (
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'>
  & {
    // Use the type from typescript-eslint
    languageOptions?: TSESLint.FlatConfig.Config['languageOptions'];
    // Relax on the plugins type
    plugins?: Record<string, any>;
  }
);

export type {
  Config
};
