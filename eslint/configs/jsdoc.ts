import {GLOB_TS, GLOB_TSX} from '../globs';
import {pluginJsdoc} from '../plugins';
import type {Config} from '../types';

const jsdoc = ((): Config[] => [
  {
    name: 'oliveryasuna/jsdoc/setup',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    plugins: {jsdoc: pluginJsdoc}
  },
  {
    name: 'oliveryasuna/jsdoc/rules/base',
    rules: {
      'jsdoc/check-access': ['error'],
      'jsdoc/check-alignment': ['error'],
      'jsdoc/check-examples': ['off'],
      'jsdoc/check-indentation': ['warn'],
      'jsdoc/check-line-alignment': ['off'],
      'jsdoc/check-param-names': ['error'],
      'jsdoc/check-property-names': ['error'],
      'jsdoc/check-syntax': ['off'],
      'jsdoc/check-tag-names': [
        'off',
        {
          definedTags: [
            'typeParam',
            'remarks'
          ]
        }
      ],
      'jsdoc/check-template-names': ['off'],
      'jsdoc/check-types': ['error'],
      'jsdoc/check-values': ['error'],
      'jsdoc/convert-to-jsdoc-comments': ['off'],
      'jsdoc/empty-tags': ['error'],
      'jsdoc/escape-inline-tags': ['error'],
      'jsdoc/implements-on-classes': ['error'],
      'jsdoc/imports-as-dependencies': ['off'],
      'jsdoc/informative-docs': ['off'],
      'jsdoc/lines-before-block': ['off'],
      'jsdoc/match-description': ['off'],
      'jsdoc/match-name': ['off'],
      'jsdoc/multiline-blocks': ['error'],
      'jsdoc/no-bad-blocks': ['off'],
      'jsdoc/no-blank-block-descriptions': ['off'],
      'jsdoc/no-blank-blocks': ['error'],
      'jsdoc/no-defaults': ['error'],
      'jsdoc/no-missing-syntax': ['off'],
      'jsdoc/no-multi-asterisks': ['error'],
      'jsdoc/no-restricted-syntax': ['off'],
      'jsdoc/no-types': ['off'],
      'jsdoc/no-undefined-types': ['error'],
      'jsdoc/prefer-import-tag': ['off'],
      'jsdoc/reject-any-type': ['error'],
      'jsdoc/reject-function-type': ['error'],
      'jsdoc/require-asterisk-prefix': ['error'],
      'jsdoc/require-description': [
        'error',
        {exemptedBy: ['internal']}
      ],
      'jsdoc/require-description-complete-sentence': ['off'],
      'jsdoc/require-example': ['off'],
      'jsdoc/require-file-overview': ['off'],
      'jsdoc/require-hyphen-before-param-description': ['off'],
      'jsdoc/require-jsdoc': ['off'],
      'jsdoc/require-next-description': ['off'],
      'jsdoc/require-next-type': ['error'],
      'jsdoc/require-param': [
        'error',
        {
          checkDestructuredRoots: false,
          exemptedBy: ['internal']
        }
      ],
      'jsdoc/require-param-description': ['error'],
      'jsdoc/require-param-name': ['error'],
      'jsdoc/require-param-type': ['error'],
      'jsdoc/require-property': ['error'],
      'jsdoc/require-property-description': ['error'],
      'jsdoc/require-property-name': ['error'],
      'jsdoc/require-property-type': ['error'],
      'jsdoc/require-rejects': ['off'],
      'jsdoc/require-returns': [
        'error',
        {exemptedBy: ['internal']}
      ],
      'jsdoc/require-returns-check': ['error'],
      'jsdoc/require-returns-description': ['error'],
      'jsdoc/require-returns-type': ['error'],
      'jsdoc/require-tags': ['off'],
      'jsdoc/require-template': ['off'],
      'jsdoc/require-template-description': ['off'],
      'jsdoc/require-throws': ['error'],
      'jsdoc/require-throws-description': ['off'],
      'jsdoc/require-throws-type': ['error'],
      'jsdoc/require-yields': ['error'],
      'jsdoc/require-yields-check': ['error'],
      'jsdoc/require-yields-description': ['off'],
      'jsdoc/require-yields-type': ['error'],
      'jsdoc/sort-tags': ['off'],
      'jsdoc/tag-lines': ['off'],
      'jsdoc/text-escaping': ['off'],
      'jsdoc/ts-method-signature-style': ['off'],
      'jsdoc/ts-no-empty-object-type': ['error'],
      'jsdoc/ts-no-unnecessary-template-expression': ['off'],
      'jsdoc/ts-prefer-function-type': ['off'],
      'jsdoc/type-formatting': ['off'],
      'jsdoc/valid-types': ['error']
    }
  },
  {
    name: 'oliveryasuna/jsdoc/rules/typescript',
    files: [
      GLOB_TS,
      GLOB_TSX
    ],
    rules: {
      'jsdoc/check-tag-names': ['off', {typed: true}],
      'jsdoc/no-types': ['error'],
      'jsdoc/no-undefined-types': ['off'],
      'jsdoc/require-param-type': ['off'],
      'jsdoc/require-property-type': ['off'],
      'jsdoc/require-returns-type': ['off']
    }
  }
]);

export {
  jsdoc
};
