import type {Awaitable, Arrayable} from 'eslint-flat-config-utils';
import {FlatConfigComposer} from 'eslint-flat-config-utils';
import type {TypescriptOptions} from './configs';
import {ignores, imports, javascript, jsdoc, sonarjs, stylistic, test, typescript, unicorn} from './configs';
import type {ConfigNames} from './typegen';
import type {Config} from './types';
// @ts-expect-error TS(2305): Module '"eslint"' has no exported member 'Linter'.
// eslint-disable-next-line import-x/first
import type {Linter} from 'eslint';

interface ESLintOptions {
  projectDir: string;
  configs?: {
    ignores?: boolean;
    imports?: boolean;
    javascript?: boolean;
    jsdoc?: boolean;
    sonarjs?: boolean;
    stylistic?: boolean;
    test?: boolean;
    typescript?: Omit<TypescriptOptions, 'projectDir'>;
    unicorn?: boolean;
  };
}

const eslint = ((
  options: ESLintOptions,
  ...userConfigs: Awaitable<Arrayable<Config> | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<Config, ConfigNames> => {
  const {
    configs: {
      ignores: enableIgnores = true,
      imports: enableImports = true,
      javascript: enableJavascript = true,
      jsdoc: enableJsdoc = true,
      sonarjs: enableSonarjs = true,
      stylistic: enableStylistic = true,
      test: enableTest = true,
      typescript: typescriptOptions,
      unicorn: enableUnicorn = true
    } = (options.configs ?? {})
  } = options;

  const configs: Awaitable<Config[]>[] = [];

  if(enableIgnores) {
    configs.push(ignores());
  }
  if(enableImports) {
    configs.push(imports());
  }
  if(enableJavascript) {
    configs.push(javascript());
  }
  if(enableJsdoc) {
    configs.push(jsdoc());
  }
  if(enableSonarjs) {
    configs.push(sonarjs());
  }
  if(enableStylistic) {
    configs.push(stylistic());
  }
  if(enableTest) {
    configs.push(test());
  }
  if(typescriptOptions) {
    configs.push(typescript({
      projectDir: options.projectDir,
      ...typescriptOptions
    }));
  }
  if(enableUnicorn) {
    configs.push(unicorn());
  }

  return (new FlatConfigComposer<Config, ConfigNames>(
    ...configs,
    {
      name: 'oliveryasuna/extra/allow-default-export',
      files: [
        'eslint.config.ts',
        'tsdown.config.ts',
        'vite.config.ts',
        'vitest.config.ts'
      ],
      rules: {'import-x/no-default-export': ['off']}
    },
    {
      name: 'oliveryasuna/extra/vite-env-fix',
      files: ['**/vite-env.d.ts'],
      rules: {'import-x/unambiguous': ['off']}
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    ...((userConfigs as unknown) as Config[])
  ));
});

const presetAll = ((
  projectDir: string,
  typescriptOptions: Omit<TypescriptOptions, 'projectDir'>
): ESLintOptions => ({
  projectDir: projectDir,
  configs: {
    ignores: true,
    imports: true,
    javascript: true,
    jsdoc: true,
    sonarjs: true,
    stylistic: true,
    test: true,
    typescript: typescriptOptions,
    unicorn: true
  }
}));

export type {
  ESLintOptions
};
export {
  eslint,
  presetAll
};
