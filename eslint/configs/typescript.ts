import {parser} from 'typescript-eslint';
import {GLOB_TS, GLOB_TSX} from '../globs';
import {commentLengthLimit, insaneParentheses, twoSpacesBeforeInlineComment} from '../rules';
import type {Config} from '../types';

interface TypescriptOptions {
  projectDir: string;
  tsconfigs: string[];
}

const typescript = ((options: TypescriptOptions): Config[] => [
  {

    name: 'oliveryasuna/typescript/setup',
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: options.tsconfigs,
        tsconfigRootDir: options.projectDir,
        sourceType: 'module'
      },
      sourceType: 'module'
    }
    // plugins: {'@typescript-eslint': pluginTs},
  },
  {
    name: 'oliveryasuna/typescript/rules/disable',
    files: [
      GLOB_TS,
      GLOB_TSX
    ],
    rules: {
      'constructor-super': ['off'],
      'getter-return': ['off'],
      'no-class-assign': ['off'],
      'no-const-assign': ['off'],
      'no-dupe-args': ['off'],
      'no-dupe-class-members': ['off'],
      'no-dupe-keys': ['off'],
      'no-func-assign': ['off'],
      'no-import-assign': ['off'],
      'no-new-native-nonconstructor': ['off'],
      'no-new-symbol': ['off'],
      'no-obj-calls': ['off'],
      'no-redeclare': ['off'],
      'no-setter-return': ['off'],
      'no-this-before-super': ['off'],
      'no-undef': ['off'],
      'no-unreachable': ['off'],
      'no-unsafe-negation': ['off'],
      'no-var': ['error'],
      'no-with': ['off'],
      'prefer-const': ['error'],
      'prefer-rest-params': ['error'],
      'prefer-spread': ['error']
    }
  },
  {
    name: 'oliveryasuna/typescript/rules/base',
    files: [
      GLOB_TS,
      GLOB_TSX
    ],
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': ['error'],
      '@typescript-eslint/array-type': ['error'],
      '@typescript-eslint/await-thenable': ['error'],
      '@typescript-eslint/ban-ts-comment': ['error'],
      '@typescript-eslint/ban-tslint-comment': ['error'],
      '@typescript-eslint/class-literal-property-style': ['error'],
      'class-methods-use-this': ['off'],
      '@typescript-eslint/class-methods-use-this': ['off'],
      '@typescript-eslint/consistent-generic-constructors': ['error'],
      '@typescript-eslint/consistent-indexed-object-style': ['error'],
      'consistent-return': ['off'],
      '@typescript-eslint/consistent-return': ['error'],
      '@typescript-eslint/consistent-type-assertions': ['error'],
      '@typescript-eslint/consistent-type-definitions': ['error'],
      '@typescript-eslint/consistent-type-exports': ['off'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports'
        }
      ],
      'default-param-last': ['off'],
      '@typescript-eslint/default-param-last': ['error'],
      'dot-notation': ['off'],
      '@typescript-eslint/dot-notation': ['off'],
      '@typescript-eslint/explicit-function-return-type': ['error'],
      '@typescript-eslint/explicit-member-accessibility': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': ['error'],
      'init-declarations': ['off'],
      '@typescript-eslint/init-declarations': ['error'],
      'max-params': ['off'],
      '@typescript-eslint/max-params': ['error', {max: 5}],
      '@typescript-eslint/member-ordering': ['error'],
      '@typescript-eslint/method-signature-style': ['error', 'method'],
      '@typescript-eslint/naming-convention': ['off'],
      'no-array-constructor': ['off'],
      '@typescript-eslint/no-array-constructor': ['error'],
      '@typescript-eslint/no-array-delete': ['error'],
      '@typescript-eslint/no-base-to-string': ['error'],
      '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
      '@typescript-eslint/no-confusing-void-expression': ['error'],
      '@typescript-eslint/no-deprecated': ['off'],  // Handled by import-x/no-deprecated
      'no-dupe-class-members': ['off'],
      '@typescript-eslint/no-dupe-class-members': ['error'],
      '@typescript-eslint/no-duplicate-enum-values': ['error'],
      '@typescript-eslint/no-duplicate-type-constituents': ['error'],
      '@typescript-eslint/no-dynamic-delete': ['error'],
      'no-empty-function': ['off'],
      '@typescript-eslint/no-empty-function': ['error'],
      '@typescript-eslint/no-empty-object-type': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
      '@typescript-eslint/no-extra-non-null-assertion': ['error'],
      '@typescript-eslint/no-extraneous-class': ['off'],
      '@typescript-eslint/no-floating-promises': ['error'],
      '@typescript-eslint/no-for-in-array': ['error'],
      'no-implied-eval': ['off'],
      '@typescript-eslint/no-implied-eval': ['error'],
      '@typescript-eslint/no-import-type-side-effects': ['error'],
      '@typescript-eslint/no-inferrable-types': ['error'],
      'no-invalid-this': ['off'],
      '@typescript-eslint/no-invalid-this': ['error'],
      '@typescript-eslint/no-invalid-void-type': ['error'],
      'no-loop-func': ['off'],
      '@typescript-eslint/no-loop-func': ['error'],
      'no-magic-numbers': ['off'],
      '@typescript-eslint/no-magic-numbers': ['off'],
      '@typescript-eslint/no-meaningless-void-operator': ['error'],
      '@typescript-eslint/no-misused-new': ['error'],
      '@typescript-eslint/no-misused-promises': ['error'],
      '@typescript-eslint/no-misused-spread': ['error'],
      '@typescript-eslint/no-mixed-enums': ['error'],
      '@typescript-eslint/no-namespace': ['error'],
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ['error'],
      '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
      '@typescript-eslint/no-non-null-assertion': ['warn'],
      'no-redeclare': ['off'],
      '@typescript-eslint/no-redeclare': ['error'],
      '@typescript-eslint/no-redundant-type-constituents': ['error'],
      '@typescript-eslint/no-require-imports': ['error'],
      'no-restricted-imports': ['off'],
      '@typescript-eslint/no-restricted-imports': ['error'],
      '@typescript-eslint/no-restricted-types': ['error'],
      'no-shadow': ['off'],
      '@typescript-eslint/no-shadow': ['off'],
      '@typescript-eslint/no-this-alias': ['error'],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
      '@typescript-eslint/no-unnecessary-condition': ['error'],
      '@typescript-eslint/no-unnecessary-parameter-property-assignment':
        'error',
      '@typescript-eslint/no-unnecessary-qualifier': ['error'],
      '@typescript-eslint/no-unnecessary-template-expression': ['error'],
      '@typescript-eslint/no-unnecessary-type-arguments': ['error'],
      '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
      '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
      '@typescript-eslint/no-unnecessary-type-conversion': ['error'],
      '@typescript-eslint/no-unnecessary-type-parameters': ['error'],
      '@typescript-eslint/no-unsafe-argument': ['error'],
      '@typescript-eslint/no-unsafe-assignment': ['warn'],
      '@typescript-eslint/no-unsafe-call': ['error'],
      '@typescript-eslint/no-unsafe-declaration-merging': ['error'],
      '@typescript-eslint/no-unsafe-enum-comparison': ['error'],
      '@typescript-eslint/no-unsafe-function-type': ['error'],
      '@typescript-eslint/no-unsafe-member-access': ['error'],
      '@typescript-eslint/no-unsafe-return': ['error'],
      '@typescript-eslint/no-unsafe-type-assertion': ['error'],
      '@typescript-eslint/no-unsafe-unary-minus': ['error'],
      'no-unused-expressions': ['off'],
      '@typescript-eslint/no-unused-expressions': ['error'],
      'no-unused-private-class-members': ['off'],
      '@typescript-eslint/no-unused-private-class-members': ['error'],
      'no-unused-vars': ['off'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_'
        }
      ],
      'no-use-before-define': ['off'],
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-useless-constructor': ['off'],
      '@typescript-eslint/no-useless-constructor': ['error'],
      '@typescript-eslint/no-useless-default-assignment': ['error'],
      '@typescript-eslint/no-useless-empty-export': ['error'],
      '@typescript-eslint/no-wrapper-object-types': ['error'],
      '@typescript-eslint/non-nullable-type-assertion-style': ['error'],
      'no-throw-literal': ['off'],
      '@typescript-eslint/only-throw-error': ['error'],
      '@typescript-eslint/parameter-properties': ['error'],
      '@typescript-eslint/prefer-as-const': ['error'],
      'prefer-destructuring': ['off'],
      '@typescript-eslint/prefer-destructuring': ['off'],
      '@typescript-eslint/prefer-enum-initializers': ['error'],
      '@typescript-eslint/prefer-find': ['error'],
      '@typescript-eslint/prefer-for-of': ['error'],
      '@typescript-eslint/prefer-function-type': ['error'],
      '@typescript-eslint/prefer-includes': ['error'],
      '@typescript-eslint/prefer-literal-enum-member': ['error'],
      '@typescript-eslint/prefer-namespace-keyword': ['error'],
      '@typescript-eslint/prefer-nullish-coalescing': ['error'],
      '@typescript-eslint/prefer-optional-chain': ['error'],
      'prefer-promise-reject-errors': ['off'],
      '@typescript-eslint/prefer-promise-reject-errors': ['error'],
      '@typescript-eslint/prefer-readonly': ['error'],
      '@typescript-eslint/prefer-readonly-parameter-types': ['off'],
      '@typescript-eslint/prefer-reduce-type-parameter': ['error'],
      '@typescript-eslint/prefer-regexp-exec': ['error'],
      '@typescript-eslint/prefer-return-this-type': ['error'],
      '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
      '@typescript-eslint/promise-function-async': ['off'],
      '@typescript-eslint/related-getter-setter-pairs': ['error'],
      '@typescript-eslint/require-array-sort-compare': ['error'],
      'require-await': ['off'],
      '@typescript-eslint/require-await': ['error'],
      '@typescript-eslint/restrict-plus-operands': ['error'],
      '@typescript-eslint/restrict-template-expressions': ['error'],
      'no-return-await': ['off'],
      '@typescript-eslint/return-await': ['error'],
      '@typescript-eslint/strict-boolean-expressions': ['off'],
      '@typescript-eslint/switch-exhaustiveness-check': ['error'],
      '@typescript-eslint/triple-slash-reference': ['error'],
      '@typescript-eslint/unbound-method': ['error'],
      '@typescript-eslint/unified-signatures': ['off'],
      '@typescript-eslint/use-unknown-in-catch-callback-variable': ['error']
    }
  },
  {
    name: 'oliveryasuna/typescript/rules/custom',
    files: [
      GLOB_TS,
      GLOB_TSX
    ],
    plugins: {
      custom: {
        rules: {
          'two-spaces-before-inline-comment': twoSpacesBeforeInlineComment,
          'comment-length-limit': commentLengthLimit,
          'insane-parentheses': insaneParentheses
        }
      }
    },
    rules: {
      'custom/two-spaces-before-inline-comment': ['error'],
      'custom/comment-length-limit': ['error'],
      'custom/insane-parentheses': ['error']
    }
  },
  {
    name: 'oliveryasuna/typescript/rules/dts',
    files: ['**/*.d.ts'],
    rules: {}
  },
  {
    name: 'oliveryasuna/typescript/rules/tsx',
    files: [GLOB_TSX],
    rules: {
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/explicit-module-boundary-types': ['off']
    }
  }
]);

export type {
  TypescriptOptions
};
export {
  typescript
};
