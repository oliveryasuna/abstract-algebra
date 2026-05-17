import {pluginStylistic, pluginTs} from '../plugins';
import type {Config} from '../types';

// TODO: Do not use preconfigured configs
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const stylistic = ((): Config[] => [
  {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ...pluginStylistic.configs.recommended,
    name: 'oliveryasuna/stylistic/recommended'
  },
  ...pluginTs.configs.stylisticTypeChecked,
  {
    name: 'oliveryasuna/stylistic/rules/base',
    rules: {
      '@stylistic/array-bracket-newline': [
        'error',
        'consistent'
      ],
      '@stylistic/array-element-newline': [
        'error',
        'consistent'
      ],
      '@stylistic/block-spacing': [
        'error',
        'never'
      ],
      '@stylistic/brace-style': [
        'error',
        '1tbs'
      ],
      '@stylistic/comma-dangle': [
        'error',
        'never'
      ],
      '@stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          offsetTernaryExpressions: true
        }
      ],
      '@stylistic/keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
          overrides: {
            if: {after: false},
            catch: {after: false},
            for: {after: false},
            while: {after: false},
            switch: {after: false}
          }
        }
      ],
      '@stylistic/max-len': [
        'error',
        {
          code: 180,
          tabWidth: 2
        }
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          singleline: {
            delimiter: 'semi',
            requireLast: true
          },
          multiline: {
            delimiter: 'semi',
            requireLast: true
          }
        }
      ],
      '@stylistic/no-extra-parens': ['off'],
      '@stylistic/no-multi-spaces': [
        'error',
        {ignoreEOLComments: true}
      ],
      '@stylistic/object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 2
          },
          ObjectPattern: {consistent: true},
          ImportDeclaration: {multiline: true},
          ExportDeclaration: 'always'
        }
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'never'
      ],
      '@stylistic/object-property-newline': [
        'error',
        {allowAllPropertiesOnSameLine: false}
      ],
      '@stylistic/padded-blocks': [
        'error',
        {
          blocks: 'never',
          classes: 'always',
          switches: 'never'
        }
      ],
      '@stylistic/quote-props': [
        'error',
        'as-needed'
      ],
      '@stylistic/semi': [
        'error',
        'always'
      ],
      '@stylistic/space-before-function-paren': [
        'error',
        'never'
      ],
      '@stylistic/spaced-comment': [
        'error',
        'always',
        {
          exceptions: [
            '==================================================',
            '--------------------------------------------------'
          ]
        }
      ]
    }
  }
]);

export {
  stylistic
};
