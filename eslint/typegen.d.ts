/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface Rules {
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.style/rules/array-bracket-newline
   */
  '@stylistic/array-bracket-newline'?: Linter.RuleEntry<StylisticArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.style/rules/array-bracket-spacing
   */
  '@stylistic/array-bracket-spacing'?: Linter.RuleEntry<StylisticArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.style/rules/array-element-newline
   */
  '@stylistic/array-element-newline'?: Linter.RuleEntry<StylisticArrayElementNewline>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.style/rules/arrow-parens
   */
  '@stylistic/arrow-parens'?: Linter.RuleEntry<StylisticArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.style/rules/arrow-spacing
   */
  '@stylistic/arrow-spacing'?: Linter.RuleEntry<StylisticArrowSpacing>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.style/rules/block-spacing
   */
  '@stylistic/block-spacing'?: Linter.RuleEntry<StylisticBlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.style/rules/brace-style
   */
  '@stylistic/brace-style'?: Linter.RuleEntry<StylisticBraceStyle>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.style/rules/comma-dangle
   */
  '@stylistic/comma-dangle'?: Linter.RuleEntry<StylisticCommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.style/rules/comma-spacing
   */
  '@stylistic/comma-spacing'?: Linter.RuleEntry<StylisticCommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.style/rules/comma-style
   */
  '@stylistic/comma-style'?: Linter.RuleEntry<StylisticCommaStyle>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.style/rules/computed-property-spacing
   */
  '@stylistic/computed-property-spacing'?: Linter.RuleEntry<StylisticComputedPropertySpacing>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/curly-newline
   */
  '@stylistic/curly-newline'?: Linter.RuleEntry<StylisticCurlyNewline>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.style/rules/dot-location
   */
  '@stylistic/dot-location'?: Linter.RuleEntry<StylisticDotLocation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.style/rules/eol-last
   */
  '@stylistic/eol-last'?: Linter.RuleEntry<StylisticEolLast>
  /**
   * Enforce consistent line break styles for JSX props
   * @see https://eslint.style/rules/jsx-props-style
   */
  '@stylistic/exp-jsx-props-style'?: Linter.RuleEntry<StylisticExpJsxPropsStyle>
  /**
   * Enforce consistent spacing and line break styles inside brackets.
   * @see https://eslint.style/rules/list-style
   */
  '@stylistic/exp-list-style'?: Linter.RuleEntry<StylisticExpListStyle>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.style/rules/function-call-argument-newline
   */
  '@stylistic/function-call-argument-newline'?: Linter.RuleEntry<StylisticFunctionCallArgumentNewline>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/function-call-spacing
   */
  '@stylistic/function-call-spacing'?: Linter.RuleEntry<StylisticFunctionCallSpacing>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.style/rules/function-paren-newline
   */
  '@stylistic/function-paren-newline'?: Linter.RuleEntry<StylisticFunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.style/rules/generator-star-spacing
   */
  '@stylistic/generator-star-spacing'?: Linter.RuleEntry<StylisticGeneratorStarSpacing>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.style/rules/implicit-arrow-linebreak
   */
  '@stylistic/implicit-arrow-linebreak'?: Linter.RuleEntry<StylisticImplicitArrowLinebreak>
  /**
   * Enforce consistent indentation
   * @see https://eslint.style/rules/indent
   */
  '@stylistic/indent'?: Linter.RuleEntry<StylisticIndent>
  /**
   * Indentation for binary operators
   * @see https://eslint.style/rules/indent-binary-ops
   */
  '@stylistic/indent-binary-ops'?: Linter.RuleEntry<StylisticIndentBinaryOps>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-child-element-spacing
   */
  '@stylistic/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://eslint.style/rules/jsx-closing-bracket-location
   */
  '@stylistic/jsx-closing-bracket-location'?: Linter.RuleEntry<StylisticJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://eslint.style/rules/jsx-closing-tag-location
   */
  '@stylistic/jsx-closing-tag-location'?: Linter.RuleEntry<StylisticJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://eslint.style/rules/jsx-curly-brace-presence
   */
  '@stylistic/jsx-curly-brace-presence'?: Linter.RuleEntry<StylisticJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-curly-newline
   */
  '@stylistic/jsx-curly-newline'?: Linter.RuleEntry<StylisticJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx-curly-spacing
   */
  '@stylistic/jsx-curly-spacing'?: Linter.RuleEntry<StylisticJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://eslint.style/rules/jsx-equals-spacing
   */
  '@stylistic/jsx-equals-spacing'?: Linter.RuleEntry<StylisticJsxEqualsSpacing>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://eslint.style/rules/jsx-first-prop-new-line
   */
  '@stylistic/jsx-first-prop-new-line'?: Linter.RuleEntry<StylisticJsxFirstPropNewLine>
  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   * @see https://eslint.style/rules/jsx-function-call-newline
   */
  '@stylistic/jsx-function-call-newline'?: Linter.RuleEntry<StylisticJsxFunctionCallNewline>
  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   * @see https://eslint.style/rules/jsx-indent
   * @deprecated
   */
  '@stylistic/jsx-indent'?: Linter.RuleEntry<StylisticJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://eslint.style/rules/jsx-indent-props
   */
  '@stylistic/jsx-indent-props'?: Linter.RuleEntry<StylisticJsxIndentProps>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://eslint.style/rules/jsx-max-props-per-line
   */
  '@stylistic/jsx-max-props-per-line'?: Linter.RuleEntry<StylisticJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://eslint.style/rules/jsx-newline
   */
  '@stylistic/jsx-newline'?: Linter.RuleEntry<StylisticJsxNewline>
  /**
   * Require one JSX element per line
   * @see https://eslint.style/rules/jsx-one-expression-per-line
   */
  '@stylistic/jsx-one-expression-per-line'?: Linter.RuleEntry<StylisticJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://eslint.style/rules/jsx-pascal-case
   */
  '@stylistic/jsx-pascal-case'?: Linter.RuleEntry<StylisticJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props. Deprecated, use `no-multi-spaces` rule instead.
   * @see https://eslint.style/rules/jsx-props-no-multi-spaces
   * @deprecated
   */
  '@stylistic/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.style/rules/jsx-quotes
   */
  '@stylistic/jsx-quotes'?: Linter.RuleEntry<StylisticJsxQuotes>
  /**
   * Disallow extra closing tags for components without children
   * @see https://eslint.style/rules/jsx-self-closing-comp
   */
  '@stylistic/jsx-self-closing-comp'?: Linter.RuleEntry<StylisticJsxSelfClosingComp>
  /**
   * Enforce props alphabetical sorting
   * @see https://eslint.style/rules/jsx-sort-props
   * @deprecated
   */
  '@stylistic/jsx-sort-props'?: Linter.RuleEntry<StylisticJsxSortProps>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://eslint.style/rules/jsx-tag-spacing
   */
  '@stylistic/jsx-tag-spacing'?: Linter.RuleEntry<StylisticJsxTagSpacing>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://eslint.style/rules/jsx-wrap-multilines
   */
  '@stylistic/jsx-wrap-multilines'?: Linter.RuleEntry<StylisticJsxWrapMultilines>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   * @see https://eslint.style/rules/key-spacing
   */
  '@stylistic/key-spacing'?: Linter.RuleEntry<StylisticKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.style/rules/keyword-spacing
   */
  '@stylistic/keyword-spacing'?: Linter.RuleEntry<StylisticKeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.style/rules/line-comment-position
   */
  '@stylistic/line-comment-position'?: Linter.RuleEntry<StylisticLineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.style/rules/linebreak-style
   */
  '@stylistic/linebreak-style'?: Linter.RuleEntry<StylisticLinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.style/rules/lines-around-comment
   */
  '@stylistic/lines-around-comment'?: Linter.RuleEntry<StylisticLinesAroundComment>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.style/rules/lines-between-class-members
   */
  '@stylistic/lines-between-class-members'?: Linter.RuleEntry<StylisticLinesBetweenClassMembers>
  /**
   * Enforce a maximum line length
   * @see https://eslint.style/rules/max-len
   */
  '@stylistic/max-len'?: Linter.RuleEntry<StylisticMaxLen>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.style/rules/max-statements-per-line
   */
  '@stylistic/max-statements-per-line'?: Linter.RuleEntry<StylisticMaxStatementsPerLine>
  /**
   * Require a specific member delimiter style for interfaces and type literals
   * @see https://eslint.style/rules/member-delimiter-style
   */
  '@stylistic/member-delimiter-style'?: Linter.RuleEntry<StylisticMemberDelimiterStyle>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.style/rules/multiline-comment-style
   */
  '@stylistic/multiline-comment-style'?: Linter.RuleEntry<StylisticMultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.style/rules/multiline-ternary
   */
  '@stylistic/multiline-ternary'?: Linter.RuleEntry<StylisticMultilineTernary>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.style/rules/new-parens
   */
  '@stylistic/new-parens'?: Linter.RuleEntry<StylisticNewParens>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.style/rules/newline-per-chained-call
   */
  '@stylistic/newline-per-chained-call'?: Linter.RuleEntry<StylisticNewlinePerChainedCall>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.style/rules/no-confusing-arrow
   */
  '@stylistic/no-confusing-arrow'?: Linter.RuleEntry<StylisticNoConfusingArrow>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.style/rules/no-extra-parens
   */
  '@stylistic/no-extra-parens'?: Linter.RuleEntry<StylisticNoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.style/rules/no-extra-semi
   */
  '@stylistic/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.style/rules/no-floating-decimal
   */
  '@stylistic/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.style/rules/no-mixed-operators
   */
  '@stylistic/no-mixed-operators'?: Linter.RuleEntry<StylisticNoMixedOperators>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.style/rules/no-mixed-spaces-and-tabs
   */
  '@stylistic/no-mixed-spaces-and-tabs'?: Linter.RuleEntry<StylisticNoMixedSpacesAndTabs>
  /**
   * Disallow multiple spaces
   * @see https://eslint.style/rules/no-multi-spaces
   */
  '@stylistic/no-multi-spaces'?: Linter.RuleEntry<StylisticNoMultiSpaces>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.style/rules/no-multiple-empty-lines
   */
  '@stylistic/no-multiple-empty-lines'?: Linter.RuleEntry<StylisticNoMultipleEmptyLines>
  /**
   * Disallow all tabs
   * @see https://eslint.style/rules/no-tabs
   */
  '@stylistic/no-tabs'?: Linter.RuleEntry<StylisticNoTabs>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.style/rules/no-trailing-spaces
   */
  '@stylistic/no-trailing-spaces'?: Linter.RuleEntry<StylisticNoTrailingSpaces>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.style/rules/no-whitespace-before-property
   */
  '@stylistic/no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.style/rules/nonblock-statement-body-position
   */
  '@stylistic/nonblock-statement-body-position'?: Linter.RuleEntry<StylisticNonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/object-curly-newline
   */
  '@stylistic/object-curly-newline'?: Linter.RuleEntry<StylisticObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.style/rules/object-curly-spacing
   */
  '@stylistic/object-curly-spacing'?: Linter.RuleEntry<StylisticObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.style/rules/object-property-newline
   */
  '@stylistic/object-property-newline'?: Linter.RuleEntry<StylisticObjectPropertyNewline>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.style/rules/one-var-declaration-per-line
   */
  '@stylistic/one-var-declaration-per-line'?: Linter.RuleEntry<StylisticOneVarDeclarationPerLine>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.style/rules/operator-linebreak
   */
  '@stylistic/operator-linebreak'?: Linter.RuleEntry<StylisticOperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.style/rules/padded-blocks
   */
  '@stylistic/padded-blocks'?: Linter.RuleEntry<StylisticPaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.style/rules/padding-line-between-statements
   */
  '@stylistic/padding-line-between-statements'?: Linter.RuleEntry<StylisticPaddingLineBetweenStatements>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   * @see https://eslint.style/rules/quote-props
   */
  '@stylistic/quote-props'?: Linter.RuleEntry<StylisticQuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.style/rules/quotes
   */
  '@stylistic/quotes'?: Linter.RuleEntry<StylisticQuotes>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.style/rules/rest-spread-spacing
   */
  '@stylistic/rest-spread-spacing'?: Linter.RuleEntry<StylisticRestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.style/rules/semi
   */
  '@stylistic/semi'?: Linter.RuleEntry<StylisticSemi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.style/rules/semi-spacing
   */
  '@stylistic/semi-spacing'?: Linter.RuleEntry<StylisticSemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.style/rules/semi-style
   */
  '@stylistic/semi-style'?: Linter.RuleEntry<StylisticSemiStyle>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.style/rules/space-before-blocks
   */
  '@stylistic/space-before-blocks'?: Linter.RuleEntry<StylisticSpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before function parenthesis
   * @see https://eslint.style/rules/space-before-function-paren
   */
  '@stylistic/space-before-function-paren'?: Linter.RuleEntry<StylisticSpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.style/rules/space-in-parens
   */
  '@stylistic/space-in-parens'?: Linter.RuleEntry<StylisticSpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.style/rules/space-infix-ops
   */
  '@stylistic/space-infix-ops'?: Linter.RuleEntry<StylisticSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.style/rules/space-unary-ops
   */
  '@stylistic/space-unary-ops'?: Linter.RuleEntry<StylisticSpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.style/rules/spaced-comment
   */
  '@stylistic/spaced-comment'?: Linter.RuleEntry<StylisticSpacedComment>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.style/rules/switch-colon-spacing
   */
  '@stylistic/switch-colon-spacing'?: Linter.RuleEntry<StylisticSwitchColonSpacing>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.style/rules/template-curly-spacing
   */
  '@stylistic/template-curly-spacing'?: Linter.RuleEntry<StylisticTemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.style/rules/template-tag-spacing
   */
  '@stylistic/template-tag-spacing'?: Linter.RuleEntry<StylisticTemplateTagSpacing>
  /**
   * Require consistent spacing around type annotations
   * @see https://eslint.style/rules/type-annotation-spacing
   */
  '@stylistic/type-annotation-spacing'?: Linter.RuleEntry<StylisticTypeAnnotationSpacing>
  /**
   * Enforces consistent spacing inside TypeScript type generics
   * @see https://eslint.style/rules/type-generic-spacing
   */
  '@stylistic/type-generic-spacing'?: Linter.RuleEntry<[]>
  /**
   * Expect space before the type declaration in the named tuple
   * @see https://eslint.style/rules/type-named-tuple-spacing
   */
  '@stylistic/type-named-tuple-spacing'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.style/rules/wrap-iife
   */
  '@stylistic/wrap-iife'?: Linter.RuleEntry<StylisticWrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.style/rules/wrap-regex
   */
  '@stylistic/wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.style/rules/yield-star-spacing
   */
  '@stylistic/yield-star-spacing'?: Linter.RuleEntry<StylisticYieldStarSpacing>
  /**
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  '@typescript-eslint/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type'?: Linter.RuleEntry<TypescriptEslintArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  '@typescript-eslint/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  '@typescript-eslint/ban-ts-comment'?: Linter.RuleEntry<TypescriptEslintBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  '@typescript-eslint/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  '@typescript-eslint/class-literal-property-style'?: Linter.RuleEntry<TypescriptEslintClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  '@typescript-eslint/class-methods-use-this'?: Linter.RuleEntry<TypescriptEslintClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  '@typescript-eslint/consistent-generic-constructors'?: Linter.RuleEntry<TypescriptEslintConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  '@typescript-eslint/consistent-indexed-object-style'?: Linter.RuleEntry<TypescriptEslintConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  '@typescript-eslint/consistent-return'?: Linter.RuleEntry<TypescriptEslintConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  '@typescript-eslint/consistent-type-assertions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  '@typescript-eslint/consistent-type-definitions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  '@typescript-eslint/consistent-type-exports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  '@typescript-eslint/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  '@typescript-eslint/dot-notation'?: Linter.RuleEntry<TypescriptEslintDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  '@typescript-eslint/explicit-function-return-type'?: Linter.RuleEntry<TypescriptEslintExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  '@typescript-eslint/explicit-member-accessibility'?: Linter.RuleEntry<TypescriptEslintExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  '@typescript-eslint/explicit-module-boundary-types'?: Linter.RuleEntry<TypescriptEslintExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  '@typescript-eslint/init-declarations'?: Linter.RuleEntry<TypescriptEslintInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  '@typescript-eslint/max-params'?: Linter.RuleEntry<TypescriptEslintMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  '@typescript-eslint/member-ordering'?: Linter.RuleEntry<TypescriptEslintMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  '@typescript-eslint/method-signature-style'?: Linter.RuleEntry<TypescriptEslintMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  '@typescript-eslint/naming-convention'?: Linter.RuleEntry<TypescriptEslintNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  '@typescript-eslint/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  '@typescript-eslint/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  '@typescript-eslint/no-base-to-string'?: Linter.RuleEntry<TypescriptEslintNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  '@typescript-eslint/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  '@typescript-eslint/no-confusing-void-expression'?: Linter.RuleEntry<TypescriptEslintNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  '@typescript-eslint/no-deprecated'?: Linter.RuleEntry<TypescriptEslintNoDeprecated>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  '@typescript-eslint/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  '@typescript-eslint/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  '@typescript-eslint/no-duplicate-type-constituents'?: Linter.RuleEntry<TypescriptEslintNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  '@typescript-eslint/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  '@typescript-eslint/no-empty-function'?: Linter.RuleEntry<TypescriptEslintNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  '@typescript-eslint/no-empty-interface'?: Linter.RuleEntry<TypescriptEslintNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  '@typescript-eslint/no-empty-object-type'?: Linter.RuleEntry<TypescriptEslintNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any'?: Linter.RuleEntry<TypescriptEslintNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  '@typescript-eslint/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  '@typescript-eslint/no-extraneous-class'?: Linter.RuleEntry<TypescriptEslintNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  '@typescript-eslint/no-floating-promises'?: Linter.RuleEntry<TypescriptEslintNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  '@typescript-eslint/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like functions
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  '@typescript-eslint/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  '@typescript-eslint/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  '@typescript-eslint/no-inferrable-types'?: Linter.RuleEntry<TypescriptEslintNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  '@typescript-eslint/no-invalid-this'?: Linter.RuleEntry<TypescriptEslintNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  '@typescript-eslint/no-invalid-void-type'?: Linter.RuleEntry<TypescriptEslintNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  '@typescript-eslint/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  '@typescript-eslint/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  '@typescript-eslint/no-magic-numbers'?: Linter.RuleEntry<TypescriptEslintNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  '@typescript-eslint/no-meaningless-void-operator'?: Linter.RuleEntry<TypescriptEslintNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  '@typescript-eslint/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  '@typescript-eslint/no-misused-promises'?: Linter.RuleEntry<TypescriptEslintNoMisusedPromises>
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   * @see https://typescript-eslint.io/rules/no-misused-spread
   */
  '@typescript-eslint/no-misused-spread'?: Linter.RuleEntry<TypescriptEslintNoMisusedSpread>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  '@typescript-eslint/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  '@typescript-eslint/no-namespace'?: Linter.RuleEntry<TypescriptEslintNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  '@typescript-eslint/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  '@typescript-eslint/no-redeclare'?: Linter.RuleEntry<TypescriptEslintNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  '@typescript-eslint/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  '@typescript-eslint/no-require-imports'?: Linter.RuleEntry<TypescriptEslintNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  '@typescript-eslint/no-restricted-imports'?: Linter.RuleEntry<TypescriptEslintNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  '@typescript-eslint/no-restricted-types'?: Linter.RuleEntry<TypescriptEslintNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  '@typescript-eslint/no-shadow'?: Linter.RuleEntry<TypescriptEslintNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  '@typescript-eslint/no-this-alias'?: Linter.RuleEntry<TypescriptEslintNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  '@typescript-eslint/no-type-alias'?: Linter.RuleEntry<TypescriptEslintNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  '@typescript-eslint/no-unnecessary-condition'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  '@typescript-eslint/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  '@typescript-eslint/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  '@typescript-eslint/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  '@typescript-eslint/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  '@typescript-eslint/no-unnecessary-type-assertion'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  '@typescript-eslint/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow conversion idioms when they do not change the type or value of the expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-conversion
   */
  '@typescript-eslint/no-unnecessary-type-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  '@typescript-eslint/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  '@typescript-eslint/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  '@typescript-eslint/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  '@typescript-eslint/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  '@typescript-eslint/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  '@typescript-eslint/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  '@typescript-eslint/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  '@typescript-eslint/no-unsafe-member-access'?: Linter.RuleEntry<TypescriptEslintNoUnsafeMemberAccess>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  '@typescript-eslint/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  '@typescript-eslint/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  '@typescript-eslint/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  '@typescript-eslint/no-unused-expressions'?: Linter.RuleEntry<TypescriptEslintNoUnusedExpressions>
  /**
   * Disallow unused private class members
   * @see https://typescript-eslint.io/rules/no-unused-private-class-members
   */
  '@typescript-eslint/no-unused-private-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars'?: Linter.RuleEntry<TypescriptEslintNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define'?: Linter.RuleEntry<TypescriptEslintNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  '@typescript-eslint/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow default values that will never be used
   * @see https://typescript-eslint.io/rules/no-useless-default-assignment
   */
  '@typescript-eslint/no-useless-default-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  '@typescript-eslint/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  '@typescript-eslint/no-var-requires'?: Linter.RuleEntry<TypescriptEslintNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  '@typescript-eslint/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type assertions
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  '@typescript-eslint/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  '@typescript-eslint/only-throw-error'?: Linter.RuleEntry<TypescriptEslintOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  '@typescript-eslint/parameter-properties'?: Linter.RuleEntry<TypescriptEslintParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  '@typescript-eslint/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  '@typescript-eslint/prefer-destructuring'?: Linter.RuleEntry<TypescriptEslintPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  '@typescript-eslint/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  '@typescript-eslint/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  '@typescript-eslint/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  '@typescript-eslint/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  '@typescript-eslint/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  '@typescript-eslint/prefer-literal-enum-member'?: Linter.RuleEntry<TypescriptEslintPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  '@typescript-eslint/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  '@typescript-eslint/prefer-nullish-coalescing'?: Linter.RuleEntry<TypescriptEslintPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  '@typescript-eslint/prefer-optional-chain'?: Linter.RuleEntry<TypescriptEslintPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  '@typescript-eslint/prefer-promise-reject-errors'?: Linter.RuleEntry<TypescriptEslintPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  '@typescript-eslint/prefer-readonly'?: Linter.RuleEntry<TypescriptEslintPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  '@typescript-eslint/prefer-readonly-parameter-types'?: Linter.RuleEntry<TypescriptEslintPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  '@typescript-eslint/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  '@typescript-eslint/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  '@typescript-eslint/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  '@typescript-eslint/prefer-string-starts-ends-with'?: Linter.RuleEntry<TypescriptEslintPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  '@typescript-eslint/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  '@typescript-eslint/promise-function-async'?: Linter.RuleEntry<TypescriptEslintPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  '@typescript-eslint/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  '@typescript-eslint/require-array-sort-compare'?: Linter.RuleEntry<TypescriptEslintRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  '@typescript-eslint/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  '@typescript-eslint/restrict-plus-operands'?: Linter.RuleEntry<TypescriptEslintRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  '@typescript-eslint/restrict-template-expressions'?: Linter.RuleEntry<TypescriptEslintRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  '@typescript-eslint/return-await'?: Linter.RuleEntry<TypescriptEslintReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  '@typescript-eslint/sort-type-constituents'?: Linter.RuleEntry<TypescriptEslintSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  '@typescript-eslint/strict-boolean-expressions'?: Linter.RuleEntry<TypescriptEslintStrictBooleanExpressions>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  '@typescript-eslint/switch-exhaustiveness-check'?: Linter.RuleEntry<TypescriptEslintSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  '@typescript-eslint/triple-slash-reference'?: Linter.RuleEntry<TypescriptEslintTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   * @deprecated
   */
  '@typescript-eslint/typedef'?: Linter.RuleEntry<TypescriptEslintTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  '@typescript-eslint/unbound-method'?: Linter.RuleEntry<TypescriptEslintUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  '@typescript-eslint/unified-signatures'?: Linter.RuleEntry<TypescriptEslintUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
  /**
   * Enforce getter and setter pairs in objects and classes
   * @see https://eslint.org/docs/latest/rules/accessor-pairs
   */
  'accessor-pairs'?: Linter.RuleEntry<AccessorPairs>
  /**
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.org/docs/latest/rules/array-bracket-newline
   * @deprecated
   */
  'array-bracket-newline'?: Linter.RuleEntry<ArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.org/docs/latest/rules/array-bracket-spacing
   * @deprecated
   */
  'array-bracket-spacing'?: Linter.RuleEntry<ArrayBracketSpacing>
  /**
   * Enforce `return` statements in callbacks of array methods
   * @see https://eslint.org/docs/latest/rules/array-callback-return
   */
  'array-callback-return'?: Linter.RuleEntry<ArrayCallbackReturn>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.org/docs/latest/rules/array-element-newline
   * @deprecated
   */
  'array-element-newline'?: Linter.RuleEntry<ArrayElementNewline>
  /**
   * Require braces around arrow function bodies
   * @see https://eslint.org/docs/latest/rules/arrow-body-style
   */
  'arrow-body-style'?: Linter.RuleEntry<ArrowBodyStyle>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.org/docs/latest/rules/arrow-parens
   * @deprecated
   */
  'arrow-parens'?: Linter.RuleEntry<ArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.org/docs/latest/rules/arrow-spacing
   * @deprecated
   */
  'arrow-spacing'?: Linter.RuleEntry<ArrowSpacing>
  /**
   * Enforce the use of variables within the scope they are defined
   * @see https://eslint.org/docs/latest/rules/block-scoped-var
   */
  'block-scoped-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.org/docs/latest/rules/block-spacing
   * @deprecated
   */
  'block-spacing'?: Linter.RuleEntry<BlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.org/docs/latest/rules/brace-style
   * @deprecated
   */
  'brace-style'?: Linter.RuleEntry<BraceStyle>
  /**
   * Require `return` statements after callbacks
   * @see https://eslint.org/docs/latest/rules/callback-return
   * @deprecated
   */
  'callback-return'?: Linter.RuleEntry<CallbackReturn>
  /**
   * Enforce camelcase naming convention
   * @see https://eslint.org/docs/latest/rules/camelcase
   */
  'camelcase'?: Linter.RuleEntry<Camelcase>
  /**
   * Enforce or disallow capitalization of the first letter of a comment
   * @see https://eslint.org/docs/latest/rules/capitalized-comments
   */
  'capitalized-comments'?: Linter.RuleEntry<CapitalizedComments>
  /**
   * Enforce that class methods utilize `this`
   * @see https://eslint.org/docs/latest/rules/class-methods-use-this
   */
  'class-methods-use-this'?: Linter.RuleEntry<ClassMethodsUseThis>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.org/docs/latest/rules/comma-dangle
   * @deprecated
   */
  'comma-dangle'?: Linter.RuleEntry<CommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.org/docs/latest/rules/comma-spacing
   * @deprecated
   */
  'comma-spacing'?: Linter.RuleEntry<CommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.org/docs/latest/rules/comma-style
   * @deprecated
   */
  'comma-style'?: Linter.RuleEntry<CommaStyle>
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program
   * @see https://eslint.org/docs/latest/rules/complexity
   */
  'complexity'?: Linter.RuleEntry<Complexity>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.org/docs/latest/rules/computed-property-spacing
   * @deprecated
   */
  'computed-property-spacing'?: Linter.RuleEntry<ComputedPropertySpacing>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://eslint.org/docs/latest/rules/consistent-return
   */
  'consistent-return'?: Linter.RuleEntry<ConsistentReturn>
  /**
   * Enforce consistent naming when capturing the current execution context
   * @see https://eslint.org/docs/latest/rules/consistent-this
   */
  'consistent-this'?: Linter.RuleEntry<ConsistentThis>
  /**
   * Require `super()` calls in constructors
   * @see https://eslint.org/docs/latest/rules/constructor-super
   */
  'constructor-super'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent brace style for all control statements
   * @see https://eslint.org/docs/latest/rules/curly
   */
  'curly'?: Linter.RuleEntry<Curly>
  /**
   * Enforce that comments do not exceed column 80
   */
  'custom/comment-length-limit'?: Linter.RuleEntry<[]>
  /**
   * Enforce extra parentheses around expressions for clarity
   */
  'custom/insane-parentheses'?: Linter.RuleEntry<[]>
  /**
   * Enforce at least two spaces before end-of-line comments
   */
  'custom/two-spaces-before-inline-comment'?: Linter.RuleEntry<[]>
  /**
   * Require `default` cases in `switch` statements
   * @see https://eslint.org/docs/latest/rules/default-case
   */
  'default-case'?: Linter.RuleEntry<DefaultCase>
  /**
   * Enforce `default` clauses in `switch` statements to be last
   * @see https://eslint.org/docs/latest/rules/default-case-last
   */
  'default-case-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce default parameters to be last
   * @see https://eslint.org/docs/latest/rules/default-param-last
   */
  'default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.org/docs/latest/rules/dot-location
   * @deprecated
   */
  'dot-location'?: Linter.RuleEntry<DotLocation>
  /**
   * Enforce dot notation whenever possible
   * @see https://eslint.org/docs/latest/rules/dot-notation
   */
  'dot-notation'?: Linter.RuleEntry<DotNotation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.org/docs/latest/rules/eol-last
   * @deprecated
   */
  'eol-last'?: Linter.RuleEntry<EolLast>
  /**
   * Require the use of `===` and `!==`
   * @see https://eslint.org/docs/latest/rules/eqeqeq
   */
  'eqeqeq'?: Linter.RuleEntry<Eqeqeq>
  /**
   * Enforce `for` loop update clause moving the counter in the right direction
   * @see https://eslint.org/docs/latest/rules/for-direction
   */
  'for-direction'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.org/docs/latest/rules/func-call-spacing
   * @deprecated
   */
  'func-call-spacing'?: Linter.RuleEntry<FuncCallSpacing>
  /**
   * Require function names to match the name of the variable or property to which they are assigned
   * @see https://eslint.org/docs/latest/rules/func-name-matching
   */
  'func-name-matching'?: Linter.RuleEntry<FuncNameMatching>
  /**
   * Require or disallow named `function` expressions
   * @see https://eslint.org/docs/latest/rules/func-names
   */
  'func-names'?: Linter.RuleEntry<FuncNames>
  /**
   * Enforce the consistent use of either `function` declarations or expressions assigned to variables
   * @see https://eslint.org/docs/latest/rules/func-style
   */
  'func-style'?: Linter.RuleEntry<FuncStyle>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.org/docs/latest/rules/function-call-argument-newline
   * @deprecated
   */
  'function-call-argument-newline'?: Linter.RuleEntry<FunctionCallArgumentNewline>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.org/docs/latest/rules/function-paren-newline
   * @deprecated
   */
  'function-paren-newline'?: Linter.RuleEntry<FunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.org/docs/latest/rules/generator-star-spacing
   * @deprecated
   */
  'generator-star-spacing'?: Linter.RuleEntry<GeneratorStarSpacing>
  /**
   * Enforce `return` statements in getters
   * @see https://eslint.org/docs/latest/rules/getter-return
   */
  'getter-return'?: Linter.RuleEntry<GetterReturn>
  /**
   * Require `require()` calls to be placed at top-level module scope
   * @see https://eslint.org/docs/latest/rules/global-require
   * @deprecated
   */
  'global-require'?: Linter.RuleEntry<[]>
  /**
   * Require grouped accessor pairs in object literals and classes
   * @see https://eslint.org/docs/latest/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs'?: Linter.RuleEntry<GroupedAccessorPairs>
  /**
   * Require `for-in` loops to include an `if` statement
   * @see https://eslint.org/docs/latest/rules/guard-for-in
   */
  'guard-for-in'?: Linter.RuleEntry<[]>
  /**
   * Require error handling in callbacks
   * @see https://eslint.org/docs/latest/rules/handle-callback-err
   * @deprecated
   */
  'handle-callback-err'?: Linter.RuleEntry<HandleCallbackErr>
  /**
   * Disallow specified identifiers
   * @see https://eslint.org/docs/latest/rules/id-blacklist
   * @deprecated
   */
  'id-blacklist'?: Linter.RuleEntry<IdBlacklist>
  /**
   * Disallow specified identifiers
   * @see https://eslint.org/docs/latest/rules/id-denylist
   */
  'id-denylist'?: Linter.RuleEntry<IdDenylist>
  /**
   * Enforce minimum and maximum identifier lengths
   * @see https://eslint.org/docs/latest/rules/id-length
   */
  'id-length'?: Linter.RuleEntry<IdLength>
  /**
   * Require identifiers to match a specified regular expression
   * @see https://eslint.org/docs/latest/rules/id-match
   */
  'id-match'?: Linter.RuleEntry<IdMatch>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
   * @deprecated
   */
  'implicit-arrow-linebreak'?: Linter.RuleEntry<ImplicitArrowLinebreak>
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/consistent-type-specifier-style.md
   */
  'import-x/consistent-type-specifier-style'?: Linter.RuleEntry<ImportXConsistentTypeSpecifierStyle>
  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/default.md
   */
  'import-x/default'?: Linter.RuleEntry<[]>
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/dynamic-import-chunkname.md
   */
  'import-x/dynamic-import-chunkname'?: Linter.RuleEntry<ImportXDynamicImportChunkname>
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/export.md
   */
  'import-x/export'?: Linter.RuleEntry<[]>
  /**
   * Ensure all exports appear after other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/exports-last.md
   */
  'import-x/exports-last'?: Linter.RuleEntry<[]>
  /**
   * Ensure consistent use of file extension within the import path.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/extensions.md
   */
  'import-x/extensions'?: Linter.RuleEntry<ImportXExtensions>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/first.md
   */
  'import-x/first'?: Linter.RuleEntry<ImportXFirst>
  /**
   * Prefer named exports to be grouped together in a single export declaration.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/group-exports.md
   */
  'import-x/group-exports'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `import-x/first`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/imports-first.md
   * @deprecated
   */
  'import-x/imports-first'?: Linter.RuleEntry<ImportXImportsFirst>
  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/max-dependencies.md
   */
  'import-x/max-dependencies'?: Linter.RuleEntry<ImportXMaxDependencies>
  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/named.md
   */
  'import-x/named'?: Linter.RuleEntry<ImportXNamed>
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/namespace.md
   */
  'import-x/namespace'?: Linter.RuleEntry<ImportXNamespace>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/newline-after-import.md
   */
  'import-x/newline-after-import'?: Linter.RuleEntry<ImportXNewlineAfterImport>
  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-absolute-path.md
   */
  'import-x/no-absolute-path'?: Linter.RuleEntry<ImportXNoAbsolutePath>
  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-amd.md
   */
  'import-x/no-amd'?: Linter.RuleEntry<[]>
  /**
   * Forbid anonymous values as default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-anonymous-default-export.md
   */
  'import-x/no-anonymous-default-export'?: Linter.RuleEntry<ImportXNoAnonymousDefaultExport>
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-commonjs.md
   */
  'import-x/no-commonjs'?: Linter.RuleEntry<ImportXNoCommonjs>
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-cycle.md
   */
  'import-x/no-cycle'?: Linter.RuleEntry<ImportXNoCycle>
  /**
   * Forbid default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-default-export.md
   */
  'import-x/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-deprecated.md
   */
  'import-x/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-duplicates.md
   */
  'import-x/no-duplicates'?: Linter.RuleEntry<ImportXNoDuplicates>
  /**
   * Forbid `require()` calls with expressions.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-dynamic-require.md
   */
  'import-x/no-dynamic-require'?: Linter.RuleEntry<ImportXNoDynamicRequire>
  /**
   * Forbid empty named import blocks.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-empty-named-blocks.md
   */
  'import-x/no-empty-named-blocks'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-extraneous-dependencies.md
   */
  'import-x/no-extraneous-dependencies'?: Linter.RuleEntry<ImportXNoExtraneousDependencies>
  /**
   * Forbid import statements with CommonJS module.exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-import-module-exports.md
   */
  'import-x/no-import-module-exports'?: Linter.RuleEntry<ImportXNoImportModuleExports>
  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-internal-modules.md
   */
  'import-x/no-internal-modules'?: Linter.RuleEntry<ImportXNoInternalModules>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-mutable-exports.md
   */
  'import-x/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-named-as-default.md
   */
  'import-x/no-named-as-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-named-as-default-member.md
   */
  'import-x/no-named-as-default-member'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-named-default.md
   */
  'import-x/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid named exports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-named-export.md
   */
  'import-x/no-named-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-namespace.md
   */
  'import-x/no-namespace'?: Linter.RuleEntry<ImportXNoNamespace>
  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-nodejs-modules.md
   */
  'import-x/no-nodejs-modules'?: Linter.RuleEntry<ImportXNoNodejsModules>
  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-relative-packages.md
   */
  'import-x/no-relative-packages'?: Linter.RuleEntry<ImportXNoRelativePackages>
  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-relative-parent-imports.md
   */
  'import-x/no-relative-parent-imports'?: Linter.RuleEntry<ImportXNoRelativeParentImports>
  /**
   * Forbid importing a default export by a different name.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-rename-default.md
   */
  'import-x/no-rename-default'?: Linter.RuleEntry<ImportXNoRenameDefault>
  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-restricted-paths.md
   */
  'import-x/no-restricted-paths'?: Linter.RuleEntry<ImportXNoRestrictedPaths>
  /**
   * Forbid a module from importing itself.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-self-import.md
   */
  'import-x/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Forbid unassigned imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-unassigned-import.md
   */
  'import-x/no-unassigned-import'?: Linter.RuleEntry<ImportXNoUnassignedImport>
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-unresolved.md
   */
  'import-x/no-unresolved'?: Linter.RuleEntry<ImportXNoUnresolved>
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-unused-modules.md
   */
  'import-x/no-unused-modules'?: Linter.RuleEntry<ImportXNoUnusedModules>
  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-useless-path-segments.md
   */
  'import-x/no-useless-path-segments'?: Linter.RuleEntry<ImportXNoUselessPathSegments>
  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/no-webpack-loader-syntax.md
   */
  'import-x/no-webpack-loader-syntax'?: Linter.RuleEntry<[]>
  /**
   * Enforce a convention in module import order.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/order.md
   */
  'import-x/order'?: Linter.RuleEntry<ImportXOrder>
  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/prefer-default-export.md
   */
  'import-x/prefer-default-export'?: Linter.RuleEntry<ImportXPreferDefaultExport>
  /**
   * Enforce using namespace imports for specific modules, like `react`/`react-dom`, etc.
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/prefer-namespace-import.md
   */
  'import-x/prefer-namespace-import'?: Linter.RuleEntry<ImportXPreferNamespaceImport>
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/un-ts/eslint-plugin-import-x/blob/v4.16.1/docs/rules/unambiguous.md
   */
  'import-x/unambiguous'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent indentation
   * @see https://eslint.org/docs/latest/rules/indent
   * @deprecated
   */
  'indent'?: Linter.RuleEntry<Indent>
  /**
   * Enforce consistent indentation
   * @see https://eslint.org/docs/latest/rules/indent-legacy
   * @deprecated
   */
  'indent-legacy'?: Linter.RuleEntry<IndentLegacy>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://eslint.org/docs/latest/rules/init-declarations
   */
  'init-declarations'?: Linter.RuleEntry<InitDeclarations>
  /**
   * Checks that `@access` tags have a valid value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header
   */
  'jsdoc/check-access'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header
   */
  'jsdoc/check-alignment'?: Linter.RuleEntry<JsdocCheckAlignment>
  /**
   * @deprecated - Use `getJsdocProcessorPlugin` processor; ensures that (JavaScript) samples within `@example` tags adhere to ESLint rules.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header
   */
  'jsdoc/check-examples'?: Linter.RuleEntry<JsdocCheckExamples>
  /**
   * Reports invalid padding inside JSDoc blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header
   */
  'jsdoc/check-indentation'?: Linter.RuleEntry<JsdocCheckIndentation>
  /**
   * Reports invalid alignment of JSDoc block lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header
   */
  'jsdoc/check-line-alignment'?: Linter.RuleEntry<JsdocCheckLineAlignment>
  /**
   * Checks for dupe `@param` names, that nested param names have roots, and that parameter names in function declarations match JSDoc param names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header
   */
  'jsdoc/check-param-names'?: Linter.RuleEntry<JsdocCheckParamNames>
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header
   */
  'jsdoc/check-property-names'?: Linter.RuleEntry<JsdocCheckPropertyNames>
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header
   */
  'jsdoc/check-syntax'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid block tag names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header
   */
  'jsdoc/check-tag-names'?: Linter.RuleEntry<JsdocCheckTagNames>
  /**
   * Checks that any `@template` names are actually used in the connected `@typedef` or type alias.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-template-names.md#repos-sticky-header
   */
  'jsdoc/check-template-names'?: Linter.RuleEntry<[]>
  /**
   * Reports types deemed invalid (customizable and with defaults, for preventing and/or recommending replacements).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header
   */
  'jsdoc/check-types'?: Linter.RuleEntry<JsdocCheckTypes>
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header
   */
  'jsdoc/check-values'?: Linter.RuleEntry<JsdocCheckValues>
  /**
   * Converts non-JSDoc comments preceding or following nodes into JSDoc ones
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md#repos-sticky-header
   */
  'jsdoc/convert-to-jsdoc-comments'?: Linter.RuleEntry<JsdocConvertToJsdocComments>
  /**
   * Checks tags that are expected to be empty (e.g., `@abstract` or `@async`), reporting if they have content
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header
   */
  'jsdoc/empty-tags'?: Linter.RuleEntry<JsdocEmptyTags>
  /**
   * Reports use of JSDoc tags in non-tag positions (in the default "typescript" mode).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/escape-inline-tags.md#repos-sticky-header
   */
  'jsdoc/escape-inline-tags'?: Linter.RuleEntry<JsdocEscapeInlineTags>
  /**
   * Prohibits use of `@implements` on non-constructor functions (to enforce the tag only being used on classes/constructors).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header
   */
  'jsdoc/implements-on-classes'?: Linter.RuleEntry<JsdocImplementsOnClasses>
  /**
   * Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header
   */
  'jsdoc/imports-as-dependencies'?: Linter.RuleEntry<[]>
  /**
   * This rule reports doc comments that only restate their attached name.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header
   */
  'jsdoc/informative-docs'?: Linter.RuleEntry<JsdocInformativeDocs>
  /**
   * Enforces minimum number of newlines before JSDoc comment blocks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/lines-before-block.md#repos-sticky-header
   */
  'jsdoc/lines-before-block'?: Linter.RuleEntry<JsdocLinesBeforeBlock>
  /**
   * Enforces a regular expression pattern on descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header
   */
  'jsdoc/match-description'?: Linter.RuleEntry<JsdocMatchDescription>
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md#repos-sticky-header
   */
  'jsdoc/match-name'?: Linter.RuleEntry<JsdocMatchName>
  /**
   * Controls how and whether JSDoc blocks can be expressed as single or multiple line blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header
   */
  'jsdoc/multiline-blocks'?: Linter.RuleEntry<JsdocMultilineBlocks>
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a JSDoc block.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header
   */
  'jsdoc/no-bad-blocks'?: Linter.RuleEntry<JsdocNoBadBlocks>
  /**
   * If tags are present, this rule will prevent empty lines in the block description. If no tags are present, this rule will prevent extra empty lines in the block description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header
   */
  'jsdoc/no-blank-block-descriptions'?: Linter.RuleEntry<[]>
  /**
   * Removes empty blocks with nothing but possibly line breaks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header
   */
  'jsdoc/no-blank-blocks'?: Linter.RuleEntry<JsdocNoBlankBlocks>
  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header
   */
  'jsdoc/no-defaults'?: Linter.RuleEntry<JsdocNoDefaults>
  /**
   * Reports when certain comment structures are always expected.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header
   */
  'jsdoc/no-missing-syntax'?: Linter.RuleEntry<JsdocNoMissingSyntax>
  /**
   * Prevents use of multiple asterisks at the beginning of lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header
   */
  'jsdoc/no-multi-asterisks'?: Linter.RuleEntry<JsdocNoMultiAsterisks>
  /**
   * Reports when certain comment structures are present.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md#repos-sticky-header
   */
  'jsdoc/no-restricted-syntax'?: Linter.RuleEntry<JsdocNoRestrictedSyntax>
  /**
   * This rule reports types being used on `@param` or `@returns` (redundant with TypeScript).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header
   */
  'jsdoc/no-types'?: Linter.RuleEntry<JsdocNoTypes>
  /**
   * Besides some expected built-in types, prohibits any types not specified as globals or within `@typedef`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header
   */
  'jsdoc/no-undefined-types'?: Linter.RuleEntry<JsdocNoUndefinedTypes>
  /**
   * Prefer `@import` tags to inline `import()` statements.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/prefer-import-tag.md#repos-sticky-header
   */
  'jsdoc/prefer-import-tag'?: Linter.RuleEntry<JsdocPreferImportTag>
  /**
   * Reports use of `any` or `*` type
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-any-type.md#repos-sticky-header
   */
  'jsdoc/reject-any-type'?: Linter.RuleEntry<[]>
  /**
   * Reports use of `Function` type
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-function-type.md#repos-sticky-header
   */
  'jsdoc/reject-function-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that each JSDoc line starts with an `*`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header
   */
  'jsdoc/require-asterisk-prefix'?: Linter.RuleEntry<JsdocRequireAsteriskPrefix>
  /**
   * Requires that all functions (and potentially other contexts) have a description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header
   */
  'jsdoc/require-description'?: Linter.RuleEntry<JsdocRequireDescription>
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md#repos-sticky-header
   */
  'jsdoc/require-description-complete-sentence'?: Linter.RuleEntry<JsdocRequireDescriptionCompleteSentence>
  /**
   * Requires that all functions (and potentially other contexts) have examples.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header
   */
  'jsdoc/require-example'?: Linter.RuleEntry<JsdocRequireExample>
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header
   */
  'jsdoc/require-file-overview'?: Linter.RuleEntry<JsdocRequireFileOverview>
  /**
   * Requires a hyphen before the `@param` description (and optionally before `@property` descriptions).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header
   */
  'jsdoc/require-hyphen-before-param-description'?: Linter.RuleEntry<JsdocRequireHyphenBeforeParamDescription>
  /**
   * Checks for presence of JSDoc comments, on functions and potentially other contexts (optionally limited to exports).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header
   */
  'jsdoc/require-jsdoc'?: Linter.RuleEntry<JsdocRequireJsdoc>
  /**
   * Requires a description for `@next` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-description.md#repos-sticky-header
   */
  'jsdoc/require-next-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@next` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-type.md#repos-sticky-header
   */
  'jsdoc/require-next-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that all function parameters are documented with a `@param` tag.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#repos-sticky-header
   */
  'jsdoc/require-param'?: Linter.RuleEntry<JsdocRequireParam>
  /**
   * Requires that each `@param` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header
   */
  'jsdoc/require-param-description'?: Linter.RuleEntry<JsdocRequireParamDescription>
  /**
   * Requires that all `@param` tags have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header
   */
  'jsdoc/require-param-name'?: Linter.RuleEntry<JsdocRequireParamName>
  /**
   * Requires that each `@param` tag has a type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header
   */
  'jsdoc/require-param-type'?: Linter.RuleEntry<JsdocRequireParamType>
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header
   */
  'jsdoc/require-property'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header
   */
  'jsdoc/require-property-description'?: Linter.RuleEntry<[]>
  /**
   * Requires that all `@property` tags have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md#repos-sticky-header
   */
  'jsdoc/require-property-name'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header
   */
  'jsdoc/require-property-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that Promise rejections are documented with `@rejects` tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-rejects.md#repos-sticky-header
   */
  'jsdoc/require-rejects'?: Linter.RuleEntry<JsdocRequireRejects>
  /**
   * Requires that returns are documented with `@returns`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header
   */
  'jsdoc/require-returns'?: Linter.RuleEntry<JsdocRequireReturns>
  /**
   * Requires a return statement in function body if a `@returns` tag is specified in JSDoc comment(and reports if multiple `@returns` tags are present).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header
   */
  'jsdoc/require-returns-check'?: Linter.RuleEntry<JsdocRequireReturnsCheck>
  /**
   * Requires that the `@returns` tag has a `description` value (not including `void`/`undefined` type returns).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header
   */
  'jsdoc/require-returns-description'?: Linter.RuleEntry<JsdocRequireReturnsDescription>
  /**
   * Requires that `@returns` tag has type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header
   */
  'jsdoc/require-returns-type'?: Linter.RuleEntry<JsdocRequireReturnsType>
  /**
   * Requires tags be present, optionally for specific contexts
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-tags.md#repos-sticky-header
   */
  'jsdoc/require-tags'?: Linter.RuleEntry<JsdocRequireTags>
  /**
   * Requires `@template` tags be present when type parameters are used.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md#repos-sticky-header
   */
  'jsdoc/require-template'?: Linter.RuleEntry<JsdocRequireTemplate>
  /**
   * Requires a description for `@template` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template-description.md#repos-sticky-header
   */
  'jsdoc/require-template-description'?: Linter.RuleEntry<[]>
  /**
   * Requires that throw statements are documented with `@throws` tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header
   */
  'jsdoc/require-throws'?: Linter.RuleEntry<JsdocRequireThrows>
  /**
   * Requires a description for `@throws` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws-description.md#repos-sticky-header
   */
  'jsdoc/require-throws-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@throws` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws-type.md#repos-sticky-header
   */
  'jsdoc/require-throws-type'?: Linter.RuleEntry<[]>
  /**
   * Requires yields are documented with `@yields` tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header
   */
  'jsdoc/require-yields'?: Linter.RuleEntry<JsdocRequireYields>
  /**
   * Ensures that if a `@yields` is present that a `yield` (or `yield` with a value) is present in the function body (or that if a `@next` is present that there is a yield with a return value present).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header
   */
  'jsdoc/require-yields-check'?: Linter.RuleEntry<JsdocRequireYieldsCheck>
  /**
   * Requires a description for `@yields` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-description.md#repos-sticky-header
   */
  'jsdoc/require-yields-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@yields` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-type.md#repos-sticky-header
   */
  'jsdoc/require-yields-type'?: Linter.RuleEntry<[]>
  /**
   * Sorts tags by a specified sequence according to tag name, optionally adding line breaks between tag groups.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header
   */
  'jsdoc/sort-tags'?: Linter.RuleEntry<JsdocSortTags>
  /**
   * Enforces lines (or no lines) before, after, or between tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header
   */
  'jsdoc/tag-lines'?: Linter.RuleEntry<JsdocTagLines>
  /**
   * Auto-escape certain characters that are input within block and tag descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header
   */
  'jsdoc/text-escaping'?: Linter.RuleEntry<JsdocTextEscaping>
  /**
   * Prefers either function properties or method signatures
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-method-signature-style.md#repos-sticky-header
   */
  'jsdoc/ts-method-signature-style'?: Linter.RuleEntry<JsdocTsMethodSignatureStyle>
  /**
   * Warns against use of the empty object type
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-empty-object-type.md#repos-sticky-header
   */
  'jsdoc/ts-no-empty-object-type'?: Linter.RuleEntry<[]>
  /**
   * Catches unnecessary template expressions such as string expressions within a template literal.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-unnecessary-template-expression.md#repos-sticky-header
   */
  'jsdoc/ts-no-unnecessary-template-expression'?: Linter.RuleEntry<JsdocTsNoUnnecessaryTemplateExpression>
  /**
   * Prefers function types over call signatures when there are no other properties.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-prefer-function-type.md#repos-sticky-header
   */
  'jsdoc/ts-prefer-function-type'?: Linter.RuleEntry<JsdocTsPreferFunctionType>
  /**
   * Formats JSDoc type values.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/type-formatting.md#repos-sticky-header
   */
  'jsdoc/type-formatting'?: Linter.RuleEntry<JsdocTypeFormatting>
  /**
   * Requires all types/namepaths to be valid JSDoc, Closure compiler, or TypeScript types (configurable in settings).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header
   */
  'jsdoc/valid-types'?: Linter.RuleEntry<JsdocValidTypes>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.org/docs/latest/rules/jsx-quotes
   * @deprecated
   */
  'jsx-quotes'?: Linter.RuleEntry<JsxQuotes>
  /**
   * Enforce consistent spacing between keys and values in object literal properties
   * @see https://eslint.org/docs/latest/rules/key-spacing
   * @deprecated
   */
  'key-spacing'?: Linter.RuleEntry<KeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.org/docs/latest/rules/keyword-spacing
   * @deprecated
   */
  'keyword-spacing'?: Linter.RuleEntry<KeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.org/docs/latest/rules/line-comment-position
   * @deprecated
   */
  'line-comment-position'?: Linter.RuleEntry<LineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.org/docs/latest/rules/linebreak-style
   * @deprecated
   */
  'linebreak-style'?: Linter.RuleEntry<LinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.org/docs/latest/rules/lines-around-comment
   * @deprecated
   */
  'lines-around-comment'?: Linter.RuleEntry<LinesAroundComment>
  /**
   * Require or disallow newlines around directives
   * @see https://eslint.org/docs/latest/rules/lines-around-directive
   * @deprecated
   */
  'lines-around-directive'?: Linter.RuleEntry<LinesAroundDirective>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.org/docs/latest/rules/lines-between-class-members
   * @deprecated
   */
  'lines-between-class-members'?: Linter.RuleEntry<LinesBetweenClassMembers>
  /**
   * Require or disallow logical assignment operator shorthand
   * @see https://eslint.org/docs/latest/rules/logical-assignment-operators
   */
  'logical-assignment-operators'?: Linter.RuleEntry<LogicalAssignmentOperators>
  /**
   * Enforce a maximum number of classes per file
   * @see https://eslint.org/docs/latest/rules/max-classes-per-file
   */
  'max-classes-per-file'?: Linter.RuleEntry<MaxClassesPerFile>
  /**
   * Enforce a maximum depth that blocks can be nested
   * @see https://eslint.org/docs/latest/rules/max-depth
   */
  'max-depth'?: Linter.RuleEntry<MaxDepth>
  /**
   * Enforce a maximum line length
   * @see https://eslint.org/docs/latest/rules/max-len
   * @deprecated
   */
  'max-len'?: Linter.RuleEntry<MaxLen>
  /**
   * Enforce a maximum number of lines per file
   * @see https://eslint.org/docs/latest/rules/max-lines
   */
  'max-lines'?: Linter.RuleEntry<MaxLines>
  /**
   * Enforce a maximum number of lines of code in a function
   * @see https://eslint.org/docs/latest/rules/max-lines-per-function
   */
  'max-lines-per-function'?: Linter.RuleEntry<MaxLinesPerFunction>
  /**
   * Enforce a maximum depth that callbacks can be nested
   * @see https://eslint.org/docs/latest/rules/max-nested-callbacks
   */
  'max-nested-callbacks'?: Linter.RuleEntry<MaxNestedCallbacks>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://eslint.org/docs/latest/rules/max-params
   */
  'max-params'?: Linter.RuleEntry<MaxParams>
  /**
   * Enforce a maximum number of statements allowed in function blocks
   * @see https://eslint.org/docs/latest/rules/max-statements
   */
  'max-statements'?: Linter.RuleEntry<MaxStatements>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.org/docs/latest/rules/max-statements-per-line
   * @deprecated
   */
  'max-statements-per-line'?: Linter.RuleEntry<MaxStatementsPerLine>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.org/docs/latest/rules/multiline-comment-style
   * @deprecated
   */
  'multiline-comment-style'?: Linter.RuleEntry<MultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.org/docs/latest/rules/multiline-ternary
   * @deprecated
   */
  'multiline-ternary'?: Linter.RuleEntry<MultilineTernary>
  /**
   * Require constructor names to begin with a capital letter
   * @see https://eslint.org/docs/latest/rules/new-cap
   */
  'new-cap'?: Linter.RuleEntry<NewCap>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.org/docs/latest/rules/new-parens
   * @deprecated
   */
  'new-parens'?: Linter.RuleEntry<NewParens>
  /**
   * Require or disallow an empty line after variable declarations
   * @see https://eslint.org/docs/latest/rules/newline-after-var
   * @deprecated
   */
  'newline-after-var'?: Linter.RuleEntry<NewlineAfterVar>
  /**
   * Require an empty line before `return` statements
   * @see https://eslint.org/docs/latest/rules/newline-before-return
   * @deprecated
   */
  'newline-before-return'?: Linter.RuleEntry<[]>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.org/docs/latest/rules/newline-per-chained-call
   * @deprecated
   */
  'newline-per-chained-call'?: Linter.RuleEntry<NewlinePerChainedCall>
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`
   * @see https://eslint.org/docs/latest/rules/no-alert
   */
  'no-alert'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array` constructors
   * @see https://eslint.org/docs/latest/rules/no-array-constructor
   */
  'no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using an async function as a Promise executor
   * @see https://eslint.org/docs/latest/rules/no-async-promise-executor
   */
  'no-async-promise-executor'?: Linter.RuleEntry<[]>
  /**
   * Disallow `await` inside of loops
   * @see https://eslint.org/docs/latest/rules/no-await-in-loop
   */
  'no-await-in-loop'?: Linter.RuleEntry<[]>
  /**
   * Disallow bitwise operators
   * @see https://eslint.org/docs/latest/rules/no-bitwise
   */
  'no-bitwise'?: Linter.RuleEntry<NoBitwise>
  /**
   * Disallow use of the `Buffer()` constructor
   * @see https://eslint.org/docs/latest/rules/no-buffer-constructor
   * @deprecated
   */
  'no-buffer-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`
   * @see https://eslint.org/docs/latest/rules/no-caller
   */
  'no-caller'?: Linter.RuleEntry<[]>
  /**
   * Disallow lexical declarations in case clauses
   * @see https://eslint.org/docs/latest/rules/no-case-declarations
   */
  'no-case-declarations'?: Linter.RuleEntry<[]>
  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope
   * @see https://eslint.org/docs/latest/rules/no-catch-shadow
   * @deprecated
   */
  'no-catch-shadow'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning class members
   * @see https://eslint.org/docs/latest/rules/no-class-assign
   */
  'no-class-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing against `-0`
   * @see https://eslint.org/docs/latest/rules/no-compare-neg-zero
   */
  'no-compare-neg-zero'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignment operators in conditional expressions
   * @see https://eslint.org/docs/latest/rules/no-cond-assign
   */
  'no-cond-assign'?: Linter.RuleEntry<NoCondAssign>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.org/docs/latest/rules/no-confusing-arrow
   * @deprecated
   */
  'no-confusing-arrow'?: Linter.RuleEntry<NoConfusingArrow>
  /**
   * Disallow the use of `console`
   * @see https://eslint.org/docs/latest/rules/no-console
   */
  'no-console'?: Linter.RuleEntry<NoConsole>
  /**
   * Disallow reassigning `const`, `using`, and `await using` variables
   * @see https://eslint.org/docs/latest/rules/no-const-assign
   */
  'no-const-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow expressions where the operation doesn't affect the value
   * @see https://eslint.org/docs/latest/rules/no-constant-binary-expression
   */
  'no-constant-binary-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow constant expressions in conditions
   * @see https://eslint.org/docs/latest/rules/no-constant-condition
   */
  'no-constant-condition'?: Linter.RuleEntry<NoConstantCondition>
  /**
   * Disallow returning value from constructor
   * @see https://eslint.org/docs/latest/rules/no-constructor-return
   */
  'no-constructor-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow `continue` statements
   * @see https://eslint.org/docs/latest/rules/no-continue
   */
  'no-continue'?: Linter.RuleEntry<[]>
  /**
   * Disallow control characters in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-control-regex
   */
  'no-control-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `debugger`
   * @see https://eslint.org/docs/latest/rules/no-debugger
   */
  'no-debugger'?: Linter.RuleEntry<[]>
  /**
   * Disallow deleting variables
   * @see https://eslint.org/docs/latest/rules/no-delete-var
   */
  'no-delete-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow equal signs explicitly at the beginning of regular expressions
   * @see https://eslint.org/docs/latest/rules/no-div-regex
   */
  'no-div-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate arguments in `function` definitions
   * @see https://eslint.org/docs/latest/rules/no-dupe-args
   */
  'no-dupe-args'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate class members
   * @see https://eslint.org/docs/latest/rules/no-dupe-class-members
   */
  'no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate conditions in if-else-if chains
   * @see https://eslint.org/docs/latest/rules/no-dupe-else-if
   */
  'no-dupe-else-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate keys in object literals
   * @see https://eslint.org/docs/latest/rules/no-dupe-keys
   */
  'no-dupe-keys'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate case labels
   * @see https://eslint.org/docs/latest/rules/no-duplicate-case
   */
  'no-duplicate-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate module imports
   * @see https://eslint.org/docs/latest/rules/no-duplicate-imports
   */
  'no-duplicate-imports'?: Linter.RuleEntry<NoDuplicateImports>
  /**
   * Disallow `else` blocks after `return` statements in `if` statements
   * @see https://eslint.org/docs/latest/rules/no-else-return
   */
  'no-else-return'?: Linter.RuleEntry<NoElseReturn>
  /**
   * Disallow empty block statements
   * @see https://eslint.org/docs/latest/rules/no-empty
   */
  'no-empty'?: Linter.RuleEntry<NoEmpty>
  /**
   * Disallow empty character classes in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-empty-character-class
   */
  'no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://eslint.org/docs/latest/rules/no-empty-function
   */
  'no-empty-function'?: Linter.RuleEntry<NoEmptyFunction>
  /**
   * Disallow empty destructuring patterns
   * @see https://eslint.org/docs/latest/rules/no-empty-pattern
   */
  'no-empty-pattern'?: Linter.RuleEntry<NoEmptyPattern>
  /**
   * Disallow empty static blocks
   * @see https://eslint.org/docs/latest/rules/no-empty-static-block
   */
  'no-empty-static-block'?: Linter.RuleEntry<[]>
  /**
   * Disallow `null` comparisons without type-checking operators
   * @see https://eslint.org/docs/latest/rules/no-eq-null
   */
  'no-eq-null'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`
   * @see https://eslint.org/docs/latest/rules/no-eval
   */
  'no-eval'?: Linter.RuleEntry<NoEval>
  /**
   * Disallow reassigning exceptions in `catch` clauses
   * @see https://eslint.org/docs/latest/rules/no-ex-assign
   */
  'no-ex-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow extending native types
   * @see https://eslint.org/docs/latest/rules/no-extend-native
   */
  'no-extend-native'?: Linter.RuleEntry<NoExtendNative>
  /**
   * Disallow unnecessary calls to `.bind()`
   * @see https://eslint.org/docs/latest/rules/no-extra-bind
   */
  'no-extra-bind'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary boolean casts
   * @see https://eslint.org/docs/latest/rules/no-extra-boolean-cast
   */
  'no-extra-boolean-cast'?: Linter.RuleEntry<NoExtraBooleanCast>
  /**
   * Disallow unnecessary labels
   * @see https://eslint.org/docs/latest/rules/no-extra-label
   */
  'no-extra-label'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.org/docs/latest/rules/no-extra-parens
   * @deprecated
   */
  'no-extra-parens'?: Linter.RuleEntry<NoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.org/docs/latest/rules/no-extra-semi
   * @deprecated
   */
  'no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow fallthrough of `case` statements
   * @see https://eslint.org/docs/latest/rules/no-fallthrough
   */
  'no-fallthrough'?: Linter.RuleEntry<NoFallthrough>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.org/docs/latest/rules/no-floating-decimal
   * @deprecated
   */
  'no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning `function` declarations
   * @see https://eslint.org/docs/latest/rules/no-func-assign
   */
  'no-func-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments to native objects or read-only global variables
   * @see https://eslint.org/docs/latest/rules/no-global-assign
   */
  'no-global-assign'?: Linter.RuleEntry<NoGlobalAssign>
  /**
   * Disallow shorthand type conversions
   * @see https://eslint.org/docs/latest/rules/no-implicit-coercion
   */
  'no-implicit-coercion'?: Linter.RuleEntry<NoImplicitCoercion>
  /**
   * Disallow declarations in the global scope
   * @see https://eslint.org/docs/latest/rules/no-implicit-globals
   */
  'no-implicit-globals'?: Linter.RuleEntry<NoImplicitGlobals>
  /**
   * Disallow the use of `eval()`-like methods
   * @see https://eslint.org/docs/latest/rules/no-implied-eval
   */
  'no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning to imported bindings
   * @see https://eslint.org/docs/latest/rules/no-import-assign
   */
  'no-import-assign'?: Linter.RuleEntry<[]>
  /**
   * Disallow inline comments after code
   * @see https://eslint.org/docs/latest/rules/no-inline-comments
   */
  'no-inline-comments'?: Linter.RuleEntry<NoInlineComments>
  /**
   * Disallow variable or `function` declarations in nested blocks
   * @see https://eslint.org/docs/latest/rules/no-inner-declarations
   */
  'no-inner-declarations'?: Linter.RuleEntry<NoInnerDeclarations>
  /**
   * Disallow invalid regular expression strings in `RegExp` constructors
   * @see https://eslint.org/docs/latest/rules/no-invalid-regexp
   */
  'no-invalid-regexp'?: Linter.RuleEntry<NoInvalidRegexp>
  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`
   * @see https://eslint.org/docs/latest/rules/no-invalid-this
   */
  'no-invalid-this'?: Linter.RuleEntry<NoInvalidThis>
  /**
   * Disallow irregular whitespace
   * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
   */
  'no-irregular-whitespace'?: Linter.RuleEntry<NoIrregularWhitespace>
  /**
   * Disallow the use of the `__iterator__` property
   * @see https://eslint.org/docs/latest/rules/no-iterator
   */
  'no-iterator'?: Linter.RuleEntry<[]>
  /**
   * Disallow labels that share a name with a variable
   * @see https://eslint.org/docs/latest/rules/no-label-var
   */
  'no-label-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow labeled statements
   * @see https://eslint.org/docs/latest/rules/no-labels
   */
  'no-labels'?: Linter.RuleEntry<NoLabels>
  /**
   * Disallow unnecessary nested blocks
   * @see https://eslint.org/docs/latest/rules/no-lone-blocks
   */
  'no-lone-blocks'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `else` blocks
   * @see https://eslint.org/docs/latest/rules/no-lonely-if
   */
  'no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://eslint.org/docs/latest/rules/no-loop-func
   */
  'no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://eslint.org/docs/latest/rules/no-loss-of-precision
   */
  'no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://eslint.org/docs/latest/rules/no-magic-numbers
   */
  'no-magic-numbers'?: Linter.RuleEntry<NoMagicNumbers>
  /**
   * Disallow characters which are made with multiple code points in character class syntax
   * @see https://eslint.org/docs/latest/rules/no-misleading-character-class
   */
  'no-misleading-character-class'?: Linter.RuleEntry<NoMisleadingCharacterClass>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.org/docs/latest/rules/no-mixed-operators
   * @deprecated
   */
  'no-mixed-operators'?: Linter.RuleEntry<NoMixedOperators>
  /**
   * Disallow `require` calls to be mixed with regular variable declarations
   * @see https://eslint.org/docs/latest/rules/no-mixed-requires
   * @deprecated
   */
  'no-mixed-requires'?: Linter.RuleEntry<NoMixedRequires>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
   * @deprecated
   */
  'no-mixed-spaces-and-tabs'?: Linter.RuleEntry<NoMixedSpacesAndTabs>
  /**
   * Disallow use of chained assignment expressions
   * @see https://eslint.org/docs/latest/rules/no-multi-assign
   */
  'no-multi-assign'?: Linter.RuleEntry<NoMultiAssign>
  /**
   * Disallow multiple spaces
   * @see https://eslint.org/docs/latest/rules/no-multi-spaces
   * @deprecated
   */
  'no-multi-spaces'?: Linter.RuleEntry<NoMultiSpaces>
  /**
   * Disallow multiline strings
   * @see https://eslint.org/docs/latest/rules/no-multi-str
   */
  'no-multi-str'?: Linter.RuleEntry<[]>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.org/docs/latest/rules/no-multiple-empty-lines
   * @deprecated
   */
  'no-multiple-empty-lines'?: Linter.RuleEntry<NoMultipleEmptyLines>
  /**
   * Disallow assignments to native objects or read-only global variables
   * @see https://eslint.org/docs/latest/rules/no-native-reassign
   * @deprecated
   */
  'no-native-reassign'?: Linter.RuleEntry<NoNativeReassign>
  /**
   * Disallow negated conditions
   * @see https://eslint.org/docs/latest/rules/no-negated-condition
   */
  'no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negating the left operand in `in` expressions
   * @see https://eslint.org/docs/latest/rules/no-negated-in-lhs
   * @deprecated
   */
  'no-negated-in-lhs'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions
   * @see https://eslint.org/docs/latest/rules/no-nested-ternary
   */
  'no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators outside of assignments or comparisons
   * @see https://eslint.org/docs/latest/rules/no-new
   */
  'no-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `Function` object
   * @see https://eslint.org/docs/latest/rules/no-new-func
   */
  'no-new-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with global non-constructor functions
   * @see https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
   */
  'no-new-native-nonconstructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Object` constructors
   * @see https://eslint.org/docs/latest/rules/no-new-object
   * @deprecated
   */
  'no-new-object'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with calls to `require`
   * @see https://eslint.org/docs/latest/rules/no-new-require
   * @deprecated
   */
  'no-new-require'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `Symbol` object
   * @see https://eslint.org/docs/latest/rules/no-new-symbol
   * @deprecated
   */
  'no-new-symbol'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
   * @see https://eslint.org/docs/latest/rules/no-new-wrappers
   */
  'no-new-wrappers'?: Linter.RuleEntry<[]>
  /**
   * Disallow `\8` and `\9` escape sequences in string literals
   * @see https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
   */
  'no-nonoctal-decimal-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling global object properties as functions
   * @see https://eslint.org/docs/latest/rules/no-obj-calls
   */
  'no-obj-calls'?: Linter.RuleEntry<[]>
  /**
   * Disallow calls to the `Object` constructor without an argument
   * @see https://eslint.org/docs/latest/rules/no-object-constructor
   */
  'no-object-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow octal literals
   * @see https://eslint.org/docs/latest/rules/no-octal
   */
  'no-octal'?: Linter.RuleEntry<[]>
  /**
   * Disallow octal escape sequences in string literals
   * @see https://eslint.org/docs/latest/rules/no-octal-escape
   */
  'no-octal-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow reassigning function parameters
   * @see https://eslint.org/docs/latest/rules/no-param-reassign
   */
  'no-param-reassign'?: Linter.RuleEntry<NoParamReassign>
  /**
   * Disallow string concatenation with `__dirname` and `__filename`
   * @see https://eslint.org/docs/latest/rules/no-path-concat
   * @deprecated
   */
  'no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow the unary operators `++` and `--`
   * @see https://eslint.org/docs/latest/rules/no-plusplus
   */
  'no-plusplus'?: Linter.RuleEntry<NoPlusplus>
  /**
   * Disallow the use of `process.env`
   * @see https://eslint.org/docs/latest/rules/no-process-env
   * @deprecated
   */
  'no-process-env'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `process.exit()`
   * @see https://eslint.org/docs/latest/rules/no-process-exit
   * @deprecated
   */
  'no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning values from Promise executor functions
   * @see https://eslint.org/docs/latest/rules/no-promise-executor-return
   */
  'no-promise-executor-return'?: Linter.RuleEntry<NoPromiseExecutorReturn>
  /**
   * Disallow the use of the `__proto__` property
   * @see https://eslint.org/docs/latest/rules/no-proto
   */
  'no-proto'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling some `Object.prototype` methods directly on objects
   * @see https://eslint.org/docs/latest/rules/no-prototype-builtins
   */
  'no-prototype-builtins'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://eslint.org/docs/latest/rules/no-redeclare
   */
  'no-redeclare'?: Linter.RuleEntry<NoRedeclare>
  /**
   * Disallow multiple spaces in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-regex-spaces
   */
  'no-regex-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow specified names in exports
   * @see https://eslint.org/docs/latest/rules/no-restricted-exports
   */
  'no-restricted-exports'?: Linter.RuleEntry<NoRestrictedExports>
  /**
   * Disallow specified global variables
   * @see https://eslint.org/docs/latest/rules/no-restricted-globals
   */
  'no-restricted-globals'?: Linter.RuleEntry<NoRestrictedGlobals>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://eslint.org/docs/latest/rules/no-restricted-imports
   */
  'no-restricted-imports'?: Linter.RuleEntry<NoRestrictedImports>
  /**
   * Disallow specified modules when loaded by `require`
   * @see https://eslint.org/docs/latest/rules/no-restricted-modules
   * @deprecated
   */
  'no-restricted-modules'?: Linter.RuleEntry<NoRestrictedModules>
  /**
   * Disallow certain properties on certain objects
   * @see https://eslint.org/docs/latest/rules/no-restricted-properties
   */
  'no-restricted-properties'?: Linter.RuleEntry<NoRestrictedProperties>
  /**
   * Disallow specified syntax
   * @see https://eslint.org/docs/latest/rules/no-restricted-syntax
   */
  'no-restricted-syntax'?: Linter.RuleEntry<NoRestrictedSyntax>
  /**
   * Disallow assignment operators in `return` statements
   * @see https://eslint.org/docs/latest/rules/no-return-assign
   */
  'no-return-assign'?: Linter.RuleEntry<NoReturnAssign>
  /**
   * Disallow unnecessary `return await`
   * @see https://eslint.org/docs/latest/rules/no-return-await
   * @deprecated
   */
  'no-return-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow `javascript:` URLs
   * @see https://eslint.org/docs/latest/rules/no-script-url
   */
  'no-script-url'?: Linter.RuleEntry<[]>
  /**
   * Disallow assignments where both sides are exactly the same
   * @see https://eslint.org/docs/latest/rules/no-self-assign
   */
  'no-self-assign'?: Linter.RuleEntry<NoSelfAssign>
  /**
   * Disallow comparisons where both sides are exactly the same
   * @see https://eslint.org/docs/latest/rules/no-self-compare
   */
  'no-self-compare'?: Linter.RuleEntry<[]>
  /**
   * Disallow comma operators
   * @see https://eslint.org/docs/latest/rules/no-sequences
   */
  'no-sequences'?: Linter.RuleEntry<NoSequences>
  /**
   * Disallow returning values from setters
   * @see https://eslint.org/docs/latest/rules/no-setter-return
   */
  'no-setter-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://eslint.org/docs/latest/rules/no-shadow
   */
  'no-shadow'?: Linter.RuleEntry<NoShadow>
  /**
   * Disallow identifiers from shadowing restricted names
   * @see https://eslint.org/docs/latest/rules/no-shadow-restricted-names
   */
  'no-shadow-restricted-names'?: Linter.RuleEntry<NoShadowRestrictedNames>
  /**
   * Disallow spacing between function identifiers and their applications (deprecated)
   * @see https://eslint.org/docs/latest/rules/no-spaced-func
   * @deprecated
   */
  'no-spaced-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow sparse arrays
   * @see https://eslint.org/docs/latest/rules/no-sparse-arrays
   */
  'no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * Disallow synchronous methods
   * @see https://eslint.org/docs/latest/rules/no-sync
   * @deprecated
   */
  'no-sync'?: Linter.RuleEntry<NoSync>
  /**
   * Disallow all tabs
   * @see https://eslint.org/docs/latest/rules/no-tabs
   * @deprecated
   */
  'no-tabs'?: Linter.RuleEntry<NoTabs>
  /**
   * Disallow template literal placeholder syntax in regular strings
   * @see https://eslint.org/docs/latest/rules/no-template-curly-in-string
   */
  'no-template-curly-in-string'?: Linter.RuleEntry<[]>
  /**
   * Disallow ternary operators
   * @see https://eslint.org/docs/latest/rules/no-ternary
   */
  'no-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `this`/`super` before calling `super()` in constructors
   * @see https://eslint.org/docs/latest/rules/no-this-before-super
   */
  'no-this-before-super'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing literals as exceptions
   * @see https://eslint.org/docs/latest/rules/no-throw-literal
   */
  'no-throw-literal'?: Linter.RuleEntry<[]>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.org/docs/latest/rules/no-trailing-spaces
   * @deprecated
   */
  'no-trailing-spaces'?: Linter.RuleEntry<NoTrailingSpaces>
  /**
   * Disallow `let` or `var` variables that are read but never assigned
   * @see https://eslint.org/docs/latest/rules/no-unassigned-vars
   */
  'no-unassigned-vars'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global *\/` comments
   * @see https://eslint.org/docs/latest/rules/no-undef
   */
  'no-undef'?: Linter.RuleEntry<NoUndef>
  /**
   * Disallow initializing variables to `undefined`
   * @see https://eslint.org/docs/latest/rules/no-undef-init
   */
  'no-undef-init'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `undefined` as an identifier
   * @see https://eslint.org/docs/latest/rules/no-undefined
   */
  'no-undefined'?: Linter.RuleEntry<[]>
  /**
   * Disallow dangling underscores in identifiers
   * @see https://eslint.org/docs/latest/rules/no-underscore-dangle
   */
  'no-underscore-dangle'?: Linter.RuleEntry<NoUnderscoreDangle>
  /**
   * Disallow confusing multiline expressions
   * @see https://eslint.org/docs/latest/rules/no-unexpected-multiline
   */
  'no-unexpected-multiline'?: Linter.RuleEntry<[]>
  /**
   * Disallow unmodified loop conditions
   * @see https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
   */
  'no-unmodified-loop-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow ternary operators when simpler alternatives exist
   * @see https://eslint.org/docs/latest/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary'?: Linter.RuleEntry<NoUnneededTernary>
  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
   * @see https://eslint.org/docs/latest/rules/no-unreachable
   */
  'no-unreachable'?: Linter.RuleEntry<[]>
  /**
   * Disallow loops with a body that allows only one iteration
   * @see https://eslint.org/docs/latest/rules/no-unreachable-loop
   */
  'no-unreachable-loop'?: Linter.RuleEntry<NoUnreachableLoop>
  /**
   * Disallow control flow statements in `finally` blocks
   * @see https://eslint.org/docs/latest/rules/no-unsafe-finally
   */
  'no-unsafe-finally'?: Linter.RuleEntry<[]>
  /**
   * Disallow negating the left operand of relational operators
   * @see https://eslint.org/docs/latest/rules/no-unsafe-negation
   */
  'no-unsafe-negation'?: Linter.RuleEntry<NoUnsafeNegation>
  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed
   * @see https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
   */
  'no-unsafe-optional-chaining'?: Linter.RuleEntry<NoUnsafeOptionalChaining>
  /**
   * Disallow unused expressions
   * @see https://eslint.org/docs/latest/rules/no-unused-expressions
   */
  'no-unused-expressions'?: Linter.RuleEntry<NoUnusedExpressions>
  /**
   * Disallow unused labels
   * @see https://eslint.org/docs/latest/rules/no-unused-labels
   */
  'no-unused-labels'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused private class members
   * @see https://eslint.org/docs/latest/rules/no-unused-private-class-members
   */
  'no-unused-private-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://eslint.org/docs/latest/rules/no-unused-vars
   */
  'no-unused-vars'?: Linter.RuleEntry<NoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://eslint.org/docs/latest/rules/no-use-before-define
   */
  'no-use-before-define'?: Linter.RuleEntry<NoUseBeforeDefine>
  /**
   * Disallow variable assignments when the value is not used
   * @see https://eslint.org/docs/latest/rules/no-useless-assignment
   */
  'no-useless-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless backreferences in regular expressions
   * @see https://eslint.org/docs/latest/rules/no-useless-backreference
   */
  'no-useless-backreference'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`
   * @see https://eslint.org/docs/latest/rules/no-useless-call
   */
  'no-useless-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `catch` clauses
   * @see https://eslint.org/docs/latest/rules/no-useless-catch
   */
  'no-useless-catch'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary computed property keys in objects and classes
   * @see https://eslint.org/docs/latest/rules/no-useless-computed-key
   */
  'no-useless-computed-key'?: Linter.RuleEntry<NoUselessComputedKey>
  /**
   * Disallow unnecessary concatenation of literals or template literals
   * @see https://eslint.org/docs/latest/rules/no-useless-concat
   */
  'no-useless-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary constructors
   * @see https://eslint.org/docs/latest/rules/no-useless-constructor
   */
  'no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary escape characters
   * @see https://eslint.org/docs/latest/rules/no-useless-escape
   */
  'no-useless-escape'?: Linter.RuleEntry<NoUselessEscape>
  /**
   * Disallow renaming import, export, and destructured assignments to the same name
   * @see https://eslint.org/docs/latest/rules/no-useless-rename
   */
  'no-useless-rename'?: Linter.RuleEntry<NoUselessRename>
  /**
   * Disallow redundant return statements
   * @see https://eslint.org/docs/latest/rules/no-useless-return
   */
  'no-useless-return'?: Linter.RuleEntry<[]>
  /**
   * Require `let` or `const` instead of `var`
   * @see https://eslint.org/docs/latest/rules/no-var
   */
  'no-var'?: Linter.RuleEntry<[]>
  /**
   * Disallow `void` operators
   * @see https://eslint.org/docs/latest/rules/no-void
   */
  'no-void'?: Linter.RuleEntry<NoVoid>
  /**
   * Disallow specified warning terms in comments
   * @see https://eslint.org/docs/latest/rules/no-warning-comments
   */
  'no-warning-comments'?: Linter.RuleEntry<NoWarningComments>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.org/docs/latest/rules/no-whitespace-before-property
   * @deprecated
   */
  'no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Disallow `with` statements
   * @see https://eslint.org/docs/latest/rules/no-with
   */
  'no-with'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.org/docs/latest/rules/nonblock-statement-body-position
   * @deprecated
   */
  'nonblock-statement-body-position'?: Linter.RuleEntry<NonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.org/docs/latest/rules/object-curly-newline
   * @deprecated
   */
  'object-curly-newline'?: Linter.RuleEntry<ObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.org/docs/latest/rules/object-curly-spacing
   * @deprecated
   */
  'object-curly-spacing'?: Linter.RuleEntry<ObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.org/docs/latest/rules/object-property-newline
   * @deprecated
   */
  'object-property-newline'?: Linter.RuleEntry<ObjectPropertyNewline>
  /**
   * Require or disallow method and property shorthand syntax for object literals
   * @see https://eslint.org/docs/latest/rules/object-shorthand
   */
  'object-shorthand'?: Linter.RuleEntry<ObjectShorthand>
  /**
   * Enforce variables to be declared either together or separately in functions
   * @see https://eslint.org/docs/latest/rules/one-var
   */
  'one-var'?: Linter.RuleEntry<OneVar>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.org/docs/latest/rules/one-var-declaration-per-line
   * @deprecated
   */
  'one-var-declaration-per-line'?: Linter.RuleEntry<OneVarDeclarationPerLine>
  /**
   * Require or disallow assignment operator shorthand where possible
   * @see https://eslint.org/docs/latest/rules/operator-assignment
   */
  'operator-assignment'?: Linter.RuleEntry<OperatorAssignment>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.org/docs/latest/rules/operator-linebreak
   * @deprecated
   */
  'operator-linebreak'?: Linter.RuleEntry<OperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.org/docs/latest/rules/padded-blocks
   * @deprecated
   */
  'padded-blocks'?: Linter.RuleEntry<PaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.org/docs/latest/rules/padding-line-between-statements
   * @deprecated
   */
  'padding-line-between-statements'?: Linter.RuleEntry<PaddingLineBetweenStatements>
  /**
   * Require using arrow functions for callbacks
   * @see https://eslint.org/docs/latest/rules/prefer-arrow-callback
   */
  'prefer-arrow-callback'?: Linter.RuleEntry<PreferArrowCallback>
  /**
   * Require `const` declarations for variables that are never reassigned after declared
   * @see https://eslint.org/docs/latest/rules/prefer-const
   */
  'prefer-const'?: Linter.RuleEntry<PreferConst>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://eslint.org/docs/latest/rules/prefer-destructuring
   */
  'prefer-destructuring'?: Linter.RuleEntry<PreferDestructuring>
  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator
   * @see https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
   */
  'prefer-exponentiation-operator'?: Linter.RuleEntry<[]>
  /**
   * Enforce using named capture group in regular expression
   * @see https://eslint.org/docs/latest/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group'?: Linter.RuleEntry<[]>
  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
   * @see https://eslint.org/docs/latest/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
   * @see https://eslint.org/docs/latest/rules/prefer-object-has-own
   */
  'prefer-object-has-own'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead
   * @see https://eslint.org/docs/latest/rules/prefer-object-spread
   */
  'prefer-object-spread'?: Linter.RuleEntry<[]>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors'?: Linter.RuleEntry<PreferPromiseRejectErrors>
  /**
   * Require `Reflect` methods where applicable
   * @see https://eslint.org/docs/latest/rules/prefer-reflect
   * @deprecated
   */
  'prefer-reflect'?: Linter.RuleEntry<PreferReflect>
  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals
   * @see https://eslint.org/docs/latest/rules/prefer-regex-literals
   */
  'prefer-regex-literals'?: Linter.RuleEntry<PreferRegexLiterals>
  /**
   * Require rest parameters instead of `arguments`
   * @see https://eslint.org/docs/latest/rules/prefer-rest-params
   */
  'prefer-rest-params'?: Linter.RuleEntry<[]>
  /**
   * Require spread operators instead of `.apply()`
   * @see https://eslint.org/docs/latest/rules/prefer-spread
   */
  'prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Require template literals instead of string concatenation
   * @see https://eslint.org/docs/latest/rules/prefer-template
   */
  'prefer-template'?: Linter.RuleEntry<[]>
  /**
   * Disallow losing originally caught error when re-throwing custom errors
   * @see https://eslint.org/docs/latest/rules/preserve-caught-error
   */
  'preserve-caught-error'?: Linter.RuleEntry<PreserveCaughtError>
  /**
   * Require quotes around object literal property names
   * @see https://eslint.org/docs/latest/rules/quote-props
   * @deprecated
   */
  'quote-props'?: Linter.RuleEntry<QuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.org/docs/latest/rules/quotes
   * @deprecated
   */
  'quotes'?: Linter.RuleEntry<Quotes>
  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`
   * @see https://eslint.org/docs/latest/rules/radix
   */
  'radix'?: Linter.RuleEntry<Radix>
  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
   * @see https://eslint.org/docs/latest/rules/require-atomic-updates
   */
  'require-atomic-updates'?: Linter.RuleEntry<RequireAtomicUpdates>
  /**
   * Disallow async functions which have no `await` expression
   * @see https://eslint.org/docs/latest/rules/require-await
   */
  'require-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `u` or `v` flag on regular expressions
   * @see https://eslint.org/docs/latest/rules/require-unicode-regexp
   */
  'require-unicode-regexp'?: Linter.RuleEntry<RequireUnicodeRegexp>
  /**
   * Require generator functions to contain `yield`
   * @see https://eslint.org/docs/latest/rules/require-yield
   */
  'require-yield'?: Linter.RuleEntry<[]>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.org/docs/latest/rules/rest-spread-spacing
   * @deprecated
   */
  'rest-spread-spacing'?: Linter.RuleEntry<RestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.org/docs/latest/rules/semi
   * @deprecated
   */
  'semi'?: Linter.RuleEntry<Semi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.org/docs/latest/rules/semi-spacing
   * @deprecated
   */
  'semi-spacing'?: Linter.RuleEntry<SemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.org/docs/latest/rules/semi-style
   * @deprecated
   */
  'semi-style'?: Linter.RuleEntry<SemiStyle>
  /**
   * Alternatives in regular expressions should be grouped when used with anchors
   * @see https://sonarsource.github.io/rspec/#/rspec/S5850/javascript
   */
  'sonarjs/anchor-precedence'?: Linter.RuleEntry<[]>
  /**
   * Arguments to built-in functions should match documented types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3782/javascript
   */
  'sonarjs/argument-type'?: Linter.RuleEntry<[]>
  /**
   * Parameters should be passed in the correct order
   * @see https://sonarsource.github.io/rspec/#/rspec/S2234/javascript
   */
  'sonarjs/arguments-order'?: Linter.RuleEntry<[]>
  /**
   * "arguments" should not be accessed directly
   * @see https://sonarsource.github.io/rspec/#/rspec/S3513/javascript
   */
  'sonarjs/arguments-usage'?: Linter.RuleEntry<[]>
  /**
   * Callbacks of array methods should have return statements
   * @see https://sonarsource.github.io/rspec/#/rspec/S3796/javascript
   */
  'sonarjs/array-callback-without-return'?: Linter.RuleEntry<[]>
  /**
   * Array constructors should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1528/javascript
   */
  'sonarjs/array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Braces and parentheses should be used consistently with arrow functions
   * @see https://sonarsource.github.io/rspec/#/rspec/S3524/javascript
   */
  'sonarjs/arrow-function-convention'?: Linter.RuleEntry<SonarjsArrowFunctionConvention>
  /**
   * Tests should include assertions
   * @see https://sonarsource.github.io/rspec/#/rspec/S2699/javascript
   */
  'sonarjs/assertions-in-tests'?: Linter.RuleEntry<[]>
  /**
   * Creating public APIs is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6333/javascript
   */
  'sonarjs/aws-apigateway-public-api'?: Linter.RuleEntry<[]>
  /**
   * Allowing public network access to cloud resources is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6329/javascript
   */
  'sonarjs/aws-ec2-rds-dms-public'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted EBS volumes is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6275/javascript
   */
  'sonarjs/aws-ec2-unencrypted-ebs-volume'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted EFS file systems is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6332/javascript
   */
  'sonarjs/aws-efs-unencrypted'?: Linter.RuleEntry<[]>
  /**
   * Policies granting all privileges are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6302/javascript
   */
  'sonarjs/aws-iam-all-privileges'?: Linter.RuleEntry<[]>
  /**
   * Policies granting access to all resources of an account are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6304/javascript
   */
  'sonarjs/aws-iam-all-resources-accessible'?: Linter.RuleEntry<[]>
  /**
   * AWS IAM policies should limit the scope of permissions given
   * @see https://sonarsource.github.io/rspec/#/rspec/S6317/javascript
   */
  'sonarjs/aws-iam-privilege-escalation'?: Linter.RuleEntry<[]>
  /**
   * Policies authorizing public access to resources are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6270/javascript
   */
  'sonarjs/aws-iam-public-access'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted Elasticsearch domains is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6308/javascript
   */
  'sonarjs/aws-opensearchservice-domain'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted RDS DB resources is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6303/javascript
   */
  'sonarjs/aws-rds-unencrypted-databases'?: Linter.RuleEntry<[]>
  /**
   * Administration services access should be restricted to specific IP addresses
   * @see https://sonarsource.github.io/rspec/#/rspec/S6321/javascript
   */
  'sonarjs/aws-restricted-ip-admin-access'?: Linter.RuleEntry<[]>
  /**
   * Granting access to S3 buckets to all or authenticated users is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6265/javascript
   */
  'sonarjs/aws-s3-bucket-granted-access'?: Linter.RuleEntry<[]>
  /**
   * Authorizing HTTP communications with S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6249/javascript
   */
  'sonarjs/aws-s3-bucket-insecure-http'?: Linter.RuleEntry<[]>
  /**
   * Allowing public ACLs or policies on a S3 bucket is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6281/javascript
   */
  'sonarjs/aws-s3-bucket-public-access'?: Linter.RuleEntry<[]>
  /**
   * Disabling server-side encryption of S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6245/javascript
   * @deprecated
   */
  'sonarjs/aws-s3-bucket-server-encryption'?: Linter.RuleEntry<[]>
  /**
   * Disabling versioning of S3 buckets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6252/javascript
   */
  'sonarjs/aws-s3-bucket-versioning'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted SageMaker notebook instances is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6319/javascript
   */
  'sonarjs/aws-sagemaker-unencrypted-notebook'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted SNS topics is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6327/javascript
   */
  'sonarjs/aws-sns-unencrypted-topics'?: Linter.RuleEntry<[]>
  /**
   * Using unencrypted SQS queues is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6330/javascript
   */
  'sonarjs/aws-sqs-unencrypted-queue'?: Linter.RuleEntry<[]>
  /**
   * Bitwise operators should not be used in boolean contexts
   * @see https://sonarsource.github.io/rspec/#/rspec/S1529/javascript
   */
  'sonarjs/bitwise-operators'?: Linter.RuleEntry<[]>
  /**
   * Variables should be used in the blocks where they are declared
   * @see https://sonarsource.github.io/rspec/#/rspec/S2392/javascript
   */
  'sonarjs/block-scoped-var'?: Linter.RuleEntry<[]>
  /**
   * Optional boolean parameters should have default value
   * @see https://sonarsource.github.io/rspec/#/rspec/S4798/javascript
   */
  'sonarjs/bool-param-default'?: Linter.RuleEntry<[]>
  /**
   * Function call arguments should not start on new lines
   * @see https://sonarsource.github.io/rspec/#/rspec/S1472/javascript
   */
  'sonarjs/call-argument-line'?: Linter.RuleEntry<[]>
  /**
   * Disabling Certificate Transparency monitoring is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5742/javascript
   * @deprecated
   */
  'sonarjs/certificate-transparency'?: Linter.RuleEntry<[]>
  /**
   * Chai assertions should have only one reason to succeed
   * @see https://sonarsource.github.io/rspec/#/rspec/S6092/javascript
   */
  'sonarjs/chai-determinate-assertion'?: Linter.RuleEntry<[]>
  /**
   * Class names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S101/javascript
   */
  'sonarjs/class-name'?: Linter.RuleEntry<SonarjsClassName>
  /**
   * Class methods should be used instead of "prototype" assignments
   * @see https://sonarsource.github.io/rspec/#/rspec/S3525/javascript
   */
  'sonarjs/class-prototype'?: Linter.RuleEntry<[]>
  /**
   * Dynamically executing code is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S1523/javascript
   */
  'sonarjs/code-eval'?: Linter.RuleEntry<[]>
  /**
   * Cognitive Complexity of functions should not be too high
   * @see https://sonarsource.github.io/rspec/#/rspec/S3776/javascript
   */
  'sonarjs/cognitive-complexity'?: Linter.RuleEntry<SonarjsCognitiveComplexity>
  /**
   * Comma and logical OR operators should not be used in switch cases
   * @see https://sonarsource.github.io/rspec/#/rspec/S3616/javascript
   */
  'sonarjs/comma-or-logical-or-case'?: Linter.RuleEntry<[]>
  /**
   * Track comments matching a regular expression
   * @see https://sonarsource.github.io/rspec/#/rspec/S124/javascript
   */
  'sonarjs/comment-regex'?: Linter.RuleEntry<SonarjsCommentRegex>
  /**
   * Regular expression quantifiers and character classes should be used concisely
   * @see https://sonarsource.github.io/rspec/#/rspec/S6353/javascript
   */
  'sonarjs/concise-regex'?: Linter.RuleEntry<[]>
  /**
   * A conditionally executed single line should be denoted by indentation
   * @see https://sonarsource.github.io/rspec/#/rspec/S3973/javascript
   * @deprecated
   */
  'sonarjs/conditional-indentation'?: Linter.RuleEntry<[]>
  /**
   * Allowing confidential information to be logged is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5757/javascript
   */
  'sonarjs/confidential-information-logging'?: Linter.RuleEntry<[]>
  /**
   * Objects should not be created to be dropped immediately without being used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1848/javascript
   */
  'sonarjs/constructor-for-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Allowing requests with excessive content length is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5693/javascript
   */
  'sonarjs/content-length'?: Linter.RuleEntry<SonarjsContentLength>
  /**
   * Disabling content security policy fetch directives is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5728/javascript
   */
  'sonarjs/content-security-policy'?: Linter.RuleEntry<[]>
  /**
   * Creating cookies without the "HttpOnly" flag is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S3330/javascript
   */
  'sonarjs/cookie-no-httponly'?: Linter.RuleEntry<[]>
  /**
   * Writing cookies is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2255/javascript
   * @deprecated
   */
  'sonarjs/cookies'?: Linter.RuleEntry<[]>
  /**
   * Having a permissive Cross-Origin Resource Sharing policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5122/javascript
   */
  'sonarjs/cors'?: Linter.RuleEntry<[]>
  /**
   * Disabling CSRF protections is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4502/javascript
   */
  'sonarjs/csrf'?: Linter.RuleEntry<[]>
  /**
   * Cyclomatic Complexity of functions should not be too high
   * @see https://sonarsource.github.io/rspec/#/rspec/S1541/javascript
   */
  'sonarjs/cyclomatic-complexity'?: Linter.RuleEntry<SonarjsCyclomaticComplexity>
  /**
   * Variables and functions should not be declared in the global scope
   * @see https://sonarsource.github.io/rspec/#/rspec/S3798/javascript
   */
  'sonarjs/declarations-in-global-scope'?: Linter.RuleEntry<[]>
  /**
   * Deprecated APIs should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1874/javascript
   */
  'sonarjs/deprecation'?: Linter.RuleEntry<[]>
  /**
   * Destructuring syntax should be used for assignments
   * @see https://sonarsource.github.io/rspec/#/rspec/S3514/javascript
   */
  'sonarjs/destructuring-assignment-syntax'?: Linter.RuleEntry<[]>
  /**
   * Strict equality operators should not be used with dissimilar types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3403/javascript
   */
  'sonarjs/different-types-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disabling auto-escaping in template engines is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5247/javascript
   */
  'sonarjs/disabled-auto-escaping'?: Linter.RuleEntry<[]>
  /**
   * Using remote artifacts without integrity checks is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5725/javascript
   */
  'sonarjs/disabled-resource-integrity'?: Linter.RuleEntry<[]>
  /**
   * Disabling Mocha timeouts should be explicit
   * @see https://sonarsource.github.io/rspec/#/rspec/S6080/javascript
   */
  'sonarjs/disabled-timeout'?: Linter.RuleEntry<[]>
  /**
   * Allowing browsers to perform DNS prefetching is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5743/javascript
   * @deprecated
   */
  'sonarjs/dns-prefetching'?: Linter.RuleEntry<[]>
  /**
   * Character classes in regular expressions should not contain the same character twice
   * @see https://sonarsource.github.io/rspec/#/rspec/S5869/javascript
   */
  'sonarjs/duplicates-in-character-class'?: Linter.RuleEntry<[]>
  /**
   * "if ... else if" constructs should end with "else" clauses
   * @see https://sonarsource.github.io/rspec/#/rspec/S126/javascript
   */
  'sonarjs/elseif-without-else'?: Linter.RuleEntry<[]>
  /**
   * Repeated patterns in regular expressions should not match the empty string
   * @see https://sonarsource.github.io/rspec/#/rspec/S5842/javascript
   */
  'sonarjs/empty-string-repetition'?: Linter.RuleEntry<[]>
  /**
   * Encrypting data is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4787/javascript
   * @deprecated
   */
  'sonarjs/encryption'?: Linter.RuleEntry<[]>
  /**
   * Encryption algorithms should be used with secure mode and padding scheme
   * @see https://sonarsource.github.io/rspec/#/rspec/S5542/javascript
   */
  'sonarjs/encryption-secure-mode'?: Linter.RuleEntry<[]>
  /**
   * Trailing commas should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3723/javascript
   * @deprecated
   */
  'sonarjs/enforce-trailing-comma'?: Linter.RuleEntry<SonarjsEnforceTrailingComma>
  /**
   * Replacement strings should reference existing regular expression groups
   * @see https://sonarsource.github.io/rspec/#/rspec/S6328/javascript
   */
  'sonarjs/existing-groups'?: Linter.RuleEntry<[]>
  /**
   * Expressions should not be too complex
   * @see https://sonarsource.github.io/rspec/#/rspec/S1067/javascript
   */
  'sonarjs/expression-complexity'?: Linter.RuleEntry<SonarjsExpressionComplexity>
  /**
   * Track lack of copyright and license headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S1451/javascript
   */
  'sonarjs/file-header'?: Linter.RuleEntry<SonarjsFileHeader>
  /**
   * Default export names and file names should match
   * @see https://sonarsource.github.io/rspec/#/rspec/S3317/javascript
   */
  'sonarjs/file-name-differ-from-class'?: Linter.RuleEntry<[]>
  /**
   * Setting loose POSIX file permissions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2612/javascript
   */
  'sonarjs/file-permissions'?: Linter.RuleEntry<[]>
  /**
   * File uploads should be restricted
   * @see https://sonarsource.github.io/rspec/#/rspec/S2598/javascript
   */
  'sonarjs/file-uploads'?: Linter.RuleEntry<[]>
  /**
   * Track uses of "FIXME" tags
   * @see https://sonarsource.github.io/rspec/#/rspec/S1134/javascript
   */
  'sonarjs/fixme-tag'?: Linter.RuleEntry<[]>
  /**
   * "for...in" loops should filter properties before acting on them
   * @see https://sonarsource.github.io/rspec/#/rspec/S1535/javascript
   */
  'sonarjs/for-in'?: Linter.RuleEntry<[]>
  /**
   * A "for" loop update clause should move the counter in the right direction
   * @see https://sonarsource.github.io/rspec/#/rspec/S2251/javascript
   */
  'sonarjs/for-loop-increment-sign'?: Linter.RuleEntry<[]>
  /**
   * Disabling content security policy frame-ancestors directive is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5732/javascript
   */
  'sonarjs/frame-ancestors'?: Linter.RuleEntry<[]>
  /**
   * Functions should not be defined inside loops
   * @see https://sonarsource.github.io/rspec/#/rspec/S1515/javascript
   */
  'sonarjs/function-inside-loop'?: Linter.RuleEntry<[]>
  /**
   * Function and method names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S100/javascript
   */
  'sonarjs/function-name'?: Linter.RuleEntry<SonarjsFunctionName>
  /**
   * Functions should always return the same type
   * @see https://sonarsource.github.io/rspec/#/rspec/S3800/javascript
   */
  'sonarjs/function-return-type'?: Linter.RuleEntry<[]>
  /**
   * Future reserved words should not be used as identifiers
   * @see https://sonarsource.github.io/rspec/#/rspec/S1527/javascript
   */
  'sonarjs/future-reserved-words'?: Linter.RuleEntry<[]>
  /**
   * Generators should explicitly "yield" a value
   * @see https://sonarsource.github.io/rspec/#/rspec/S3531/javascript
   */
  'sonarjs/generator-without-yield'?: Linter.RuleEntry<[]>
  /**
   * Using weak hashing algorithms is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4790/javascript
   */
  'sonarjs/hashing'?: Linter.RuleEntry<[]>
  /**
   * Statically serving hidden files is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5691/javascript
   */
  'sonarjs/hidden-files'?: Linter.RuleEntry<[]>
  /**
   * "in" should not be used with primitive types
   * @see https://sonarsource.github.io/rspec/#/rspec/S3785/javascript
   */
  'sonarjs/in-operator-type-error'?: Linter.RuleEntry<[]>
  /**
   * Functions should be called consistently with or without "new"
   * @see https://sonarsource.github.io/rspec/#/rspec/S3686/javascript
   */
  'sonarjs/inconsistent-function-call'?: Linter.RuleEntry<[]>
  /**
   * "indexOf" checks should not be for positive numbers
   * @see https://sonarsource.github.io/rspec/#/rspec/S2692/javascript
   */
  'sonarjs/index-of-compare-to-positive-number'?: Linter.RuleEntry<[]>
  /**
   * Creating cookies without the "secure" flag is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2092/javascript
   */
  'sonarjs/insecure-cookie'?: Linter.RuleEntry<[]>
  /**
   * JWT should be signed and verified with strong cipher algorithms
   * @see https://sonarsource.github.io/rspec/#/rspec/S5659/javascript
   */
  'sonarjs/insecure-jwt-token'?: Linter.RuleEntry<[]>
  /**
   * Assertion arguments should be passed in the correct order
   * @see https://sonarsource.github.io/rspec/#/rspec/S3415/javascript
   */
  'sonarjs/inverted-assertion-arguments'?: Linter.RuleEntry<[]>
  /**
   * React components should not render non-boolean condition values
   * @see https://sonarsource.github.io/rspec/#/rspec/S6439/javascript
   */
  'sonarjs/jsx-no-leaked-render'?: Linter.RuleEntry<[]>
  /**
   * Only "while", "do", "for" and "switch" statements should be labelled
   * @see https://sonarsource.github.io/rspec/#/rspec/S1439/javascript
   */
  'sonarjs/label-position'?: Linter.RuleEntry<[]>
  /**
   * Authorizing an opened window to access back to the originating window is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5148/javascript
   */
  'sonarjs/link-with-target-blank'?: Linter.RuleEntry<[]>
  /**
   * Files should not have too many lines of code
   * @see https://sonarsource.github.io/rspec/#/rspec/S104/javascript
   */
  'sonarjs/max-lines'?: Linter.RuleEntry<SonarjsMaxLines>
  /**
   * Functions should not have too many lines of code
   * @see https://sonarsource.github.io/rspec/#/rspec/S138/javascript
   */
  'sonarjs/max-lines-per-function'?: Linter.RuleEntry<SonarjsMaxLinesPerFunction>
  /**
   * "switch" statements should not have too many "case" clauses
   * @see https://sonarsource.github.io/rspec/#/rspec/S1479/javascript
   */
  'sonarjs/max-switch-cases'?: Linter.RuleEntry<SonarjsMaxSwitchCases>
  /**
   * Union types should not have too many elements
   * @see https://sonarsource.github.io/rspec/#/rspec/S4622/javascript
   */
  'sonarjs/max-union-size'?: Linter.RuleEntry<SonarjsMaxUnionSize>
  /**
   * "for" loop increment clauses should modify the loops' counters
   * @see https://sonarsource.github.io/rspec/#/rspec/S1994/javascript
   */
  'sonarjs/misplaced-loop-counter'?: Linter.RuleEntry<[]>
  /**
   * Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply
   * @see https://sonarsource.github.io/rspec/#/rspec/S134/javascript
   */
  'sonarjs/nested-control-flow'?: Linter.RuleEntry<SonarjsNestedControlFlow>
  /**
   * "new" should only be used with functions and classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S2999/javascript
   */
  'sonarjs/new-operator-misuse'?: Linter.RuleEntry<SonarjsNewOperatorMisuse>
  /**
   * All branches in a conditional structure should not have exactly the same implementation
   * @see https://sonarsource.github.io/rspec/#/rspec/S3923/javascript
   */
  'sonarjs/no-all-duplicated-branches'?: Linter.RuleEntry<[]>
  /**
   * "Array.prototype.sort()" and "Array.prototype.toSorted()" should use a compare function
   * @see https://sonarsource.github.io/rspec/#/rspec/S2871/javascript
   */
  'sonarjs/no-alphabetical-sort'?: Linter.RuleEntry<[]>
  /**
   * Disabling Angular built-in sanitization is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6268/javascript
   */
  'sonarjs/no-angular-bypass-sanitization'?: Linter.RuleEntry<[]>
  /**
   * "delete" should not be used on arrays
   * @see https://sonarsource.github.io/rspec/#/rspec/S2870/javascript
   */
  'sonarjs/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Array indexes should be numeric
   * @see https://sonarsource.github.io/rspec/#/rspec/S3579/javascript
   */
  'sonarjs/no-associative-arrays'?: Linter.RuleEntry<[]>
  /**
   * Constructors should not contain asynchronous operations
   * @see https://sonarsource.github.io/rspec/#/rspec/S7059/javascript
   */
  'sonarjs/no-async-constructor'?: Linter.RuleEntry<[]>
  /**
   * Built-in objects should not be overridden
   * @see https://sonarsource.github.io/rspec/#/rspec/S2424/javascript
   */
  'sonarjs/no-built-in-override'?: Linter.RuleEntry<[]>
  /**
   * "switch" statements should not contain non-case labels
   * @see https://sonarsource.github.io/rspec/#/rspec/S1219/javascript
   */
  'sonarjs/no-case-label-in-switch'?: Linter.RuleEntry<[]>
  /**
   * Using clear-text protocols is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5332/javascript
   */
  'sonarjs/no-clear-text-protocols'?: Linter.RuleEntry<[]>
  /**
   * Tests should not execute any code after "done()" is called
   * @see https://sonarsource.github.io/rspec/#/rspec/S6079/javascript
   */
  'sonarjs/no-code-after-done'?: Linter.RuleEntry<[]>
  /**
   * Mergeable "if" statements should be combined
   * @see https://sonarsource.github.io/rspec/#/rspec/S1066/javascript
   */
  'sonarjs/no-collapsible-if'?: Linter.RuleEntry<[]>
  /**
   * Collection size and array length comparisons should make sense
   * @see https://sonarsource.github.io/rspec/#/rspec/S3981/javascript
   */
  'sonarjs/no-collection-size-mischeck'?: Linter.RuleEntry<[]>
  /**
   * Sections of code should not be commented out
   * @see https://sonarsource.github.io/rspec/#/rspec/S125/javascript
   */
  'sonarjs/no-commented-code'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not contain control characters
   * @see https://sonarsource.github.io/rspec/#/rspec/S6324/javascript
   */
  'sonarjs/no-control-regex'?: Linter.RuleEntry<[]>
  /**
   * Unused assignments should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1854/javascript
   */
  'sonarjs/no-dead-store'?: Linter.RuleEntry<[]>
  /**
   * "delete" should be used only with object properties
   * @see https://sonarsource.github.io/rspec/#/rspec/S3001/javascript
   */
  'sonarjs/no-delete-var'?: Linter.RuleEntry<[]>
  /**
   * Union and intersection types should not include duplicated constituents
   * @see https://sonarsource.github.io/rspec/#/rspec/S4621/javascript
   */
  'sonarjs/no-duplicate-in-composite'?: Linter.RuleEntry<[]>
  /**
   * String literals should not be duplicated
   * @see https://sonarsource.github.io/rspec/#/rspec/S1192/javascript
   */
  'sonarjs/no-duplicate-string'?: Linter.RuleEntry<SonarjsNoDuplicateString>
  /**
   * Two branches in a conditional structure should not have exactly the same implementation
   * @see https://sonarsource.github.io/rspec/#/rspec/S1871/javascript
   */
  'sonarjs/no-duplicated-branches'?: Linter.RuleEntry<[]>
  /**
   * Collection elements should not be replaced unconditionally
   * @see https://sonarsource.github.io/rspec/#/rspec/S4143/javascript
   */
  'sonarjs/no-element-overwrite'?: Linter.RuleEntry<[]>
  /**
   * Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string
   * @see https://sonarsource.github.io/rspec/#/rspec/S6019/javascript
   */
  'sonarjs/no-empty-after-reluctant'?: Linter.RuleEntry<[]>
  /**
   * Alternation in regular expressions should not contain empty alternatives
   * @see https://sonarsource.github.io/rspec/#/rspec/S6323/javascript
   */
  'sonarjs/no-empty-alternatives'?: Linter.RuleEntry<[]>
  /**
   * Empty character classes should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2639/javascript
   */
  'sonarjs/no-empty-character-class'?: Linter.RuleEntry<[]>
  /**
   * Empty collections should not be accessed or iterated
   * @see https://sonarsource.github.io/rspec/#/rspec/S4158/javascript
   */
  'sonarjs/no-empty-collection'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not contain empty groups
   * @see https://sonarsource.github.io/rspec/#/rspec/S6331/javascript
   */
  'sonarjs/no-empty-group'?: Linter.RuleEntry<[]>
  /**
   * Test files should contain at least one test case
   * @see https://sonarsource.github.io/rspec/#/rspec/S2187/javascript
   */
  'sonarjs/no-empty-test-file'?: Linter.RuleEntry<[]>
  /**
   * Equality operators should not be used in "for" loop termination conditions
   * @see https://sonarsource.github.io/rspec/#/rspec/S888/javascript
   */
  'sonarjs/no-equals-in-for-termination'?: Linter.RuleEntry<[]>
  /**
   * Exclusive tests should not be committed to version control
   * @see https://sonarsource.github.io/rspec/#/rspec/S6426/javascript
   */
  'sonarjs/no-exclusive-tests'?: Linter.RuleEntry<[]>
  /**
   * Function calls should not pass extra arguments
   * @see https://sonarsource.github.io/rspec/#/rspec/S930/javascript
   */
  'sonarjs/no-extra-arguments'?: Linter.RuleEntry<[]>
  /**
   * Switch cases should end with an unconditional "break" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S128/javascript
   */
  'sonarjs/no-fallthrough'?: Linter.RuleEntry<[]>
  /**
   * "for in" should not be used with iterables
   * @see https://sonarsource.github.io/rspec/#/rspec/S4139/javascript
   */
  'sonarjs/no-for-in-iterable'?: Linter.RuleEntry<[]>
  /**
   * Function declarations should not be made within blocks
   * @see https://sonarsource.github.io/rspec/#/rspec/S1530/javascript
   */
  'sonarjs/no-function-declaration-in-block'?: Linter.RuleEntry<[]>
  /**
   * The global "this" object should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2990/javascript
   */
  'sonarjs/no-global-this'?: Linter.RuleEntry<[]>
  /**
   * Special identifiers should not be bound or assigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S2137/javascript
   */
  'sonarjs/no-globals-shadowing'?: Linter.RuleEntry<[]>
  /**
   * Boolean expressions should not be gratuitous
   * @see https://sonarsource.github.io/rspec/#/rspec/S2589/javascript
   */
  'sonarjs/no-gratuitous-expressions'?: Linter.RuleEntry<[]>
  /**
   * Using hardcoded IP addresses is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S1313/javascript
   */
  'sonarjs/no-hardcoded-ip'?: Linter.RuleEntry<[]>
  /**
   * Hard-coded passwords are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2068/javascript
   */
  'sonarjs/no-hardcoded-passwords'?: Linter.RuleEntry<SonarjsNoHardcodedPasswords>
  /**
   * Hard-coded secrets are security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6418/javascript
   */
  'sonarjs/no-hardcoded-secrets'?: Linter.RuleEntry<SonarjsNoHardcodedSecrets>
  /**
   * React's useState hook should not be used directly in the render function or body of a component
   * @see https://sonarsource.github.io/rspec/#/rspec/S6442/javascript
   */
  'sonarjs/no-hook-setter-in-body'?: Linter.RuleEntry<[]>
  /**
   * "if/else if" chains and "switch" cases should not have the same condition
   * @see https://sonarsource.github.io/rspec/#/rspec/S1862/javascript
   */
  'sonarjs/no-identical-conditions'?: Linter.RuleEntry<[]>
  /**
   * Identical expressions should not be used on both sides of a binary operator
   * @see https://sonarsource.github.io/rspec/#/rspec/S1764/javascript
   */
  'sonarjs/no-identical-expressions'?: Linter.RuleEntry<[]>
  /**
   * Functions should not have identical implementations
   * @see https://sonarsource.github.io/rspec/#/rspec/S4144/javascript
   */
  'sonarjs/no-identical-functions'?: Linter.RuleEntry<SonarjsNoIdenticalFunctions>
  /**
   * Exceptions should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S2486/javascript
   */
  'sonarjs/no-ignored-exceptions'?: Linter.RuleEntry<[]>
  /**
   * Return values from functions without side effects should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S2201/javascript
   */
  'sonarjs/no-ignored-return'?: Linter.RuleEntry<[]>
  /**
   * Dependencies should be explicit
   * @see https://sonarsource.github.io/rspec/#/rspec/S4328/javascript
   */
  'sonarjs/no-implicit-dependencies'?: Linter.RuleEntry<SonarjsNoImplicitDependencies>
  /**
   * Variables should be declared explicitly
   * @see https://sonarsource.github.io/rspec/#/rspec/S2703/javascript
   */
  'sonarjs/no-implicit-global'?: Linter.RuleEntry<[]>
  /**
   * "in" should not be used on arrays
   * @see https://sonarsource.github.io/rspec/#/rspec/S4619/javascript
   */
  'sonarjs/no-in-misuse'?: Linter.RuleEntry<[]>
  /**
   * Assertions should be complete
   * @see https://sonarsource.github.io/rspec/#/rspec/S2970/javascript
   */
  'sonarjs/no-incomplete-assertions'?: Linter.RuleEntry<[]>
  /**
   * Functions should use "return" consistently
   * @see https://sonarsource.github.io/rspec/#/rspec/S3801/javascript
   */
  'sonarjs/no-inconsistent-returns'?: Linter.RuleEntry<[]>
  /**
   * Strings and non-strings should not be added
   * @see https://sonarsource.github.io/rspec/#/rspec/S3402/javascript
   */
  'sonarjs/no-incorrect-string-concat'?: Linter.RuleEntry<[]>
  /**
   * Users should not use internal APIs
   * @see https://sonarsource.github.io/rspec/#/rspec/S6627/javascript
   */
  'sonarjs/no-internal-api-use'?: Linter.RuleEntry<[]>
  /**
   * Using intrusive permissions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5604/javascript
   */
  'sonarjs/no-intrusive-permissions'?: Linter.RuleEntry<SonarjsNoIntrusivePermissions>
  /**
   * Regular expressions should be syntactically valid
   * @see https://sonarsource.github.io/rspec/#/rspec/S5856/javascript
   */
  'sonarjs/no-invalid-regexp'?: Linter.RuleEntry<[]>
  /**
   * Function returns should not be invariant
   * @see https://sonarsource.github.io/rspec/#/rspec/S3516/javascript
   */
  'sonarjs/no-invariant-returns'?: Linter.RuleEntry<[]>
  /**
   * Boolean checks should not be inverted
   * @see https://sonarsource.github.io/rspec/#/rspec/S1940/javascript
   */
  'sonarjs/no-inverted-boolean-check'?: Linter.RuleEntry<[]>
  /**
   * Forwarding client IP address is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5759/javascript
   */
  'sonarjs/no-ip-forward'?: Linter.RuleEntry<[]>
  /**
   * Labels should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1119/javascript
   */
  'sonarjs/no-labels'?: Linter.RuleEntry<[]>
  /**
   * Literals should not be used as functions
   * @see https://sonarsource.github.io/rspec/#/rspec/S6958/javascript
   */
  'sonarjs/no-literal-call'?: Linter.RuleEntry<[]>
  /**
   * Allowing browsers to sniff MIME types is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5734/javascript
   */
  'sonarjs/no-mime-sniff'?: Linter.RuleEntry<[]>
  /**
   * Array-mutating methods should not be used misleadingly
   * @see https://sonarsource.github.io/rspec/#/rspec/S4043/javascript
   */
  'sonarjs/no-misleading-array-reverse'?: Linter.RuleEntry<[]>
  /**
   * Unicode Grapheme Clusters should be avoided inside regex character classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S5868/javascript
   */
  'sonarjs/no-misleading-character-class'?: Linter.RuleEntry<[]>
  /**
   * Allowing mixed-content is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5730/javascript
   */
  'sonarjs/no-mixed-content'?: Linter.RuleEntry<[]>
  /**
   * Assignments should not be made from within sub-expressions
   * @see https://sonarsource.github.io/rspec/#/rspec/S1121/javascript
   */
  'sonarjs/no-nested-assignment'?: Linter.RuleEntry<[]>
  /**
   * Ternary operators should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S3358/javascript
   */
  'sonarjs/no-nested-conditional'?: Linter.RuleEntry<[]>
  /**
   * Functions should not be nested too deeply
   * @see https://sonarsource.github.io/rspec/#/rspec/S2004/javascript
   */
  'sonarjs/no-nested-functions'?: Linter.RuleEntry<SonarjsNoNestedFunctions>
  /**
   * Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression
   * @see https://sonarsource.github.io/rspec/#/rspec/S881/javascript
   */
  'sonarjs/no-nested-incdec'?: Linter.RuleEntry<[]>
  /**
   * "switch" statements should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S1821/javascript
   */
  'sonarjs/no-nested-switch'?: Linter.RuleEntry<[]>
  /**
   * Template literals should not be nested
   * @see https://sonarsource.github.io/rspec/#/rspec/S4624/javascript
   */
  'sonarjs/no-nested-template-literals'?: Linter.RuleEntry<[]>
  /**
   * Searching OS commands in PATH is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4036/javascript
   */
  'sonarjs/no-os-command-from-path'?: Linter.RuleEntry<[]>
  /**
   * Initial values of parameters, caught exceptions, and loop variables should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S1226/javascript
   */
  'sonarjs/no-parameter-reassignment'?: Linter.RuleEntry<[]>
  /**
   * Wrapper objects should not be used for primitive types
   * @see https://sonarsource.github.io/rspec/#/rspec/S1533/javascript
   */
  'sonarjs/no-primitive-wrappers'?: Linter.RuleEntry<[]>
  /**
   * Assignments should not be redundant
   * @see https://sonarsource.github.io/rspec/#/rspec/S4165/javascript
   */
  'sonarjs/no-redundant-assignments'?: Linter.RuleEntry<[]>
  /**
   * Boolean literals should not be used in comparisons
   * @see https://sonarsource.github.io/rspec/#/rspec/S1125/javascript
   */
  'sonarjs/no-redundant-boolean'?: Linter.RuleEntry<[]>
  /**
   * Jump statements should not be redundant
   * @see https://sonarsource.github.io/rspec/#/rspec/S3626/javascript
   */
  'sonarjs/no-redundant-jump'?: Linter.RuleEntry<[]>
  /**
   * Optional property declarations should not use both '?' and 'undefined' syntax
   * @see https://sonarsource.github.io/rspec/#/rspec/S4782/javascript
   */
  'sonarjs/no-redundant-optional'?: Linter.RuleEntry<[]>
  /**
   * Redundant pairs of parentheses should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1110/javascript
   * @deprecated
   */
  'sonarjs/no-redundant-parentheses'?: Linter.RuleEntry<[]>
  /**
   * Variables should be defined before being used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3827/javascript
   */
  'sonarjs/no-reference-error'?: Linter.RuleEntry<[]>
  /**
   * Disabling strict HTTP no-referrer policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5736/javascript
   */
  'sonarjs/no-referrer-policy'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not contain multiple spaces
   * @see https://sonarsource.github.io/rspec/#/rspec/S6326/javascript
   */
  'sonarjs/no-regex-spaces'?: Linter.RuleEntry<[]>
  /**
   * "import" should be used to include external code
   * @see https://sonarsource.github.io/rspec/#/rspec/S3533/javascript
   */
  'sonarjs/no-require-or-define'?: Linter.RuleEntry<[]>
  /**
   * Primitive return types should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4324/javascript
   */
  'sonarjs/no-return-type-any'?: Linter.RuleEntry<[]>
  /**
   * Assertions should not be given twice the same argument
   * @see https://sonarsource.github.io/rspec/#/rspec/S5863/javascript
   */
  'sonarjs/no-same-argument-assert'?: Linter.RuleEntry<[]>
  /**
   * Conditionals should start on new lines
   * @see https://sonarsource.github.io/rspec/#/rspec/S3972/javascript
   */
  'sonarjs/no-same-line-conditional'?: Linter.RuleEntry<[]>
  /**
   * Methods should not contain selector parameters
   * @see https://sonarsource.github.io/rspec/#/rspec/S2301/javascript
   */
  'sonarjs/no-selector-parameter'?: Linter.RuleEntry<[]>
  /**
   * Tests should not be skipped without providing a reason
   * @see https://sonarsource.github.io/rspec/#/rspec/S1607/javascript
   */
  'sonarjs/no-skipped-tests'?: Linter.RuleEntry<[]>
  /**
   * "if" statements should be preferred over "switch" when simpler
   * @see https://sonarsource.github.io/rspec/#/rspec/S1301/javascript
   */
  'sonarjs/no-small-switch'?: Linter.RuleEntry<[]>
  /**
   * Track uses of "NOSONAR" comments
   * @see https://sonarsource.github.io/rspec/#/rspec/S1291/javascript
   */
  'sonarjs/no-sonar-comments'?: Linter.RuleEntry<[]>
  /**
   * Tabulation characters should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S105/javascript
   * @deprecated
   */
  'sonarjs/no-tab'?: Linter.RuleEntry<[]>
  /**
   * HTML "<table>" should not be used for layout purposes
   * @see https://sonarsource.github.io/rspec/#/rspec/S5257/javascript
   */
  'sonarjs/no-table-as-layout'?: Linter.RuleEntry<[]>
  /**
   * Promise rejections should not be caught by "try" blocks
   * @see https://sonarsource.github.io/rspec/#/rspec/S4822/javascript
   */
  'sonarjs/no-try-promise'?: Linter.RuleEntry<[]>
  /**
   * "undefined" should not be passed as the value of optional parameters
   * @see https://sonarsource.github.io/rspec/#/rspec/S4623/javascript
   */
  'sonarjs/no-undefined-argument'?: Linter.RuleEntry<[]>
  /**
   * "undefined" should not be assigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S2138/javascript
   */
  'sonarjs/no-undefined-assignment'?: Linter.RuleEntry<[]>
  /**
   * Multiline blocks should be enclosed in curly braces
   * @see https://sonarsource.github.io/rspec/#/rspec/S2681/javascript
   */
  'sonarjs/no-unenclosed-multiline-block'?: Linter.RuleEntry<[]>
  /**
   * JSX list components keys should match up between renders
   * @see https://sonarsource.github.io/rspec/#/rspec/S6486/javascript
   */
  'sonarjs/no-uniq-key'?: Linter.RuleEntry<[]>
  /**
   * Expanding archive files without controlling resource consumption is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5042/javascript
   */
  'sonarjs/no-unsafe-unzip'?: Linter.RuleEntry<[]>
  /**
   * Errors should not be created without being thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S3984/javascript
   */
  'sonarjs/no-unthrown-error'?: Linter.RuleEntry<[]>
  /**
   * Collection contents should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4030/javascript
   */
  'sonarjs/no-unused-collection'?: Linter.RuleEntry<[]>
  /**
   * Unused function parameters should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1172/javascript
   */
  'sonarjs/no-unused-function-argument'?: Linter.RuleEntry<[]>
  /**
   * Unused local variables and functions should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1481/javascript
   */
  'sonarjs/no-unused-vars'?: Linter.RuleEntry<[]>
  /**
   * The return value of void functions should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3699/javascript
   */
  'sonarjs/no-use-of-empty-return-value'?: Linter.RuleEntry<[]>
  /**
   * "catch" clauses should do more than rethrow
   * @see https://sonarsource.github.io/rspec/#/rspec/S2737/javascript
   */
  'sonarjs/no-useless-catch'?: Linter.RuleEntry<[]>
  /**
   * Values should not be uselessly incremented
   * @see https://sonarsource.github.io/rspec/#/rspec/S2123/javascript
   */
  'sonarjs/no-useless-increment'?: Linter.RuleEntry<[]>
  /**
   * Type intersections should use meaningful types
   * @see https://sonarsource.github.io/rspec/#/rspec/S4335/javascript
   */
  'sonarjs/no-useless-intersection'?: Linter.RuleEntry<[]>
  /**
   * React state setter function should not be called with its matching state variable
   * @see https://sonarsource.github.io/rspec/#/rspec/S6443/javascript
   */
  'sonarjs/no-useless-react-setstate'?: Linter.RuleEntry<[]>
  /**
   * Variables declared with "var" should be declared before they are used
   * @see https://sonarsource.github.io/rspec/#/rspec/S1526/javascript
   */
  'sonarjs/no-variable-usage-before-declaration'?: Linter.RuleEntry<[]>
  /**
   * Disabling Vue.js built-in escaping is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S6299/javascript
   * @deprecated
   */
  'sonarjs/no-vue-bypass-sanitization'?: Linter.RuleEntry<[]>
  /**
   * Cipher algorithms should be robust
   * @see https://sonarsource.github.io/rspec/#/rspec/S5547/javascript
   */
  'sonarjs/no-weak-cipher'?: Linter.RuleEntry<[]>
  /**
   * Cryptographic keys should be robust
   * @see https://sonarsource.github.io/rspec/#/rspec/S4426/javascript
   */
  'sonarjs/no-weak-keys'?: Linter.RuleEntry<[]>
  /**
   * Wildcard imports should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2208/javascript
   */
  'sonarjs/no-wildcard-import'?: Linter.RuleEntry<[]>
  /**
   * Non-existent operators '=+', '=-' and '=!' should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2757/javascript
   */
  'sonarjs/non-existent-operator'?: Linter.RuleEntry<[]>
  /**
   * Arithmetic operators should only have numbers as operands
   * @see https://sonarsource.github.io/rspec/#/rspec/S3760/javascript
   */
  'sonarjs/non-number-in-arithmetic-expression'?: Linter.RuleEntry<[]>
  /**
   * Properties of variables with "null" or "undefined" values should not be accessed
   * @see https://sonarsource.github.io/rspec/#/rspec/S2259/javascript
   */
  'sonarjs/null-dereference'?: Linter.RuleEntry<[]>
  /**
   * "<object>" tags should provide an alternative content
   * @see https://sonarsource.github.io/rspec/#/rspec/S5264/javascript
   */
  'sonarjs/object-alt-content'?: Linter.RuleEntry<[]>
  /**
   * Arithmetic operations should not result in "NaN"
   * @see https://sonarsource.github.io/rspec/#/rspec/S3757/javascript
   */
  'sonarjs/operation-returning-nan'?: Linter.RuleEntry<[]>
  /**
   * Using shell interpreter when executing OS commands is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4721/javascript
   */
  'sonarjs/os-command'?: Linter.RuleEntry<[]>
  /**
   * Origins should be verified during cross-origin communications
   * @see https://sonarsource.github.io/rspec/#/rspec/S2819/javascript
   */
  'sonarjs/post-message'?: Linter.RuleEntry<[]>
  /**
   * "default" clauses should be last
   * @see https://sonarsource.github.io/rspec/#/rspec/S4524/javascript
   */
  'sonarjs/prefer-default-last'?: Linter.RuleEntry<[]>
  /**
   * Local variables should not be declared and then immediately returned or thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S1488/javascript
   */
  'sonarjs/prefer-immediate-return'?: Linter.RuleEntry<[]>
  /**
   * Object literal syntax should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2428/javascript
   */
  'sonarjs/prefer-object-literal'?: Linter.RuleEntry<[]>
  /**
   * Shorthand promises should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4634/javascript
   */
  'sonarjs/prefer-promise-shorthand'?: Linter.RuleEntry<[]>
  /**
   * React props should be read-only
   * @see https://sonarsource.github.io/rspec/#/rspec/S6759/javascript
   */
  'sonarjs/prefer-read-only-props'?: Linter.RuleEntry<[]>
  /**
   * "RegExp.exec()" should be preferred over "String.match()"
   * @see https://sonarsource.github.io/rspec/#/rspec/S6594/javascript
   */
  'sonarjs/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Return of boolean expressions should not be wrapped into an "if-then-else" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S1126/javascript
   */
  'sonarjs/prefer-single-boolean-return'?: Linter.RuleEntry<[]>
  /**
   * Type predicates should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4322/javascript
   */
  'sonarjs/prefer-type-guard'?: Linter.RuleEntry<[]>
  /**
   * A "while" loop should be used instead of a "for" loop
   * @see https://sonarsource.github.io/rspec/#/rspec/S1264/javascript
   */
  'sonarjs/prefer-while'?: Linter.RuleEntry<[]>
  /**
   * Using command line arguments is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4823/javascript
   * @deprecated
   */
  'sonarjs/process-argv'?: Linter.RuleEntry<[]>
  /**
   * Delivering code in production with debug features activated is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4507/javascript
   */
  'sonarjs/production-debug'?: Linter.RuleEntry<[]>
  /**
   * Using pseudorandom number generators (PRNGs) is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2245/javascript
   */
  'sonarjs/pseudo-random'?: Linter.RuleEntry<[]>
  /**
   * Public "static" fields should be read-only
   * @see https://sonarsource.github.io/rspec/#/rspec/S1444/javascript
   */
  'sonarjs/public-static-readonly'?: Linter.RuleEntry<[]>
  /**
   * Using publicly writable directories is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5443/javascript
   */
  'sonarjs/publicly-writable-directories'?: Linter.RuleEntry<[]>
  /**
   * "Array.reduce()" calls should include an initial value
   * @see https://sonarsource.github.io/rspec/#/rspec/S6959/javascript
   */
  'sonarjs/reduce-initial-value'?: Linter.RuleEntry<[]>
  /**
   * Redundant type aliases should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S6564/javascript
   */
  'sonarjs/redundant-type-aliases'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions should not be too complicated
   * @see https://sonarsource.github.io/rspec/#/rspec/S5843/javascript
   */
  'sonarjs/regex-complexity'?: Linter.RuleEntry<SonarjsRegexComplexity>
  /**
   * Using regular expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4784/javascript
   * @deprecated
   */
  'sonarjs/regular-expr'?: Linter.RuleEntry<[]>
  /**
   * A new session should be created during user authentication
   * @see https://sonarsource.github.io/rspec/#/rspec/S5876/javascript
   */
  'sonarjs/session-regeneration'?: Linter.RuleEntry<[]>
  /**
   * Shorthand object properties should be grouped at the beginning or end of an object declaration
   * @see https://sonarsource.github.io/rspec/#/rspec/S3499/javascript
   */
  'sonarjs/shorthand-property-grouping'?: Linter.RuleEntry<[]>
  /**
   * Character classes in regular expressions should not contain only one character
   * @see https://sonarsource.github.io/rspec/#/rspec/S6397/javascript
   */
  'sonarjs/single-char-in-character-classes'?: Linter.RuleEntry<[]>
  /**
   * Single-character alternations in regular expressions should be replaced with character classes
   * @see https://sonarsource.github.io/rspec/#/rspec/S6035/javascript
   */
  'sonarjs/single-character-alternation'?: Linter.RuleEntry<[]>
  /**
   * Using slow regular expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5852/javascript
   */
  'sonarjs/slow-regex'?: Linter.RuleEntry<[]>
  /**
   * Using Sockets is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4818/javascript
   * @deprecated
   */
  'sonarjs/sockets'?: Linter.RuleEntry<[]>
  /**
   * Formatting SQL queries is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S2077/javascript
   */
  'sonarjs/sql-queries'?: Linter.RuleEntry<[]>
  /**
   * Tests should be stable
   * @see https://sonarsource.github.io/rspec/#/rspec/S5973/javascript
   */
  'sonarjs/stable-tests'?: Linter.RuleEntry<[]>
  /**
   * Reading the Standard Input is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4829/javascript
   * @deprecated
   */
  'sonarjs/standard-input'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions with the global flag should be used with caution
   * @see https://sonarsource.github.io/rspec/#/rspec/S6351/javascript
   */
  'sonarjs/stateful-regex'?: Linter.RuleEntry<[]>
  /**
   * Disabling Strict-Transport-Security policy is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5739/javascript
   */
  'sonarjs/strict-transport-security'?: Linter.RuleEntry<[]>
  /**
   * Comparison operators should not be used with strings
   * @see https://sonarsource.github.io/rspec/#/rspec/S3003/javascript
   */
  'sonarjs/strings-comparison'?: Linter.RuleEntry<[]>
  /**
   * "super()" should be invoked appropriately
   * @see https://sonarsource.github.io/rspec/#/rspec/S3854/javascript
   */
  'sonarjs/super-invocation'?: Linter.RuleEntry<[]>
  /**
   * Tables should have headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S5256/javascript
   */
  'sonarjs/table-header'?: Linter.RuleEntry<[]>
  /**
   * Table cells should reference their headers
   * @see https://sonarsource.github.io/rspec/#/rspec/S5260/javascript
   */
  'sonarjs/table-header-reference'?: Linter.RuleEntry<[]>
  /**
   * Tests should check which exception is thrown
   * @see https://sonarsource.github.io/rspec/#/rspec/S5958/javascript
   */
  'sonarjs/test-check-exception'?: Linter.RuleEntry<[]>
  /**
   * Track uses of "TODO" tags
   * @see https://sonarsource.github.io/rspec/#/rspec/S1135/javascript
   */
  'sonarjs/todo-tag'?: Linter.RuleEntry<[]>
  /**
   * Loops should not contain more than a single "break" or "continue" statement
   * @see https://sonarsource.github.io/rspec/#/rspec/S135/javascript
   */
  'sonarjs/too-many-break-or-continue-in-loop'?: Linter.RuleEntry<[]>
  /**
   * Regular expressions using Unicode character classes or property escapes should enable the unicode flag
   * @see https://sonarsource.github.io/rspec/#/rspec/S5867/javascript
   */
  'sonarjs/unicode-aware-regex'?: Linter.RuleEntry<[]>
  /**
   * Unnecessary imports should be removed
   * @see https://sonarsource.github.io/rspec/#/rspec/S1128/javascript
   */
  'sonarjs/unused-import'?: Linter.RuleEntry<[]>
  /**
   * Names of regular expressions named groups should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S5860/javascript
   */
  'sonarjs/unused-named-groups'?: Linter.RuleEntry<[]>
  /**
   * Server certificates should be verified during SSL/TLS connections
   * @see https://sonarsource.github.io/rspec/#/rspec/S4830/javascript
   */
  'sonarjs/unverified-certificate'?: Linter.RuleEntry<[]>
  /**
   * Server hostnames should be verified during SSL/TLS connections
   * @see https://sonarsource.github.io/rspec/#/rspec/S5527/javascript
   */
  'sonarjs/unverified-hostname'?: Linter.RuleEntry<[]>
  /**
   * "const" variables should not be reassigned
   * @see https://sonarsource.github.io/rspec/#/rspec/S3500/javascript
   */
  'sonarjs/updated-const-var'?: Linter.RuleEntry<[]>
  /**
   * Loop counters should not be assigned within the loop body
   * @see https://sonarsource.github.io/rspec/#/rspec/S2310/javascript
   */
  'sonarjs/updated-loop-counter'?: Linter.RuleEntry<[]>
  /**
   * Type aliases should be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4323/javascript
   */
  'sonarjs/use-type-alias'?: Linter.RuleEntry<[]>
  /**
   * Results of operations on strings should not be ignored
   * @see https://sonarsource.github.io/rspec/#/rspec/S1154/javascript
   * @deprecated
   */
  'sonarjs/useless-string-operation'?: Linter.RuleEntry<[]>
  /**
   * Values not convertible to numbers should not be used in numeric comparisons
   * @see https://sonarsource.github.io/rspec/#/rspec/S3758/javascript
   */
  'sonarjs/values-not-convertible-to-numbers'?: Linter.RuleEntry<[]>
  /**
   * Variable, property and parameter names should comply with a naming convention
   * @see https://sonarsource.github.io/rspec/#/rspec/S117/javascript
   */
  'sonarjs/variable-name'?: Linter.RuleEntry<SonarjsVariableName>
  /**
   * "void" should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S3735/javascript
   */
  'sonarjs/void-use'?: Linter.RuleEntry<[]>
  /**
   * Weak SSL/TLS protocols should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S4423/javascript
   */
  'sonarjs/weak-ssl'?: Linter.RuleEntry<[]>
  /**
   * Web SQL databases should not be used
   * @see https://sonarsource.github.io/rspec/#/rspec/S2817/javascript
   * @deprecated
   */
  'sonarjs/web-sql-database'?: Linter.RuleEntry<[]>
  /**
   * Disclosing fingerprints from web application technologies is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S5689/javascript
   */
  'sonarjs/x-powered-by'?: Linter.RuleEntry<[]>
  /**
   * XML parsers should not be vulnerable to XXE attacks
   * @see https://sonarsource.github.io/rspec/#/rspec/S2755/javascript
   */
  'sonarjs/xml-parser-xxe'?: Linter.RuleEntry<[]>
  /**
   * Executing XPath expressions is security-sensitive
   * @see https://sonarsource.github.io/rspec/#/rspec/S4817/javascript
   * @deprecated
   */
  'sonarjs/xpath'?: Linter.RuleEntry<[]>
  /**
   * Enforce sorted `import` declarations within modules
   * @see https://eslint.org/docs/latest/rules/sort-imports
   */
  'sort-imports'?: Linter.RuleEntry<SortImports>
  /**
   * Require object keys to be sorted
   * @see https://eslint.org/docs/latest/rules/sort-keys
   */
  'sort-keys'?: Linter.RuleEntry<SortKeys>
  /**
   * Require variables within the same declaration block to be sorted
   * @see https://eslint.org/docs/latest/rules/sort-vars
   */
  'sort-vars'?: Linter.RuleEntry<SortVars>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.org/docs/latest/rules/space-before-blocks
   * @deprecated
   */
  'space-before-blocks'?: Linter.RuleEntry<SpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before `function` definition opening parenthesis
   * @see https://eslint.org/docs/latest/rules/space-before-function-paren
   * @deprecated
   */
  'space-before-function-paren'?: Linter.RuleEntry<SpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.org/docs/latest/rules/space-in-parens
   * @deprecated
   */
  'space-in-parens'?: Linter.RuleEntry<SpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.org/docs/latest/rules/space-infix-ops
   * @deprecated
   */
  'space-infix-ops'?: Linter.RuleEntry<SpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.org/docs/latest/rules/space-unary-ops
   * @deprecated
   */
  'space-unary-ops'?: Linter.RuleEntry<SpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.org/docs/latest/rules/spaced-comment
   * @deprecated
   */
  'spaced-comment'?: Linter.RuleEntry<SpacedComment>
  /**
   * Require or disallow strict mode directives
   * @see https://eslint.org/docs/latest/rules/strict
   */
  'strict'?: Linter.RuleEntry<Strict>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.org/docs/latest/rules/switch-colon-spacing
   * @deprecated
   */
  'switch-colon-spacing'?: Linter.RuleEntry<SwitchColonSpacing>
  /**
   * Require symbol descriptions
   * @see https://eslint.org/docs/latest/rules/symbol-description
   */
  'symbol-description'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.org/docs/latest/rules/template-curly-spacing
   * @deprecated
   */
  'template-curly-spacing'?: Linter.RuleEntry<TemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.org/docs/latest/rules/template-tag-spacing
   * @deprecated
   */
  'template-tag-spacing'?: Linter.RuleEntry<TemplateTagSpacing>
  /**
   * Require or disallow Unicode byte order mark (BOM)
   * @see https://eslint.org/docs/latest/rules/unicode-bom
   */
  'unicode-bom'?: Linter.RuleEntry<UnicodeBom>
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/better-regex.md
   */
  'unicorn/better-regex'?: Linter.RuleEntry<UnicornBetterRegex>
  /**
   * Enforce a specific parameter name in catch clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/catch-error-name.md
   */
  'unicorn/catch-error-name'?: Linter.RuleEntry<UnicornCatchErrorName>
  /**
   * Enforce consistent assertion style with `node:assert`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-assert.md
   */
  'unicorn/consistent-assert'?: Linter.RuleEntry<[]>
  /**
   * Prefer passing `Date` directly to the constructor when cloning.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-date-clone.md
   */
  'unicorn/consistent-date-clone'?: Linter.RuleEntry<[]>
  /**
   * Use destructured variables over properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-destructuring.md
   */
  'unicorn/consistent-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-empty-array-spread.md
   */
  'unicorn/consistent-empty-array-spread'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-existence-index-check.md
   */
  'unicorn/consistent-existence-index-check'?: Linter.RuleEntry<[]>
  /**
   * Move function definitions to the highest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/consistent-function-scoping.md
   */
  'unicorn/consistent-function-scoping'?: Linter.RuleEntry<UnicornConsistentFunctionScoping>
  /**
   * Enforce correct `Error` subclassing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/custom-error-definition.md
   */
  'unicorn/custom-error-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce no spaces between braces.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/empty-brace-spaces.md
   */
  'unicorn/empty-brace-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/error-message.md
   */
  'unicorn/error-message'?: Linter.RuleEntry<[]>
  /**
   * Require escape sequences to use uppercase or lowercase values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/escape-case.md
   */
  'unicorn/escape-case'?: Linter.RuleEntry<UnicornEscapeCase>
  /**
   * Add expiration conditions to TODO comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/expiring-todo-comments.md
   */
  'unicorn/expiring-todo-comments'?: Linter.RuleEntry<UnicornExpiringTodoComments>
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/explicit-length-check.md
   */
  'unicorn/explicit-length-check'?: Linter.RuleEntry<UnicornExplicitLengthCheck>
  /**
   * Enforce a case style for filenames.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/filename-case.md
   */
  'unicorn/filename-case'?: Linter.RuleEntry<UnicornFilenameCase>
  /**
   * Enforce specific import styles per module.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/import-style.md
   */
  'unicorn/import-style'?: Linter.RuleEntry<UnicornImportStyle>
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/new-for-builtins.md
   */
  'unicorn/new-for-builtins'?: Linter.RuleEntry<[]>
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-abusive-eslint-disable.md
   */
  'unicorn/no-abusive-eslint-disable'?: Linter.RuleEntry<[]>
  /**
   * Disallow recursive access to `this` within getters and setters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-accessor-recursion.md
   */
  'unicorn/no-accessor-recursion'?: Linter.RuleEntry<[]>
  /**
   * Disallow anonymous functions and classes as the default export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-anonymous-default-export.md
   */
  'unicorn/no-anonymous-default-export'?: Linter.RuleEntry<[]>
  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-callback-reference.md
   */
  'unicorn/no-array-callback-reference'?: Linter.RuleEntry<[]>
  /**
   * Prefer `for…of` over the `forEach` method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-for-each.md
   */
  'unicorn/no-array-for-each'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `this` argument in array methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-method-this-argument.md
   */
  'unicorn/no-array-method-this-argument'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/prefer-single-call` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/deprecated-rules.md#no-array-push-push
   * @deprecated
   */
  'unicorn/no-array-push-push'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-reduce.md
   */
  'unicorn/no-array-reduce'?: Linter.RuleEntry<UnicornNoArrayReduce>
  /**
   * Prefer `Array#toReversed()` over `Array#reverse()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-reverse.md
   */
  'unicorn/no-array-reverse'?: Linter.RuleEntry<UnicornNoArrayReverse>
  /**
   * Prefer `Array#toSorted()` over `Array#sort()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-array-sort.md
   */
  'unicorn/no-array-sort'?: Linter.RuleEntry<UnicornNoArraySort>
  /**
   * Disallow member access from await expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-await-expression-member.md
   */
  'unicorn/no-await-expression-member'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-await-in-promise-methods.md
   */
  'unicorn/no-await-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-console-spaces.md
   */
  'unicorn/no-console-spaces'?: Linter.RuleEntry<[]>
  /**
   * Do not use `document.cookie` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-document-cookie.md
   */
  'unicorn/no-document-cookie'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-empty-file.md
   */
  'unicorn/no-empty-file'?: Linter.RuleEntry<[]>
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-for-loop.md
   */
  'unicorn/no-for-loop'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-hex-escape.md
   */
  'unicorn/no-hex-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow immediate mutation after variable assignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-immediate-mutation.md
   */
  'unicorn/no-immediate-mutation'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/no-instanceof-builtins` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/deprecated-rules.md#no-instanceof-array
   * @deprecated
   */
  'unicorn/no-instanceof-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow `instanceof` with built-in objects
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-instanceof-builtins.md
   */
  'unicorn/no-instanceof-builtins'?: Linter.RuleEntry<UnicornNoInstanceofBuiltins>
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-invalid-fetch-options.md
   */
  'unicorn/no-invalid-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-invalid-remove-event-listener.md
   */
  'unicorn/no-invalid-remove-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-keyword-prefix.md
   */
  'unicorn/no-keyword-prefix'?: Linter.RuleEntry<UnicornNoKeywordPrefix>
  /**
   * Replaced by `unicorn/no-unnecessary-slice-end` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/deprecated-rules.md#no-length-as-slice-end
   * @deprecated
   */
  'unicorn/no-length-as-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-lonely-if.md
   */
  'unicorn/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-magic-array-flat-depth.md
   */
  'unicorn/no-magic-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow named usage of default import and export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-named-default.md
   */
  'unicorn/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-negated-condition.md
   */
  'unicorn/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated expression in equality check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-negation-in-equality-check.md
   */
  'unicorn/no-negation-in-equality-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-nested-ternary.md
   */
  'unicorn/no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new Array()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-new-array.md
   */
  'unicorn/no-new-array'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-new-buffer.md
   */
  'unicorn/no-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of the `null` literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-null.md
   */
  'unicorn/no-null'?: Linter.RuleEntry<UnicornNoNull>
  /**
   * Disallow the use of objects as default parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-object-as-default-parameter.md
   */
  'unicorn/no-object-as-default-parameter'?: Linter.RuleEntry<[]>
  /**
   * Disallow `process.exit()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-process-exit.md
   */
  'unicorn/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-single-promise-in-promise-methods.md
   */
  'unicorn/no-single-promise-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes that only have static members.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-static-only-class.md
   */
  'unicorn/no-static-only-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow `then` property.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-thenable.md
   */
  'unicorn/no-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning `this` to a variable.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-this-assignment.md
   */
  'unicorn/no-this-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-typeof-undefined.md
   */
  'unicorn/no-typeof-undefined'?: Linter.RuleEntry<UnicornNoTypeofUndefined>
  /**
   * Disallow using `1` as the `depth` argument of `Array#flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-array-flat-depth.md
   */
  'unicorn/no-unnecessary-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#{splice,toSpliced}()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-array-splice-count.md
   */
  'unicorn/no-unnecessary-array-splice-count'?: Linter.RuleEntry<[]>
  /**
   * Disallow awaiting non-promise values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-await.md
   */
  'unicorn/no-unnecessary-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-polyfills.md
   */
  'unicorn/no-unnecessary-polyfills'?: Linter.RuleEntry<UnicornNoUnnecessaryPolyfills>
  /**
   * Disallow using `.length` or `Infinity` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unnecessary-slice-end.md
   */
  'unicorn/no-unnecessary-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable array destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unreadable-array-destructuring.md
   */
  'unicorn/no-unreadable-array-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable IIFEs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unreadable-iife.md
   */
  'unicorn/no-unreadable-iife'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused object properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-unused-properties.md
   */
  'unicorn/no-unused-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless values or fallbacks in `Set`, `Map`, `WeakSet`, or `WeakMap`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-collection-argument.md
   */
  'unicorn/no-useless-collection-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Error.captureStackTrace(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-error-capture-stack-trace.md
   */
  'unicorn/no-useless-error-capture-stack-trace'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fallback when spreading in object literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-fallback-in-spread.md
   */
  'unicorn/no-useless-fallback-in-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless array length check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-length-check.md
   */
  'unicorn/no-useless-length-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-promise-resolve-reject.md
   */
  'unicorn/no-useless-promise-resolve-reject'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-spread.md
   */
  'unicorn/no-useless-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless case in switch statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-switch-case.md
   */
  'unicorn/no-useless-switch-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `undefined`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-useless-undefined.md
   */
  'unicorn/no-useless-undefined'?: Linter.RuleEntry<UnicornNoUselessUndefined>
  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/no-zero-fractions.md
   */
  'unicorn/no-zero-fractions'?: Linter.RuleEntry<[]>
  /**
   * Enforce proper case for numeric literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/number-literal-case.md
   */
  'unicorn/number-literal-case'?: Linter.RuleEntry<UnicornNumberLiteralCase>
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/numeric-separators-style.md
   */
  'unicorn/numeric-separators-style'?: Linter.RuleEntry<UnicornNumericSeparatorsStyle>
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-add-event-listener.md
   */
  'unicorn/prefer-add-event-listener'?: Linter.RuleEntry<UnicornPreferAddEventListener>
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-array-find.md
   */
  'unicorn/prefer-array-find'?: Linter.RuleEntry<UnicornPreferArrayFind>
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-array-flat.md
   */
  'unicorn/prefer-array-flat'?: Linter.RuleEntry<UnicornPreferArrayFlat>
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-array-flat-map.md
   */
  'unicorn/prefer-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-array-index-of.md
   */
  'unicorn/prefer-array-index-of'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-array-some.md
   */
  'unicorn/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-at.md
   */
  'unicorn/prefer-at'?: Linter.RuleEntry<UnicornPreferAt>
  /**
   * Prefer `BigInt` literals over the constructor.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-bigint-literals.md
   */
  'unicorn/prefer-bigint-literals'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-blob-reading-methods.md
   */
  'unicorn/prefer-blob-reading-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer class field declarations over `this` assignments in constructors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-class-fields.md
   */
  'unicorn/prefer-class-fields'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Element#classList.toggle()` to toggle class names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-classlist-toggle.md
   */
  'unicorn/prefer-classlist-toggle'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-code-point.md
   */
  'unicorn/prefer-code-point'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-date-now.md
   */
  'unicorn/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer default parameters over reassignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-default-parameters.md
   */
  'unicorn/prefer-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-dom-node-append.md
   */
  'unicorn/prefer-dom-node-append'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-dom-node-dataset.md
   */
  'unicorn/prefer-dom-node-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-dom-node-remove.md
   */
  'unicorn/prefer-dom-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.textContent` over `.innerText`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-dom-node-text-content.md
   */
  'unicorn/prefer-dom-node-text-content'?: Linter.RuleEntry<[]>
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-event-target.md
   */
  'unicorn/prefer-event-target'?: Linter.RuleEntry<[]>
  /**
   * Prefer `export…from` when re-exporting.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-export-from.md
   */
  'unicorn/prefer-export-from'?: Linter.RuleEntry<UnicornPreferExportFrom>
  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-global-this.md
   */
  'unicorn/prefer-global-this'?: Linter.RuleEntry<[]>
  /**
   * Prefer `import.meta.{dirname,filename}` over legacy techniques for getting file paths.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-import-meta-properties.md
   */
  'unicorn/prefer-import-meta-properties'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-includes.md
   */
  'unicorn/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer reading a JSON file as a buffer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-json-parse-buffer.md
   */
  'unicorn/prefer-json-parse-buffer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-keyboard-event-key.md
   */
  'unicorn/prefer-keyboard-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer using a logical operator over a ternary.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-logical-operator-over-ternary.md
   */
  'unicorn/prefer-logical-operator-over-ternary'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-math-min-max.md
   */
  'unicorn/prefer-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-math-trunc.md
   */
  'unicorn/prefer-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-modern-dom-apis.md
   */
  'unicorn/prefer-modern-dom-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-modern-math-apis.md
   */
  'unicorn/prefer-modern-math-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-module.md
   */
  'unicorn/prefer-module'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-native-coercion-functions.md
   */
  'unicorn/prefer-native-coercion-functions'?: Linter.RuleEntry<[]>
  /**
   * Prefer negative index over `.length - index` when possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-negative-index.md
   */
  'unicorn/prefer-negative-index'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-node-protocol.md
   */
  'unicorn/prefer-node-protocol'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number` static properties over global ones.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-number-properties.md
   */
  'unicorn/prefer-number-properties'?: Linter.RuleEntry<UnicornPreferNumberProperties>
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-object-from-entries.md
   */
  'unicorn/prefer-object-from-entries'?: Linter.RuleEntry<UnicornPreferObjectFromEntries>
  /**
   * Prefer omitting the `catch` binding parameter.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-optional-catch-binding.md
   */
  'unicorn/prefer-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-prototype-methods.md
   */
  'unicorn/prefer-prototype-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-query-selector.md
   */
  'unicorn/prefer-query-selector'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-reflect-apply.md
   */
  'unicorn/prefer-reflect-apply'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-regexp-test.md
   */
  'unicorn/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Response.json()` over `new Response(JSON.stringify())`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-response-static-json.md
   */
  'unicorn/prefer-response-static-json'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-set-has.md
   */
  'unicorn/prefer-set-has'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-set-size.md
   */
  'unicorn/prefer-set-size'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple `Array#push()`, `Element#classList.{add,remove}()`, and `importScripts()` into one call.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-single-call.md
   */
  'unicorn/prefer-single-call'?: Linter.RuleEntry<UnicornPreferSingleCall>
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-spread.md
   */
  'unicorn/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-raw.md
   */
  'unicorn/prefer-string-raw'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-replace-all.md
   */
  'unicorn/prefer-string-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-slice.md
   */
  'unicorn/prefer-string-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-starts-ends-with.md
   */
  'unicorn/prefer-string-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-string-trim-start-end.md
   */
  'unicorn/prefer-string-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-structured-clone.md
   */
  'unicorn/prefer-structured-clone'?: Linter.RuleEntry<UnicornPreferStructuredClone>
  /**
   * Prefer `switch` over multiple `else-if`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-switch.md
   */
  'unicorn/prefer-switch'?: Linter.RuleEntry<UnicornPreferSwitch>
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-ternary.md
   */
  'unicorn/prefer-ternary'?: Linter.RuleEntry<UnicornPreferTernary>
  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-top-level-await.md
   */
  'unicorn/prefer-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prefer-type-error.md
   */
  'unicorn/prefer-type-error'?: Linter.RuleEntry<[]>
  /**
   * Prevent abbreviations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/prevent-abbreviations.md
   */
  'unicorn/prevent-abbreviations'?: Linter.RuleEntry<UnicornPreventAbbreviations>
  /**
   * Enforce consistent relative URL style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/relative-url-style.md
   */
  'unicorn/relative-url-style'?: Linter.RuleEntry<UnicornRelativeUrlStyle>
  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-array-join-separator.md
   */
  'unicorn/require-array-join-separator'?: Linter.RuleEntry<[]>
  /**
   * Require non-empty module attributes for imports and exports
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-module-attributes.md
   */
  'unicorn/require-module-attributes'?: Linter.RuleEntry<[]>
  /**
   * Require non-empty specifier list in import and export statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-module-specifiers.md
   */
  'unicorn/require-module-specifiers'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-number-to-fixed-digits-argument.md
   */
  'unicorn/require-number-to-fixed-digits-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/require-post-message-target-origin.md
   */
  'unicorn/require-post-message-target-origin'?: Linter.RuleEntry<[]>
  /**
   * Enforce better string content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/string-content.md
   */
  'unicorn/string-content'?: Linter.RuleEntry<UnicornStringContent>
  /**
   * Enforce consistent brace style for `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/switch-case-braces.md
   */
  'unicorn/switch-case-braces'?: Linter.RuleEntry<UnicornSwitchCaseBraces>
  /**
   * Fix whitespace-insensitive template indentation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/template-indent.md
   */
  'unicorn/template-indent'?: Linter.RuleEntry<UnicornTemplateIndent>
  /**
   * Enforce consistent case for text encoding identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/text-encoding-identifier-case.md
   */
  'unicorn/text-encoding-identifier-case'?: Linter.RuleEntry<UnicornTextEncodingIdentifierCase>
  /**
   * Require `new` when creating an error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v62.0.0/docs/rules/throw-new-error.md
   */
  'unicorn/throw-new-error'?: Linter.RuleEntry<[]>
  /**
   * Require calls to `isNaN()` when checking for `NaN`
   * @see https://eslint.org/docs/latest/rules/use-isnan
   */
  'use-isnan'?: Linter.RuleEntry<UseIsnan>
  /**
   * Enforce comparing `typeof` expressions against valid strings
   * @see https://eslint.org/docs/latest/rules/valid-typeof
   */
  'valid-typeof'?: Linter.RuleEntry<ValidTypeof>
  /**
   * Require `var` declarations be placed at the top of their containing scope
   * @see https://eslint.org/docs/latest/rules/vars-on-top
   */
  'vars-on-top'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.org/docs/latest/rules/wrap-iife
   * @deprecated
   */
  'wrap-iife'?: Linter.RuleEntry<WrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.org/docs/latest/rules/wrap-regex
   * @deprecated
   */
  'wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.org/docs/latest/rules/yield-star-spacing
   * @deprecated
   */
  'yield-star-spacing'?: Linter.RuleEntry<YieldStarSpacing>
  /**
   * Require or disallow "Yoda" conditions
   * @see https://eslint.org/docs/latest/rules/yoda
   */
  'yoda'?: Linter.RuleEntry<Yoda>
}

/* ======= Declarations ======= */
// ----- @stylistic/array-bracket-newline -----
type StylisticArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- @stylistic/array-bracket-spacing -----
type StylisticArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- @stylistic/array-element-newline -----
type StylisticArrayElementNewline = []|[(_StylisticArrayElementNewlineBasicConfig | {
  ArrayExpression?: _StylisticArrayElementNewlineBasicConfig
  ArrayPattern?: _StylisticArrayElementNewlineBasicConfig
})]
type _StylisticArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})
// ----- @stylistic/arrow-parens -----
type StylisticArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- @stylistic/arrow-spacing -----
type StylisticArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/block-spacing -----
type StylisticBlockSpacing = []|[("always" | "never")]
// ----- @stylistic/brace-style -----
type StylisticBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- @stylistic/comma-dangle -----
type StylisticCommaDangle = []|[(_StylisticCommaDangleValue | {
  arrays?: _StylisticCommaDangleValueWithIgnore
  objects?: _StylisticCommaDangleValueWithIgnore
  imports?: _StylisticCommaDangleValueWithIgnore
  exports?: _StylisticCommaDangleValueWithIgnore
  functions?: _StylisticCommaDangleValueWithIgnore
  importAttributes?: _StylisticCommaDangleValueWithIgnore
  dynamicImports?: _StylisticCommaDangleValueWithIgnore
  enums?: _StylisticCommaDangleValueWithIgnore
  generics?: _StylisticCommaDangleValueWithIgnore
  tuples?: _StylisticCommaDangleValueWithIgnore
})]
type _StylisticCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _StylisticCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")
// ----- @stylistic/comma-spacing -----
type StylisticCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/comma-style -----
type StylisticCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/computed-property-spacing -----
type StylisticComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- @stylistic/curly-newline -----
type StylisticCurlyNewline = []|[(("always" | "never") | {
  IfStatementConsequent?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  IfStatementAlternative?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  DoWhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForInStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForOfStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchCase?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementHandler?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementFinalizer?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  BlockStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ArrowFunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  Property?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ClassBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  StaticBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WithStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSModuleBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  multiline?: boolean
  minElements?: number
  consistent?: boolean
})]
// ----- @stylistic/dot-location -----
type StylisticDotLocation = []|[("object" | "property")]
// ----- @stylistic/eol-last -----
type StylisticEolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- @stylistic/exp-jsx-props-style -----
type StylisticExpJsxPropsStyle = []|[{
  singleLine?: {
    maxItems?: number
  }
  multiLine?: {
    minItems?: number
    maxItemsPerLine?: number
  }
}]
// ----- @stylistic/exp-list-style -----
type StylisticExpListStyle = []|[{
  singleLine?: _StylisticExpListStyle_SingleLineConfig
  multiLine?: _StylisticExpListStyle_MultiLineConfig
  overrides?: {
    "()"?: _StylisticExpListStyle_BaseConfig
    "[]"?: _StylisticExpListStyle_BaseConfig
    "{}"?: _StylisticExpListStyle_BaseConfig
    "<>"?: _StylisticExpListStyle_BaseConfig
    ArrayExpression?: _StylisticExpListStyle_BaseConfig
    ArrayPattern?: _StylisticExpListStyle_BaseConfig
    ArrowFunctionExpression?: _StylisticExpListStyle_BaseConfig
    CallExpression?: _StylisticExpListStyle_BaseConfig
    ExportNamedDeclaration?: _StylisticExpListStyle_BaseConfig
    FunctionDeclaration?: _StylisticExpListStyle_BaseConfig
    FunctionExpression?: _StylisticExpListStyle_BaseConfig
    IfStatement?: _StylisticExpListStyle_BaseConfig
    ImportAttributes?: _StylisticExpListStyle_BaseConfig
    ImportDeclaration?: _StylisticExpListStyle_BaseConfig
    JSONArrayExpression?: _StylisticExpListStyle_BaseConfig
    JSONObjectExpression?: _StylisticExpListStyle_BaseConfig
    NewExpression?: _StylisticExpListStyle_BaseConfig
    ObjectExpression?: _StylisticExpListStyle_BaseConfig
    ObjectPattern?: _StylisticExpListStyle_BaseConfig
    TSDeclareFunction?: _StylisticExpListStyle_BaseConfig
    TSEnumBody?: _StylisticExpListStyle_BaseConfig
    TSFunctionType?: _StylisticExpListStyle_BaseConfig
    TSInterfaceBody?: _StylisticExpListStyle_BaseConfig
    TSTupleType?: _StylisticExpListStyle_BaseConfig
    TSTypeLiteral?: _StylisticExpListStyle_BaseConfig
    TSTypeParameterDeclaration?: _StylisticExpListStyle_BaseConfig
    TSTypeParameterInstantiation?: _StylisticExpListStyle_BaseConfig
  }
}]
interface _StylisticExpListStyle_SingleLineConfig {
  spacing?: ("always" | "never")
  maxItems?: number
}
interface _StylisticExpListStyle_MultiLineConfig {
  minItems?: number
}
interface _StylisticExpListStyle_BaseConfig {
  singleLine?: _StylisticExpListStyle_SingleLineConfig
  multiline?: _StylisticExpListStyle_MultiLineConfig
}
// ----- @stylistic/function-call-argument-newline -----
type StylisticFunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- @stylistic/function-call-spacing -----
type StylisticFunctionCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- @stylistic/function-paren-newline -----
type StylisticFunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- @stylistic/generator-star-spacing -----
type StylisticGeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  shorthand?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- @stylistic/implicit-arrow-linebreak -----
type StylisticImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- @stylistic/indent -----
type StylisticIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
    using?: (number | ("first" | "off"))
  })
  assignmentOperator?: (number | "off")
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
    returnType?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: (boolean | {
    CallExpression?: boolean
    AwaitExpression?: boolean
    NewExpression?: boolean
  })
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]
// ----- @stylistic/indent-binary-ops -----
type StylisticIndentBinaryOps = []|[(number | "tab")]
// ----- @stylistic/jsx-closing-bracket-location -----
type StylisticJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
  selfClosing?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
})]
// ----- @stylistic/jsx-closing-tag-location -----
type StylisticJsxClosingTagLocation = []|[("tag-aligned" | "line-aligned")]
// ----- @stylistic/jsx-curly-brace-presence -----
type StylisticJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- @stylistic/jsx-curly-newline -----
type StylisticJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- @stylistic/jsx-curly-spacing -----
type StylisticJsxCurlySpacing = []|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never"))]|[({
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
  attributes?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
  children?: ({
    when?: ("always" | "never")
    allowMultiline?: boolean
    spacing?: {
      objectLiterals?: ("always" | "never")
    }
  } | boolean)
} | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
  }
}]
// ----- @stylistic/jsx-equals-spacing -----
type StylisticJsxEqualsSpacing = []|[("always" | "never")]
// ----- @stylistic/jsx-first-prop-new-line -----
type StylisticJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- @stylistic/jsx-function-call-newline -----
type StylisticJsxFunctionCallNewline = []|[("always" | "multiline")]
// ----- @stylistic/jsx-indent -----
type StylisticJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- @stylistic/jsx-indent-props -----
type StylisticJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
})]
// ----- @stylistic/jsx-max-props-per-line -----
type StylisticJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- @stylistic/jsx-newline -----
type StylisticJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- @stylistic/jsx-one-expression-per-line -----
type StylisticJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "single-line" | "non-jsx")
}]
// ----- @stylistic/jsx-pascal-case -----
type StylisticJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  ignore?: string[]
}]
// ----- @stylistic/jsx-quotes -----
type StylisticJsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- @stylistic/jsx-self-closing-comp -----
type StylisticJsxSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- @stylistic/jsx-sort-props -----
type StylisticJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (string[] | boolean)
  reservedLast?: string[]
  locale?: string
}]
// ----- @stylistic/jsx-tag-spacing -----
type StylisticJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- @stylistic/jsx-wrap-multilines -----
type StylisticJsxWrapMultilines = []|[{
  declaration?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  assignment?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  return?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  arrow?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  condition?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  logical?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  prop?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  propertyValue?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
}]
// ----- @stylistic/key-spacing -----
type StylisticKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
  ignoredNodes?: ("ObjectExpression" | "ObjectPattern" | "ImportDeclaration" | "ExportNamedDeclaration" | "ExportAllDeclaration" | "TSTypeLiteral" | "TSInterfaceBody" | "ClassBody")[]
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- @stylistic/keyword-spacing -----
type StylisticKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    arguments?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    eval?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
    using?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    accessor?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- @stylistic/line-comment-position -----
type StylisticLineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- @stylistic/linebreak-style -----
type StylisticLinebreakStyle = []|[("unix" | "windows")]
// ----- @stylistic/lines-around-comment -----
type StylisticLinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- @stylistic/lines-between-class-members -----
type StylisticLinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]
// ----- @stylistic/max-len -----
type StylisticMaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- @stylistic/max-statements-per-line -----
type StylisticMaxStatementsPerLine = []|[{
  max?: number
  ignoredNodes?: ("BreakStatement" | "ClassDeclaration" | "ContinueStatement" | "DebuggerStatement" | "DoWhileStatement" | "ExpressionStatement" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "IfStatement" | "ImportDeclaration" | "LabeledStatement" | "ReturnStatement" | "SwitchStatement" | "ThrowStatement" | "TryStatement" | "VariableDeclaration" | "WhileStatement" | "WithStatement" | "ExportNamedDeclaration" | "ExportDefaultDeclaration" | "ExportAllDeclaration")[]
}]
// ----- @stylistic/member-delimiter-style -----
type StylisticMemberDelimiterStyle = []|[{
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
  overrides?: {
    interface?: _StylisticMemberDelimiterStyle_DelimiterConfig
    typeLiteral?: _StylisticMemberDelimiterStyle_DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]
interface _StylisticMemberDelimiterStyle_DelimiterConfig {
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
}
// ----- @stylistic/multiline-comment-style -----
type StylisticMultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
  checkExclamation?: boolean
}])
// ----- @stylistic/multiline-ternary -----
type StylisticMultilineTernary = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
}]
// ----- @stylistic/new-parens -----
type StylisticNewParens = []|[("always" | "never")]
// ----- @stylistic/newline-per-chained-call -----
type StylisticNewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- @stylistic/no-confusing-arrow -----
type StylisticNoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- @stylistic/no-extra-parens -----
type StylisticNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
  nestedConditionalExpressions?: boolean
  allowNodesInSpreadElement?: {
    ConditionalExpression?: boolean
    LogicalExpression?: boolean
    AwaitExpression?: boolean
  }
  ignoredNodes?: string[]
}])
// ----- @stylistic/no-mixed-operators -----
type StylisticNoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- @stylistic/no-mixed-spaces-and-tabs -----
type StylisticNoMixedSpacesAndTabs = []|[("smart-tabs" | boolean)]
// ----- @stylistic/no-multi-spaces -----
type StylisticNoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
  includeTabs?: boolean
}]
// ----- @stylistic/no-multiple-empty-lines -----
type StylisticNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- @stylistic/no-tabs -----
type StylisticNoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- @stylistic/no-trailing-spaces -----
type StylisticNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- @stylistic/nonblock-statement-body-position -----
type StylisticNonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- @stylistic/object-curly-newline -----
type StylisticObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- @stylistic/object-curly-spacing -----
type StylisticObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  overrides?: {
    ObjectPattern?: ("always" | "never")
    ObjectExpression?: ("always" | "never")
    ImportDeclaration?: ("always" | "never")
    ImportAttributes?: ("always" | "never")
    ExportNamedDeclaration?: ("always" | "never")
    ExportAllDeclaration?: ("always" | "never")
    TSMappedType?: ("always" | "never")
    TSTypeLiteral?: ("always" | "never")
    TSInterfaceBody?: ("always" | "never")
    TSEnumBody?: ("always" | "never")
  }
  emptyObjects?: ("ignore" | "always" | "never")
}]
// ----- @stylistic/object-property-newline -----
type StylisticObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]
// ----- @stylistic/one-var-declaration-per-line -----
type StylisticOneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- @stylistic/operator-linebreak -----
type StylisticOperatorLinebreak = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- @stylistic/padded-blocks -----
type StylisticPaddedBlocks = []|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
})]|[(("always" | "never" | "start" | "end") | {
  blocks?: ("always" | "never" | "start" | "end")
  switches?: ("always" | "never" | "start" | "end")
  classes?: ("always" | "never" | "start" | "end")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- @stylistic/padding-line-between-statements -----
type _StylisticPaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _StylisticPaddingLineBetweenStatementsStatementOption = (_StylisticPaddingLineBetweenStatementsStatementMatcher | [_StylisticPaddingLineBetweenStatementsStatementMatcher, ...(_StylisticPaddingLineBetweenStatementsStatementMatcher)[]])
type _StylisticPaddingLineBetweenStatementsStatementMatcher = (_StylisticPaddingLineBetweenStatementsStatementType | _StylisticPaddingLineBetweenStatements_SelectorOption)
type _StylisticPaddingLineBetweenStatementsStatementType = ("*" | "exports" | "require" | "directive" | "iife" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "continue" | "debugger" | "default" | "do" | "for" | "if" | "import" | "switch" | "throw" | "try" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "function-overload" | "block-like" | "singleline-block-like" | "multiline-block-like" | "expression" | "singleline-expression" | "multiline-expression" | "return" | "singleline-return" | "multiline-return" | "export" | "singleline-export" | "multiline-export" | "var" | "singleline-var" | "multiline-var" | "let" | "singleline-let" | "multiline-let" | "const" | "singleline-const" | "multiline-const" | "using" | "singleline-using" | "multiline-using" | "type" | "singleline-type" | "multiline-type")
type StylisticPaddingLineBetweenStatements = {
  blankLine: _StylisticPaddingLineBetweenStatementsPaddingType
  prev: _StylisticPaddingLineBetweenStatementsStatementOption
  next: _StylisticPaddingLineBetweenStatementsStatementOption
}[]
interface _StylisticPaddingLineBetweenStatements_SelectorOption {
  selector: string
}
// ----- @stylistic/quote-props -----
type StylisticQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- @stylistic/quotes -----
type StylisticQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: (boolean | ("never" | "avoidEscape" | "always"))
  ignoreStringLiterals?: boolean
})]
// ----- @stylistic/rest-spread-spacing -----
type StylisticRestSpreadSpacing = []|[("always" | "never")]
// ----- @stylistic/semi -----
type StylisticSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- @stylistic/semi-spacing -----
type StylisticSemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/semi-style -----
type StylisticSemiStyle = []|[("last" | "first")]
// ----- @stylistic/space-before-blocks -----
type StylisticSpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
  modules?: ("always" | "never" | "off")
})]
// ----- @stylistic/space-before-function-paren -----
type StylisticSpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
  catch?: ("always" | "never" | "ignore")
})]
// ----- @stylistic/space-in-parens -----
type StylisticSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- @stylistic/space-infix-ops -----
type StylisticSpaceInfixOps = []|[{
  int32Hint?: boolean
  ignoreTypes?: boolean
}]
// ----- @stylistic/space-unary-ops -----
type StylisticSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- @stylistic/spaced-comment -----
type StylisticSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- @stylistic/switch-colon-spacing -----
type StylisticSwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- @stylistic/template-curly-spacing -----
type StylisticTemplateCurlySpacing = []|[("always" | "never")]
// ----- @stylistic/template-tag-spacing -----
type StylisticTemplateTagSpacing = []|[("always" | "never")]
// ----- @stylistic/type-annotation-spacing -----
type StylisticTypeAnnotationSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: _StylisticTypeAnnotationSpacing_SpacingConfig
    arrow?: ("ignore" | _StylisticTypeAnnotationSpacing_SpacingConfig)
    variable?: _StylisticTypeAnnotationSpacing_SpacingConfig
    parameter?: _StylisticTypeAnnotationSpacing_SpacingConfig
    property?: _StylisticTypeAnnotationSpacing_SpacingConfig
    returnType?: _StylisticTypeAnnotationSpacing_SpacingConfig
  }
}]
interface _StylisticTypeAnnotationSpacing_SpacingConfig {
  before?: boolean
  after?: boolean
}
// ----- @stylistic/wrap-iife -----
type StylisticWrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- @stylistic/yield-star-spacing -----
type StylisticYieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]
// ----- @typescript-eslint/array-type -----
type TypescriptEslintArrayType = []|[{
  
  default?: ("array" | "generic" | "array-simple")
  
  readonly?: ("array" | "generic" | "array-simple")
}]
// ----- @typescript-eslint/ban-ts-comment -----
type TypescriptEslintBanTsComment = []|[{
  
  minimumDescriptionLength?: number
  
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]
// ----- @typescript-eslint/class-literal-property-style -----
type TypescriptEslintClassLiteralPropertyStyle = []|[("fields" | "getters")]
// ----- @typescript-eslint/class-methods-use-this -----
type TypescriptEslintClassMethodsUseThis = []|[{
  
  enforceForClassFields?: boolean
  
  exceptMethods?: string[]
  
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  
  ignoreOverrideMethods?: boolean
}]
// ----- @typescript-eslint/consistent-generic-constructors -----
type TypescriptEslintConsistentGenericConstructors = []|[("type-annotation" | "constructor")]
// ----- @typescript-eslint/consistent-indexed-object-style -----
type TypescriptEslintConsistentIndexedObjectStyle = []|[("record" | "index-signature")]
// ----- @typescript-eslint/consistent-return -----
type TypescriptEslintConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- @typescript-eslint/consistent-type-assertions -----
type TypescriptEslintConsistentTypeAssertions = []|[({
  
  assertionStyle: "never"
} | {
  
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  
  assertionStyle?: ("as" | "angle-bracket")
  
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]
// ----- @typescript-eslint/consistent-type-definitions -----
type TypescriptEslintConsistentTypeDefinitions = []|[("interface" | "type")]
// ----- @typescript-eslint/consistent-type-exports -----
type TypescriptEslintConsistentTypeExports = []|[{
  
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]
// ----- @typescript-eslint/consistent-type-imports -----
type TypescriptEslintConsistentTypeImports = []|[{
  
  disallowTypeAnnotations?: boolean
  
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  
  prefer?: ("type-imports" | "no-type-imports")
}]
// ----- @typescript-eslint/dot-notation -----
type TypescriptEslintDotNotation = []|[{
  
  allowIndexSignaturePropertyAccess?: boolean
  
  allowKeywords?: boolean
  
  allowPattern?: string
  
  allowPrivateClassPropertyAccess?: boolean
  
  allowProtectedClassPropertyAccess?: boolean
}]
// ----- @typescript-eslint/explicit-function-return-type -----
type TypescriptEslintExplicitFunctionReturnType = []|[{
  
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowExpressions?: boolean
  
  allowFunctionsWithoutTypeParameters?: boolean
  
  allowHigherOrderFunctions?: boolean
  
  allowIIFEs?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/explicit-member-accessibility -----
type TypescriptEslintExplicitMemberAccessibility = []|[{
  
  accessibility?: ("explicit" | "no-public" | "off")
  
  ignoredMethodNames?: string[]
  
  overrides?: {
    
    accessors?: ("explicit" | "no-public" | "off")
    
    constructors?: ("explicit" | "no-public" | "off")
    
    methods?: ("explicit" | "no-public" | "off")
    
    parameterProperties?: ("explicit" | "no-public" | "off")
    
    properties?: ("explicit" | "no-public" | "off")
  }
}]
// ----- @typescript-eslint/explicit-module-boundary-types -----
type TypescriptEslintExplicitModuleBoundaryTypes = []|[{
  
  allowArgumentsExplicitlyTypedAsAny?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowHigherOrderFunctions?: boolean
  
  allowOverloadFunctions?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/init-declarations -----
type TypescriptEslintInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- @typescript-eslint/max-params -----
type TypescriptEslintMaxParams = []|[{
  
  countVoidThis?: boolean
  
  max?: number
  
  maximum?: number
}]
// ----- @typescript-eslint/member-ordering -----
type TypescriptEslintMemberOrdering = []|[{
  
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]
// ----- @typescript-eslint/method-signature-style -----
type TypescriptEslintMethodSignatureStyle = []|[("property" | "method")]
// ----- @typescript-eslint/naming-convention -----
type _TypescriptEslintNamingConventionFormatOptionsConfig = (_TypescriptEslintNamingConventionPredefinedFormats[] | null)
type _TypescriptEslintNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
type _TypescriptEslintNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
type _TypescriptEslintNamingConvention_PrefixSuffixConfig = string[]
type _TypescriptEslintNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
type TypescriptEslintNamingConvention = ({
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]
interface _TypescriptEslintNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}
// ----- @typescript-eslint/no-base-to-string -----
type TypescriptEslintNoBaseToString = []|[{
  
  checkUnknown?: boolean
  
  ignoredTypeNames?: string[]
}]
// ----- @typescript-eslint/no-confusing-void-expression -----
type TypescriptEslintNoConfusingVoidExpression = []|[{
  
  ignoreArrowShorthand?: boolean
  
  ignoreVoidOperator?: boolean
  
  ignoreVoidReturningFunctions?: boolean
}]
// ----- @typescript-eslint/no-deprecated -----
type TypescriptEslintNoDeprecated = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-duplicate-type-constituents -----
type TypescriptEslintNoDuplicateTypeConstituents = []|[{
  
  ignoreIntersections?: boolean
  
  ignoreUnions?: boolean
}]
// ----- @typescript-eslint/no-empty-function -----
type TypescriptEslintNoEmptyFunction = []|[{
  
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- @typescript-eslint/no-empty-interface -----
type TypescriptEslintNoEmptyInterface = []|[{
  
  allowSingleExtends?: boolean
}]
// ----- @typescript-eslint/no-empty-object-type -----
type TypescriptEslintNoEmptyObjectType = []|[{
  
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  
  allowObjectTypes?: ("always" | "never")
  
  allowWithName?: string
}]
// ----- @typescript-eslint/no-explicit-any -----
type TypescriptEslintNoExplicitAny = []|[{
  
  fixToUnknown?: boolean
  
  ignoreRestArgs?: boolean
}]
// ----- @typescript-eslint/no-extraneous-class -----
type TypescriptEslintNoExtraneousClass = []|[{
  
  allowConstructorOnly?: boolean
  
  allowEmpty?: boolean
  
  allowStaticOnly?: boolean
  
  allowWithDecorator?: boolean
}]
// ----- @typescript-eslint/no-floating-promises -----
type TypescriptEslintNoFloatingPromises = []|[{
  
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkThenables?: boolean
  
  ignoreIIFE?: boolean
  
  ignoreVoid?: boolean
}]
// ----- @typescript-eslint/no-inferrable-types -----
type TypescriptEslintNoInferrableTypes = []|[{
  
  ignoreParameters?: boolean
  
  ignoreProperties?: boolean
}]
// ----- @typescript-eslint/no-invalid-this -----
type TypescriptEslintNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- @typescript-eslint/no-invalid-void-type -----
type TypescriptEslintNoInvalidVoidType = []|[{
  
  allowAsThisParameter?: boolean
  
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]
// ----- @typescript-eslint/no-magic-numbers -----
type TypescriptEslintNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  
  ignoreEnums?: boolean
  
  ignoreNumericLiteralTypes?: boolean
  
  ignoreReadonlyClassProperties?: boolean
  
  ignoreTypeIndexes?: boolean
}]
// ----- @typescript-eslint/no-meaningless-void-operator -----
type TypescriptEslintNoMeaninglessVoidOperator = []|[{
  
  checkNever?: boolean
}]
// ----- @typescript-eslint/no-misused-promises -----
type TypescriptEslintNoMisusedPromises = []|[{
  
  checksConditionals?: boolean
  
  checksSpreads?: boolean
  
  checksVoidReturn?: (boolean | {
    
    arguments?: boolean
    
    attributes?: boolean
    
    inheritedMethods?: boolean
    
    properties?: boolean
    
    returns?: boolean
    
    variables?: boolean
  })
}]
// ----- @typescript-eslint/no-misused-spread -----
type TypescriptEslintNoMisusedSpread = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-namespace -----
type TypescriptEslintNoNamespace = []|[{
  
  allowDeclarations?: boolean
  
  allowDefinitionFiles?: boolean
}]
// ----- @typescript-eslint/no-redeclare -----
type TypescriptEslintNoRedeclare = []|[{
  
  builtinGlobals?: boolean
  
  ignoreDeclarationMerge?: boolean
}]
// ----- @typescript-eslint/no-require-imports -----
type TypescriptEslintNoRequireImports = []|[{
  
  allow?: string[]
  
  allowAsImport?: boolean
}]
// ----- @typescript-eslint/no-restricted-imports -----
type TypescriptEslintNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    
    importNames?: [string, ...(string)[]]
    
    allowImportNames?: [string, ...(string)[]]
    
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    
    allowTypeImports?: boolean
  }[])
}])
// ----- @typescript-eslint/no-restricted-types -----
type TypescriptEslintNoRestrictedTypes = []|[{
  
  types?: {
    [k: string]: (true | string | {
      
      fixWith?: string
      
      message?: string
      
      suggest?: string[]
    }) | undefined
  }
}]
// ----- @typescript-eslint/no-shadow -----
type TypescriptEslintNoShadow = []|[{
  
  allow?: string[]
  
  builtinGlobals?: boolean
  
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  
  ignoreOnInitialization?: boolean
  
  ignoreTypeValueShadow?: boolean
}]
// ----- @typescript-eslint/no-this-alias -----
type TypescriptEslintNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- @typescript-eslint/no-type-alias -----
type TypescriptEslintNoTypeAlias = []|[{
  
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowCallbacks?: ("always" | "never")
  
  allowConditionalTypes?: ("always" | "never")
  
  allowConstructors?: ("always" | "never")
  
  allowGenerics?: ("always" | "never")
  
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]
// ----- @typescript-eslint/no-unnecessary-boolean-literal-compare -----
type TypescriptEslintNoUnnecessaryBooleanLiteralCompare = []|[{
  
  allowComparingNullableBooleansToFalse?: boolean
  
  allowComparingNullableBooleansToTrue?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-condition -----
type TypescriptEslintNoUnnecessaryCondition = []|[{
  
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  checkTypePredicates?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-type-assertion -----
type TypescriptEslintNoUnnecessaryTypeAssertion = []|[{
  
  checkLiteralConstAssertions?: boolean
  
  typesToIgnore?: string[]
}]
// ----- @typescript-eslint/no-unsafe-member-access -----
type TypescriptEslintNoUnsafeMemberAccess = []|[{
  
  allowOptionalChaining?: boolean
}]
// ----- @typescript-eslint/no-unused-expressions -----
type TypescriptEslintNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]
// ----- @typescript-eslint/no-unused-vars -----
type TypescriptEslintNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  ignoreUsingDeclarations?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- @typescript-eslint/no-use-before-define -----
type TypescriptEslintNoUseBeforeDefine = []|[("nofunc" | {
  
  allowNamedExports?: boolean
  
  classes?: boolean
  
  enums?: boolean
  
  functions?: boolean
  
  ignoreTypeReferences?: boolean
  
  typedefs?: boolean
  
  variables?: boolean
})]
// ----- @typescript-eslint/no-var-requires -----
type TypescriptEslintNoVarRequires = []|[{
  
  allow?: string[]
}]
// ----- @typescript-eslint/only-throw-error -----
type TypescriptEslintOnlyThrowError = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowRethrowing?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/parameter-properties -----
type TypescriptEslintParameterProperties = []|[{
  
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  
  prefer?: ("class-property" | "parameter-property")
}]
// ----- @typescript-eslint/prefer-destructuring -----
type TypescriptEslintPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  
  enforceForDeclarationWithTypeAnnotation?: boolean
  
  enforceForRenamedProperties?: boolean
}]
// ----- @typescript-eslint/prefer-literal-enum-member -----
type TypescriptEslintPreferLiteralEnumMember = []|[{
  
  allowBitwiseExpressions?: boolean
}]
// ----- @typescript-eslint/prefer-nullish-coalescing -----
type TypescriptEslintPreferNullishCoalescing = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  ignoreBooleanCoercion?: boolean
  
  ignoreConditionalTests?: boolean
  
  ignoreIfStatements?: boolean
  
  ignoreMixedLogicalExpressions?: boolean
  
  ignorePrimitives?: ({
    
    bigint?: boolean
    
    boolean?: boolean
    
    number?: boolean
    
    string?: boolean
  } | true)
  
  ignoreTernaryTests?: boolean
}]
// ----- @typescript-eslint/prefer-optional-chain -----
type TypescriptEslintPreferOptionalChain = []|[{
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  
  checkAny?: boolean
  
  checkBigInt?: boolean
  
  checkBoolean?: boolean
  
  checkNumber?: boolean
  
  checkString?: boolean
  
  checkUnknown?: boolean
  
  requireNullish?: boolean
}]
// ----- @typescript-eslint/prefer-promise-reject-errors -----
type TypescriptEslintPreferPromiseRejectErrors = []|[{
  
  allowEmptyReject?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/prefer-readonly -----
type TypescriptEslintPreferReadonly = []|[{
  
  onlyInlineLambdas?: boolean
}]
// ----- @typescript-eslint/prefer-readonly-parameter-types -----
type TypescriptEslintPreferReadonlyParameterTypes = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkParameterProperties?: boolean
  
  ignoreInferredTypes?: boolean
  
  treatMethodsAsReadonly?: boolean
}]
// ----- @typescript-eslint/prefer-string-starts-ends-with -----
type TypescriptEslintPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- @typescript-eslint/promise-function-async -----
type TypescriptEslintPromiseFunctionAsync = []|[{
  
  allowAny?: boolean
  
  allowedPromiseNames?: string[]
  
  checkArrowFunctions?: boolean
  
  checkFunctionDeclarations?: boolean
  
  checkFunctionExpressions?: boolean
  
  checkMethodDeclarations?: boolean
}]
// ----- @typescript-eslint/require-array-sort-compare -----
type TypescriptEslintRequireArraySortCompare = []|[{
  
  ignoreStringArrays?: boolean
}]
// ----- @typescript-eslint/restrict-plus-operands -----
type TypescriptEslintRestrictPlusOperands = []|[{
  
  allowAny?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumberAndString?: boolean
  
  allowRegExp?: boolean
  
  skipCompoundAssignments?: boolean
}]
// ----- @typescript-eslint/restrict-template-expressions -----
type TypescriptEslintRestrictTemplateExpressions = []|[{
  
  allowAny?: boolean
  
  allowArray?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumber?: boolean
  
  allowRegExp?: boolean
  
  allowNever?: boolean
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/return-await -----
type TypescriptEslintReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]
// ----- @typescript-eslint/sort-type-constituents -----
type TypescriptEslintSortTypeConstituents = []|[{
  
  caseSensitive?: boolean
  
  checkIntersections?: boolean
  
  checkUnions?: boolean
  
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]
// ----- @typescript-eslint/strict-boolean-expressions -----
type TypescriptEslintStrictBooleanExpressions = []|[{
  
  allowAny?: boolean
  
  allowNullableBoolean?: boolean
  
  allowNullableEnum?: boolean
  
  allowNullableNumber?: boolean
  
  allowNullableObject?: boolean
  
  allowNullableString?: boolean
  
  allowNumber?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  allowString?: boolean
}]
// ----- @typescript-eslint/switch-exhaustiveness-check -----
type TypescriptEslintSwitchExhaustivenessCheck = []|[{
  
  allowDefaultCaseForExhaustiveSwitch?: boolean
  
  considerDefaultExhaustiveForUnions?: boolean
  
  defaultCaseCommentPattern?: string
  
  requireDefaultForNonUnion?: boolean
}]
// ----- @typescript-eslint/triple-slash-reference -----
type TypescriptEslintTripleSlashReference = []|[{
  
  lib?: ("always" | "never")
  
  path?: ("always" | "never")
  
  types?: ("always" | "never" | "prefer-import")
}]
// ----- @typescript-eslint/typedef -----
type TypescriptEslintTypedef = []|[{
  
  arrayDestructuring?: boolean
  
  arrowParameter?: boolean
  
  memberVariableDeclaration?: boolean
  
  objectDestructuring?: boolean
  
  parameter?: boolean
  
  propertyDeclaration?: boolean
  
  variableDeclaration?: boolean
  
  variableDeclarationIgnoreFunction?: boolean
}]
// ----- @typescript-eslint/unbound-method -----
type TypescriptEslintUnboundMethod = []|[{
  
  ignoreStatic?: boolean
}]
// ----- @typescript-eslint/unified-signatures -----
type TypescriptEslintUnifiedSignatures = []|[{
  
  ignoreDifferentlyNamedParameters?: boolean
  
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]
// ----- accessor-pairs -----
type AccessorPairs = []|[{
  getWithoutSet?: boolean
  setWithoutGet?: boolean
  enforceForClassMembers?: boolean
  enforceForTSTypes?: boolean
}]
// ----- array-bracket-newline -----
type ArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- array-bracket-spacing -----
type ArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- array-callback-return -----
type ArrayCallbackReturn = []|[{
  allowImplicit?: boolean
  checkForEach?: boolean
  allowVoid?: boolean
}]
// ----- array-element-newline -----
type ArrayElementNewline = []|[(_ArrayElementNewlineBasicConfig | {
  ArrayExpression?: _ArrayElementNewlineBasicConfig
  ArrayPattern?: _ArrayElementNewlineBasicConfig
})]
type _ArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- arrow-body-style -----
type ArrowBodyStyle = ([]|[("always" | "never")] | []|["as-needed"]|["as-needed", {
  requireReturnForObjectLiteral?: boolean
}])
// ----- arrow-parens -----
type ArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- arrow-spacing -----
type ArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- block-spacing -----
type BlockSpacing = []|[("always" | "never")]
// ----- brace-style -----
type BraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- callback-return -----
type CallbackReturn = []|[string[]]
// ----- camelcase -----
type Camelcase = []|[{
  ignoreDestructuring?: boolean
  ignoreImports?: boolean
  ignoreGlobals?: boolean
  properties?: ("always" | "never")
  
  allow?: string[]
}]
// ----- capitalized-comments -----
type CapitalizedComments = []|[("always" | "never")]|[("always" | "never"), ({
  ignorePattern?: string
  ignoreInlineComments?: boolean
  ignoreConsecutiveComments?: boolean
} | {
  line?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
  block?: {
    ignorePattern?: string
    ignoreInlineComments?: boolean
    ignoreConsecutiveComments?: boolean
  }
})]
// ----- class-methods-use-this -----
type ClassMethodsUseThis = []|[{
  exceptMethods?: string[]
  enforceForClassFields?: boolean
  ignoreOverrideMethods?: boolean
  ignoreClassesWithImplements?: ("all" | "public-fields")
}]
// ----- comma-dangle -----
type CommaDangle = []|[(_CommaDangleValue | {
  arrays?: _CommaDangleValueWithIgnore
  objects?: _CommaDangleValueWithIgnore
  imports?: _CommaDangleValueWithIgnore
  exports?: _CommaDangleValueWithIgnore
  functions?: _CommaDangleValueWithIgnore
})]
type _CommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _CommaDangleValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- comma-spacing -----
type CommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- comma-style -----
type CommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- complexity -----
type Complexity = []|[(number | {
  maximum?: number
  max?: number
  variant?: ("classic" | "modified")
})]
// ----- computed-property-spacing -----
type ComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- consistent-return -----
type ConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- consistent-this -----
type ConsistentThis = string[]
// ----- curly -----
type Curly = ([]|["all"] | []|[("multi" | "multi-line" | "multi-or-nest")]|[("multi" | "multi-line" | "multi-or-nest"), "consistent"])
// ----- default-case -----
type DefaultCase = []|[{
  commentPattern?: string
}]
// ----- dot-location -----
type DotLocation = []|[("object" | "property")]
// ----- dot-notation -----
type DotNotation = []|[{
  allowKeywords?: boolean
  allowPattern?: string
}]
// ----- eol-last -----
type EolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- eqeqeq -----
type Eqeqeq = ([]|["always"]|["always", {
  null?: ("always" | "never" | "ignore")
}] | []|[("smart" | "allow-null")])
// ----- func-call-spacing -----
type FuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
}])
// ----- func-name-matching -----
type FuncNameMatching = ([]|[("always" | "never")]|[("always" | "never"), {
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}] | []|[{
  considerPropertyDescriptor?: boolean
  includeCommonJSModuleExports?: boolean
}])
// ----- func-names -----
type FuncNames = []|[_FuncNamesValue]|[_FuncNamesValue, {
  generators?: _FuncNamesValue
}]
type _FuncNamesValue = ("always" | "as-needed" | "never")
// ----- func-style -----
type FuncStyle = []|[("declaration" | "expression")]|[("declaration" | "expression"), {
  allowArrowFunctions?: boolean
  allowTypeAnnotation?: boolean
  overrides?: {
    namedExports?: ("declaration" | "expression" | "ignore")
  }
}]
// ----- function-call-argument-newline -----
type FunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- function-paren-newline -----
type FunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- generator-star-spacing -----
type GeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- getter-return -----
type GetterReturn = []|[{
  allowImplicit?: boolean
}]
// ----- grouped-accessor-pairs -----
type GroupedAccessorPairs = []|[("anyOrder" | "getBeforeSet" | "setBeforeGet")]|[("anyOrder" | "getBeforeSet" | "setBeforeGet"), {
  enforceForTSTypes?: boolean
}]
// ----- handle-callback-err -----
type HandleCallbackErr = []|[string]
// ----- id-blacklist -----
type IdBlacklist = string[]
// ----- id-denylist -----
type IdDenylist = string[]
// ----- id-length -----
type IdLength = []|[{
  min?: number
  max?: number
  exceptions?: string[]
  exceptionPatterns?: string[]
  properties?: ("always" | "never")
}]
// ----- id-match -----
type IdMatch = []|[string]|[string, {
  properties?: boolean
  classFields?: boolean
  onlyDeclarations?: boolean
  ignoreDestructuring?: boolean
}]
// ----- implicit-arrow-linebreak -----
type ImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- import-x/consistent-type-specifier-style -----
type ImportXConsistentTypeSpecifierStyle = []|[("prefer-top-level" | "prefer-inline")]
// ----- import-x/dynamic-import-chunkname -----
type ImportXDynamicImportChunkname = []|[{
  importFunctions?: string[]
  allowEmpty?: boolean
  webpackChunknameFormat?: string
  [k: string]: unknown | undefined
}]
// ----- import-x/extensions -----
type ImportXExtensions = ([]|[("always" | "ignorePackages" | "never")] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  fix?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  ignorePackages?: boolean
  checkTypeImports?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  fix?: boolean
  [k: string]: unknown | undefined
}] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  [k: string]: ("always" | "ignorePackages" | "never")
}] | []|[{
  [k: string]: ("always" | "ignorePackages" | "never")
}])
// ----- import-x/first -----
type ImportXFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import-x/imports-first -----
type ImportXImportsFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import-x/max-dependencies -----
type ImportXMaxDependencies = []|[{
  max?: number
  ignoreTypeImports?: boolean
}]
// ----- import-x/named -----
type ImportXNamed = []|[{
  commonjs?: boolean
}]
// ----- import-x/namespace -----
type ImportXNamespace = []|[{
  
  allowComputed?: boolean
}]
// ----- import-x/newline-after-import -----
type ImportXNewlineAfterImport = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
}]
// ----- import-x/no-absolute-path -----
type ImportXNoAbsolutePath = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import-x/no-anonymous-default-export -----
type ImportXNoAnonymousDefaultExport = []|[{
  
  allowArray?: boolean
  
  allowArrowFunction?: boolean
  
  allowCallExpression?: boolean
  
  allowAnonymousClass?: boolean
  
  allowAnonymousFunction?: boolean
  
  allowLiteral?: boolean
  
  allowObject?: boolean
  
  allowNew?: boolean
}]
// ----- import-x/no-commonjs -----
type ImportXNoCommonjs = ([]|["allow-primitive-modules"] | []|[{
  allowPrimitiveModules?: boolean
  allowRequire?: boolean
  allowConditionalRequire?: boolean
}])
// ----- import-x/no-cycle -----
type ImportXNoCycle = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  maxDepth?: (number | "∞")
  
  ignoreExternal?: boolean
  
  allowUnsafeDynamicCyclicDependency?: boolean
}]
// ----- import-x/no-duplicates -----
type ImportXNoDuplicates = []|[{
  considerQueryString?: boolean
  "prefer-inline"?: boolean
}]
// ----- import-x/no-dynamic-require -----
type ImportXNoDynamicRequire = []|[{
  esmodule?: boolean
}]
// ----- import-x/no-extraneous-dependencies -----
type ImportXNoExtraneousDependencies = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  bundledDependencies?: (boolean | unknown[])
  packageDir?: (string | unknown[])
  includeInternal?: boolean
  includeTypes?: boolean
  whitelist?: unknown[]
}]
// ----- import-x/no-import-module-exports -----
type ImportXNoImportModuleExports = []|[{
  exceptions?: unknown[]
}]
// ----- import-x/no-internal-modules -----
type ImportXNoInternalModules = []|[({
  allow?: string[]
} | {
  forbid?: string[]
})]
// ----- import-x/no-namespace -----
type ImportXNoNamespace = []|[{
  ignore?: string[]
  [k: string]: unknown | undefined
}]
// ----- import-x/no-nodejs-modules -----
type ImportXNoNodejsModules = []|[{
  allow?: string[]
}]
// ----- import-x/no-relative-packages -----
type ImportXNoRelativePackages = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import-x/no-relative-parent-imports -----
type ImportXNoRelativeParentImports = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import-x/no-rename-default -----
type ImportXNoRenameDefault = []|[{
  commonjs?: boolean
  preventRenamingBindings?: boolean
}]
// ----- import-x/no-restricted-paths -----
type ImportXNoRestrictedPaths = []|[{
  
  zones?: [{
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  }, ...({
    target?: (string | [string, ...(string)[]])
    from?: (string | [string, ...(string)[]])
    except?: string[]
    message?: string
  })[]]
  basePath?: string
}]
// ----- import-x/no-unassigned-import -----
type ImportXNoUnassignedImport = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  allow?: string[]
}]
// ----- import-x/no-unresolved -----
type ImportXNoUnresolved = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  caseSensitive?: boolean
  caseSensitiveStrict?: boolean
}]
// ----- import-x/no-unused-modules -----
type ImportXNoUnusedModules = []|[({
  unusedExports: true
  
  src?: [unknown, ...(unknown)[]]
  [k: string]: unknown | undefined
} | {
  missingExports: true
  [k: string]: unknown | undefined
})]
// ----- import-x/no-useless-path-segments -----
type ImportXNoUselessPathSegments = []|[{
  commonjs?: boolean
  noUselessIndex?: boolean
}]
// ----- import-x/order -----
type ImportXOrder = []|[{
  groups?: unknown[]
  pathGroupsExcludedImportTypes?: unknown[]
  distinctGroup?: boolean
  pathGroups?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    group: ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")
    position?: ("after" | "before")
  }[]
  "newlines-between"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  "newlines-between-types"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  consolidateIslands?: ("inside-groups" | "never")
  sortTypesGroup?: boolean
  named?: (boolean | {
    enabled?: boolean
    import?: boolean
    export?: boolean
    require?: boolean
    cjsExports?: boolean
    types?: ("mixed" | "types-first" | "types-last")
  })
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ("ignore" | "asc" | "desc")
    orderImportKind?: ("ignore" | "asc" | "desc")
  }
  warnOnUnassignedImports?: boolean
}]
// ----- import-x/prefer-default-export -----
type ImportXPreferDefaultExport = []|[{
  target?: ("single" | "any")
}]
// ----- import-x/prefer-namespace-import -----
type ImportXPreferNamespaceImport = []|[{
  patterns?: string[]
}]
// ----- indent -----
type Indent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}]
// ----- indent-legacy -----
type IndentLegacy = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: (number | {
    var?: number
    let?: number
    const?: number
    [k: string]: unknown | undefined
  })
  outerIIFEBody?: number
  MemberExpression?: number
  FunctionDeclaration?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown | undefined
  }
  FunctionExpression?: {
    parameters?: (number | "first")
    body?: number
    [k: string]: unknown | undefined
  }
  CallExpression?: {
    parameters?: (number | "first")
    [k: string]: unknown | undefined
  }
  ArrayExpression?: (number | "first")
  ObjectExpression?: (number | "first")
}]
// ----- init-declarations -----
type InitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- jsdoc/check-alignment -----
type JsdocCheckAlignment = []|[{
  
  innerIndent?: number
}]
// ----- jsdoc/check-examples -----
type JsdocCheckExamples = []|[{
  allowInlineConfig?: boolean
  baseConfig?: {
    [k: string]: unknown | undefined
  }
  captionRequired?: boolean
  checkDefaults?: boolean
  checkEslintrc?: boolean
  checkParams?: boolean
  checkProperties?: boolean
  configFile?: string
  exampleCodeRegex?: string
  matchingFileName?: string
  matchingFileNameDefaults?: string
  matchingFileNameParams?: string
  matchingFileNameProperties?: string
  noDefaultExampleRules?: boolean
  paddedIndent?: number
  rejectExampleCodeRegex?: string
  reportUnusedDisableDirectives?: boolean
}]
// ----- jsdoc/check-indentation -----
type JsdocCheckIndentation = []|[{
  
  allowIndentedSections?: boolean
  
  excludeTags?: string[]
}]
// ----- jsdoc/check-line-alignment -----
type JsdocCheckLineAlignment = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  
  customSpacings?: {
    
    postDelimiter?: number
    
    postHyphen?: number
    
    postName?: number
    
    postTag?: number
    
    postType?: number
  }
  
  disableWrapIndent?: boolean
  
  preserveMainDescriptionPostDelimiter?: boolean
  
  tags?: string[]
  
  wrapIndent?: string
}]
// ----- jsdoc/check-param-names -----
type JsdocCheckParamNames = []|[{
  
  allowExtraTrailingParamDocs?: boolean
  
  checkDestructured?: boolean
  
  checkRestProperty?: boolean
  
  checkTypesPattern?: string
  
  disableExtraPropertyReporting?: boolean
  
  disableMissingParamChecks?: boolean
  
  enableFixer?: boolean
  
  useDefaultObjectProperties?: boolean
}]
// ----- jsdoc/check-property-names -----
type JsdocCheckPropertyNames = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/check-tag-names -----
type JsdocCheckTagNames = []|[{
  
  definedTags?: string[]
  
  enableFixer?: boolean
  
  inlineTags?: string[]
  
  jsxTags?: boolean
  
  typed?: boolean
}]
// ----- jsdoc/check-types -----
type JsdocCheckTypes = []|[{
  
  exemptTagContexts?: {
    
    tag?: string
    
    types?: (boolean | string[])
  }[]
  
  noDefaults?: boolean
  
  unifyParentAndChildTypeChecks?: boolean
}]
// ----- jsdoc/check-values -----
type JsdocCheckValues = []|[{
  
  allowedAuthors?: string[]
  
  allowedLicenses?: (string[] | boolean)
  
  licensePattern?: string
  
  numericOnlyVariation?: boolean
}]
// ----- jsdoc/convert-to-jsdoc-comments -----
type JsdocConvertToJsdocComments = []|[{
  
  allowedPrefixes?: string[]
  
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  contextsAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  contextsBeforeAndAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  enableFixer?: boolean
  
  enforceJsdocLineStyle?: ("multi" | "single")
  
  lineOrBlockStyle?: ("block" | "line" | "both")
}]
// ----- jsdoc/empty-tags -----
type JsdocEmptyTags = []|[{
  
  tags?: string[]
}]
// ----- jsdoc/escape-inline-tags -----
type JsdocEscapeInlineTags = []|[{
  
  allowedInlineTags?: string[]
  
  enableFixer?: boolean
  
  fixType?: ("backticks" | "backslash")
}]
// ----- jsdoc/implements-on-classes -----
type JsdocImplementsOnClasses = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/informative-docs -----
type JsdocInformativeDocs = []|[{
  
  aliases?: {
    [k: string]: string[]
  }
  
  excludedTags?: string[]
  
  uselessWords?: string[]
}]
// ----- jsdoc/lines-before-block -----
type JsdocLinesBeforeBlock = []|[{
  
  checkBlockStarts?: boolean
  
  excludedTags?: string[]
  
  ignoreSameLine?: boolean
  
  ignoreSingleLines?: boolean
  
  lines?: number
}]
// ----- jsdoc/match-description -----
type JsdocMatchDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  mainDescription?: (string | boolean | {
    match?: (string | boolean)
    message?: string
  })
  
  matchDescription?: string
  
  message?: string
  
  nonemptyTags?: boolean
  
  tags?: {
    [k: string]: (string | true | {
      match?: (string | true)
      message?: string
    })
  }
}]
// ----- jsdoc/match-name -----
type JsdocMatchName = []|[{
  
  match: {
    
    allowName?: string
    
    comment?: string
    
    context?: string
    
    disallowName?: string
    
    message?: string
    
    replacement?: string
    
    tags?: string[]
  }[]
}]
// ----- jsdoc/multiline-blocks -----
type JsdocMultilineBlocks = []|[{
  
  allowMultipleTags?: boolean
  
  minimumLengthForMultiline?: number
  
  multilineTags?: ("*" | string[])
  
  noFinalLineText?: boolean
  
  noMultilineBlocks?: boolean
  
  noSingleLineBlocks?: boolean
  
  noZeroLineText?: boolean
  
  requireSingleLineUnderCount?: number
  
  singleLineTags?: string[]
}]
// ----- jsdoc/no-bad-blocks -----
type JsdocNoBadBlocks = []|[{
  
  ignore?: string[]
  
  preventAllMultiAsteriskBlocks?: boolean
}]
// ----- jsdoc/no-blank-blocks -----
type JsdocNoBlankBlocks = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/no-defaults -----
type JsdocNoDefaults = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  noOptionalParamNames?: boolean
}]
// ----- jsdoc/no-missing-syntax -----
type JsdocNoMissingSyntax = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
    message?: string
    minimum?: number
  })[]
}]
// ----- jsdoc/no-multi-asterisks -----
type JsdocNoMultiAsterisks = []|[{
  
  allowWhitespace?: boolean
  
  preventAtEnd?: boolean
  
  preventAtMiddleLines?: boolean
}]
// ----- jsdoc/no-restricted-syntax -----
type JsdocNoRestrictedSyntax = []|[{
  
  contexts: (string | {
    comment?: string
    context?: string
    message?: string
  })[]
}]
// ----- jsdoc/no-types -----
type JsdocNoTypes = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/no-undefined-types -----
type JsdocNoUndefinedTypes = []|[{
  
  checkUsedTypedefs?: boolean
  
  definedTypes?: string[]
  
  disableReporting?: boolean
  
  markVariablesAsUsed?: boolean
}]
// ----- jsdoc/prefer-import-tag -----
type JsdocPreferImportTag = []|[{
  
  enableFixer?: boolean
  
  exemptTypedefs?: boolean
  
  outputType?: ("named-import" | "namespaced-import")
}]
// ----- jsdoc/require-asterisk-prefix -----
type JsdocRequireAsteriskPrefix = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  
  tags?: {
    
    always?: string[]
    
    any?: string[]
    
    never?: string[]
  }
}]
// ----- jsdoc/require-description -----
type JsdocRequireDescription = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  checkSetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  descriptionStyle?: ("body" | "tag" | "any")
  
  exemptedBy?: string[]
}]
// ----- jsdoc/require-description-complete-sentence -----
type JsdocRequireDescriptionCompleteSentence = []|[{
  
  abbreviations?: string[]
  
  newlineBeforeCapsAssumesBadSentenceEnd?: boolean
  
  tags?: string[]
}]
// ----- jsdoc/require-example -----
type JsdocRequireExample = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  checkSetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  enableFixer?: boolean
  
  exemptedBy?: string[]
  
  exemptNoArguments?: boolean
}]
// ----- jsdoc/require-file-overview -----
type JsdocRequireFileOverview = []|[{
  
  tags?: {
    [k: string]: {
      initialCommentsOnly?: boolean
      mustExist?: boolean
      preventDuplicates?: boolean
    }
  }
}]
// ----- jsdoc/require-hyphen-before-param-description -----
type JsdocRequireHyphenBeforeParamDescription = []|[("always" | "never")]|[("always" | "never"), {
  
  tags?: ({
    [k: string]: ("always" | "never")
  } | "any")
}]
// ----- jsdoc/require-jsdoc -----
type JsdocRequireJsdoc = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: (boolean | "no-setter")
  
  checkSetters?: (boolean | "no-getter")
  
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
    minLineCount?: number
  })[]
  
  enableFixer?: boolean
  
  exemptEmptyConstructors?: boolean
  
  exemptEmptyFunctions?: boolean
  
  exemptOverloadedImplementations?: boolean
  
  fixerMessage?: string
  
  minLineCount?: number
  
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
  
  require?: {
    
    ArrowFunctionExpression?: boolean
    
    ClassDeclaration?: boolean
    
    ClassExpression?: boolean
    
    FunctionDeclaration?: boolean
    
    FunctionExpression?: boolean
    
    MethodDefinition?: boolean
  }
  
  skipInterveningOverloadedDeclarations?: boolean
}]
// ----- jsdoc/require-param -----
type JsdocRequireParam = []|[{
  
  autoIncrementBase?: number
  
  checkConstructors?: boolean
  
  checkDestructured?: boolean
  
  checkDestructuredRoots?: boolean
  
  checkGetters?: boolean
  
  checkRestProperty?: boolean
  
  checkSetters?: boolean
  
  checkTypesPattern?: string
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  enableFixer?: boolean
  
  enableRestElementFixer?: boolean
  
  enableRootFixer?: boolean
  
  exemptedBy?: string[]
  
  ignoreWhenAllParamsMissing?: boolean
  
  interfaceExemptsParamsCheck?: boolean
  
  unnamedRootBase?: string[]
  
  useDefaultObjectProperties?: boolean
}]
// ----- jsdoc/require-param-description -----
type JsdocRequireParamDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  defaultDestructuredRootDescription?: string
  
  setDefaultDestructuredRootDescription?: boolean
}]
// ----- jsdoc/require-param-name -----
type JsdocRequireParamName = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-param-type -----
type JsdocRequireParamType = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  defaultDestructuredRootType?: string
  
  setDefaultDestructuredRootType?: boolean
}]
// ----- jsdoc/require-rejects -----
type JsdocRequireRejects = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  exemptedBy?: string[]
}]
// ----- jsdoc/require-returns -----
type JsdocRequireReturns = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
    forceRequireReturn?: boolean
  })[]
  
  enableFixer?: boolean
  
  exemptedBy?: string[]
  
  forceRequireReturn?: boolean
  
  forceReturnsWithAsync?: boolean
  
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
}]
// ----- jsdoc/require-returns-check -----
type JsdocRequireReturnsCheck = []|[{
  
  exemptAsync?: boolean
  
  exemptGenerators?: boolean
  
  noNativeTypes?: boolean
  
  reportMissingReturnForUndefinedTypes?: boolean
}]
// ----- jsdoc/require-returns-description -----
type JsdocRequireReturnsDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-returns-type -----
type JsdocRequireReturnsType = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-tags -----
type JsdocRequireTags = []|[{
  
  tags?: (string | {
    context?: string
    tag?: string
    [k: string]: unknown | undefined
  })[]
}]
// ----- jsdoc/require-template -----
type JsdocRequireTemplate = []|[{
  
  exemptedBy?: string[]
  
  requireSeparateTemplates?: boolean
}]
// ----- jsdoc/require-throws -----
type JsdocRequireThrows = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  exemptedBy?: string[]
}]
// ----- jsdoc/require-yields -----
type JsdocRequireYields = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  exemptedBy?: string[]
  
  forceRequireNext?: boolean
  
  forceRequireYields?: boolean
  
  next?: boolean
  
  nextWithGeneratorTag?: boolean
  
  withGeneratorTag?: boolean
}]
// ----- jsdoc/require-yields-check -----
type JsdocRequireYieldsCheck = []|[{
  
  checkGeneratorsOnly?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  next?: boolean
}]
// ----- jsdoc/sort-tags -----
type JsdocSortTags = []|[{
  
  alphabetizeExtras?: boolean
  
  linesBetween?: number
  
  reportIntraTagGroupSpacing?: boolean
  
  reportTagGroupSpacing?: boolean
  
  tagExceptions?: {
    [k: string]: number
  }
  
  tagSequence?: {
    
    tags?: string[]
  }[]
}]
// ----- jsdoc/tag-lines -----
type JsdocTagLines = []|[("always" | "any" | "never")]|[("always" | "any" | "never"), {
  
  applyToEndTag?: boolean
  
  count?: number
  
  endLines?: (number | null)
  
  maxBlockLines?: (number | null)
  
  startLines?: (number | null)
  
  tags?: {
    [k: string]: {
      count?: number
      lines?: ("always" | "never" | "any")
    }
  }
}]
// ----- jsdoc/text-escaping -----
type JsdocTextEscaping = []|[{
  
  escapeHTML?: boolean
  
  escapeMarkdown?: boolean
}]
// ----- jsdoc/ts-method-signature-style -----
type JsdocTsMethodSignatureStyle = []|[("method" | "property")]|[("method" | "property"), {
  
  enableFixer?: boolean
}]
// ----- jsdoc/ts-no-unnecessary-template-expression -----
type JsdocTsNoUnnecessaryTemplateExpression = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/ts-prefer-function-type -----
type JsdocTsPreferFunctionType = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/type-formatting -----
type JsdocTypeFormatting = []|[{
  
  arrayBrackets?: ("angle" | "square")
  
  arrowFunctionPostReturnMarkerSpacing?: string
  
  arrowFunctionPreReturnMarkerSpacing?: string
  
  enableFixer?: boolean
  
  functionOrClassParameterSpacing?: string
  
  functionOrClassPostGenericSpacing?: string
  
  functionOrClassPostReturnMarkerSpacing?: string
  
  functionOrClassPreReturnMarkerSpacing?: string
  
  functionOrClassTypeParameterSpacing?: string
  
  genericAndTupleElementSpacing?: string
  
  genericDot?: boolean
  
  keyValuePostColonSpacing?: string
  
  keyValuePostKeySpacing?: string
  
  keyValuePostOptionalSpacing?: string
  
  keyValuePostVariadicSpacing?: string
  
  methodQuotes?: ("double" | "single")
  
  objectFieldIndent?: string
  
  objectFieldQuote?: ("double" | "single" | null)
  
  objectFieldSeparator?: ("comma" | "comma-and-linebreak" | "linebreak" | "semicolon" | "semicolon-and-linebreak")
  
  objectFieldSeparatorOptionalLinebreak?: boolean
  
  objectFieldSeparatorTrailingPunctuation?: boolean
  
  parameterDefaultValueSpacing?: string
  
  postMethodNameSpacing?: string
  
  postNewSpacing?: string
  
  separatorForSingleObjectField?: boolean
  
  stringQuotes?: ("double" | "single")
  
  typeBracketSpacing?: string
  
  unionSpacing?: string
}]
// ----- jsdoc/valid-types -----
type JsdocValidTypes = []|[{
  
  allowEmptyNamepaths?: boolean
}]
// ----- jsx-quotes -----
type JsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- key-spacing -----
type KeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- keyword-spacing -----
type KeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- line-comment-position -----
type LineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- linebreak-style -----
type LinebreakStyle = []|[("unix" | "windows")]
// ----- lines-around-comment -----
type LinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- lines-around-directive -----
type LinesAroundDirective = []|[(("always" | "never") | {
  before?: ("always" | "never")
  after?: ("always" | "never")
})]
// ----- lines-between-class-members -----
type LinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
}]
// ----- logical-assignment-operators -----
type LogicalAssignmentOperators = (([]|["always"]|["always", {
  enforceForIfStatements?: boolean
}] | ["never"]) & unknown[])
// ----- max-classes-per-file -----
type MaxClassesPerFile = []|[(number | {
  ignoreExpressions?: boolean
  max?: number
})]
// ----- max-depth -----
type MaxDepth = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-len -----
type MaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- max-lines -----
type MaxLines = []|[(number | {
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
})]
// ----- max-lines-per-function -----
type MaxLinesPerFunction = []|[({
  max?: number
  skipComments?: boolean
  skipBlankLines?: boolean
  IIFEs?: boolean
} | number)]
// ----- max-nested-callbacks -----
type MaxNestedCallbacks = []|[(number | {
  maximum?: number
  max?: number
})]
// ----- max-params -----
type MaxParams = []|[(number | {
  maximum?: number
  max?: number
  
  countVoidThis?: boolean
})]
// ----- max-statements -----
type MaxStatements = []|[(number | {
  maximum?: number
  max?: number
})]|[(number | {
  maximum?: number
  max?: number
}), {
  ignoreTopLevelFunctions?: boolean
}]
// ----- max-statements-per-line -----
type MaxStatementsPerLine = []|[{
  max?: number
}]
// ----- multiline-comment-style -----
type MultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
}])
// ----- multiline-ternary -----
type MultilineTernary = []|[("always" | "always-multiline" | "never")]
// ----- new-cap -----
type NewCap = []|[{
  newIsCap?: boolean
  capIsNew?: boolean
  newIsCapExceptions?: string[]
  newIsCapExceptionPattern?: string
  capIsNewExceptions?: string[]
  capIsNewExceptionPattern?: string
  properties?: boolean
}]
// ----- new-parens -----
type NewParens = []|[("always" | "never")]
// ----- newline-after-var -----
type NewlineAfterVar = []|[("never" | "always")]
// ----- newline-per-chained-call -----
type NewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- no-bitwise -----
type NoBitwise = []|[{
  allow?: ("^" | "|" | "&" | "<<" | ">>" | ">>>" | "^=" | "|=" | "&=" | "<<=" | ">>=" | ">>>=" | "~")[]
  int32Hint?: boolean
}]
// ----- no-cond-assign -----
type NoCondAssign = []|[("except-parens" | "always")]
// ----- no-confusing-arrow -----
type NoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- no-console -----
type NoConsole = []|[{
  
  allow?: [string, ...(string)[]]
}]
// ----- no-constant-condition -----
type NoConstantCondition = []|[{
  checkLoops?: ("all" | "allExceptWhileTrue" | "none" | true | false)
}]
// ----- no-duplicate-imports -----
type NoDuplicateImports = []|[{
  includeExports?: boolean
  allowSeparateTypeImports?: boolean
}]
// ----- no-else-return -----
type NoElseReturn = []|[{
  allowElseIf?: boolean
}]
// ----- no-empty -----
type NoEmpty = []|[{
  allowEmptyCatch?: boolean
}]
// ----- no-empty-function -----
type NoEmptyFunction = []|[{
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "asyncFunctions" | "asyncMethods" | "privateConstructors" | "protectedConstructors" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- no-empty-pattern -----
type NoEmptyPattern = []|[{
  allowObjectPatternsAsParameters?: boolean
}]
// ----- no-eval -----
type NoEval = []|[{
  allowIndirect?: boolean
}]
// ----- no-extend-native -----
type NoExtendNative = []|[{
  exceptions?: string[]
}]
// ----- no-extra-boolean-cast -----
type NoExtraBooleanCast = []|[({
  enforceForInnerExpressions?: boolean
} | {
  enforceForLogicalOperands?: boolean
})]
// ----- no-extra-parens -----
type NoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
}])
// ----- no-fallthrough -----
type NoFallthrough = []|[{
  commentPattern?: string
  allowEmptyCase?: boolean
  reportUnusedFallthroughComment?: boolean
}]
// ----- no-global-assign -----
type NoGlobalAssign = []|[{
  exceptions?: string[]
}]
// ----- no-implicit-coercion -----
type NoImplicitCoercion = []|[{
  boolean?: boolean
  number?: boolean
  string?: boolean
  disallowTemplateShorthand?: boolean
  allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[]
}]
// ----- no-implicit-globals -----
type NoImplicitGlobals = []|[{
  lexicalBindings?: boolean
}]
// ----- no-inline-comments -----
type NoInlineComments = []|[{
  ignorePattern?: string
}]
// ----- no-inner-declarations -----
type NoInnerDeclarations = []|[("functions" | "both")]|[("functions" | "both"), {
  blockScopedFunctions?: ("allow" | "disallow")
}]
// ----- no-invalid-regexp -----
type NoInvalidRegexp = []|[{
  allowConstructorFlags?: string[]
}]
// ----- no-invalid-this -----
type NoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- no-irregular-whitespace -----
type NoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipJSXText?: boolean
}]
// ----- no-labels -----
type NoLabels = []|[{
  allowLoop?: boolean
  allowSwitch?: boolean
}]
// ----- no-magic-numbers -----
type NoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  ignoreEnums?: boolean
  ignoreNumericLiteralTypes?: boolean
  ignoreReadonlyClassProperties?: boolean
  ignoreTypeIndexes?: boolean
}]
// ----- no-misleading-character-class -----
type NoMisleadingCharacterClass = []|[{
  allowEscape?: boolean
}]
// ----- no-mixed-operators -----
type NoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- no-mixed-requires -----
type NoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- no-mixed-spaces-and-tabs -----
type NoMixedSpacesAndTabs = []|[("smart-tabs" | true | false)]
// ----- no-multi-assign -----
type NoMultiAssign = []|[{
  ignoreNonDeclaration?: boolean
}]
// ----- no-multi-spaces -----
type NoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
}]
// ----- no-multiple-empty-lines -----
type NoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- no-native-reassign -----
type NoNativeReassign = []|[{
  exceptions?: string[]
}]
// ----- no-param-reassign -----
type NoParamReassign = []|[({
  props?: false
} | {
  props?: true
  ignorePropertyModificationsFor?: string[]
  ignorePropertyModificationsForRegex?: string[]
})]
// ----- no-plusplus -----
type NoPlusplus = []|[{
  allowForLoopAfterthoughts?: boolean
}]
// ----- no-promise-executor-return -----
type NoPromiseExecutorReturn = []|[{
  allowVoid?: boolean
}]
// ----- no-redeclare -----
type NoRedeclare = []|[{
  builtinGlobals?: boolean
}]
// ----- no-restricted-exports -----
type NoRestrictedExports = []|[({
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
} | {
  restrictedNamedExports?: string[]
  restrictedNamedExportsPattern?: string
  restrictDefaultExports?: {
    direct?: boolean
    named?: boolean
    defaultFrom?: boolean
    namedFrom?: boolean
    namespaceFrom?: boolean
  }
})]
// ----- no-restricted-globals -----
type NoRestrictedGlobals = ((string | {
  name: string
  message?: string
})[] | []|[{
  
  globals: (string | {
    name: string
    message?: string
  })[]
  checkGlobalObject?: boolean
  globalObjects?: string[]
}])
// ----- no-restricted-imports -----
type NoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | ({
    [k: string]: unknown | undefined
  } | {
    [k: string]: unknown | undefined
  })[])
}])
// ----- no-restricted-modules -----
type NoRestrictedModules = ((string | {
  name: string
  message?: string
})[] | {
  paths?: (string | {
    name: string
    message?: string
  })[]
  patterns?: string[]
}[])
// ----- no-restricted-properties -----
type NoRestrictedProperties = ({
  [k: string]: unknown | undefined
} | {
  [k: string]: unknown | undefined
})[]
// ----- no-restricted-syntax -----
type NoRestrictedSyntax = (string | {
  selector: string
  message?: string
})[]
// ----- no-return-assign -----
type NoReturnAssign = []|[("except-parens" | "always")]
// ----- no-self-assign -----
type NoSelfAssign = []|[{
  props?: boolean
}]
// ----- no-sequences -----
type NoSequences = []|[{
  allowInParentheses?: boolean
}]
// ----- no-shadow -----
type NoShadow = []|[{
  builtinGlobals?: boolean
  hoist?: ("all" | "functions" | "never" | "types" | "functions-and-types")
  allow?: string[]
  ignoreOnInitialization?: boolean
  ignoreTypeValueShadow?: boolean
  ignoreFunctionTypeParameterNameValueShadow?: boolean
}]
// ----- no-shadow-restricted-names -----
type NoShadowRestrictedNames = []|[{
  reportGlobalThis?: boolean
}]
// ----- no-sync -----
type NoSync = []|[{
  allowAtRootLevel?: boolean
}]
// ----- no-tabs -----
type NoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- no-trailing-spaces -----
type NoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- no-undef -----
type NoUndef = []|[{
  typeof?: boolean
}]
// ----- no-underscore-dangle -----
type NoUnderscoreDangle = []|[{
  allow?: string[]
  allowAfterThis?: boolean
  allowAfterSuper?: boolean
  allowAfterThisConstructor?: boolean
  enforceInMethodNames?: boolean
  allowFunctionParams?: boolean
  enforceInClassFields?: boolean
  allowInArrayDestructuring?: boolean
  allowInObjectDestructuring?: boolean
}]
// ----- no-unneeded-ternary -----
type NoUnneededTernary = []|[{
  defaultAssignment?: boolean
}]
// ----- no-unreachable-loop -----
type NoUnreachableLoop = []|[{
  ignore?: ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[]
}]
// ----- no-unsafe-negation -----
type NoUnsafeNegation = []|[{
  enforceForOrderingRelations?: boolean
}]
// ----- no-unsafe-optional-chaining -----
type NoUnsafeOptionalChaining = []|[{
  disallowArithmeticOperators?: boolean
}]
// ----- no-unused-expressions -----
type NoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]
// ----- no-unused-vars -----
type NoUnusedVars = []|[(("all" | "local") | {
  vars?: ("all" | "local")
  varsIgnorePattern?: string
  args?: ("all" | "after-used" | "none")
  ignoreRestSiblings?: boolean
  argsIgnorePattern?: string
  caughtErrors?: ("all" | "none")
  caughtErrorsIgnorePattern?: string
  destructuredArrayIgnorePattern?: string
  ignoreClassWithStaticInitBlock?: boolean
  ignoreUsingDeclarations?: boolean
  reportUsedIgnorePattern?: boolean
})]
// ----- no-use-before-define -----
type NoUseBeforeDefine = []|[("nofunc" | {
  functions?: boolean
  classes?: boolean
  variables?: boolean
  allowNamedExports?: boolean
  enums?: boolean
  typedefs?: boolean
  ignoreTypeReferences?: boolean
})]
// ----- no-useless-computed-key -----
type NoUselessComputedKey = []|[{
  enforceForClassMembers?: boolean
}]
// ----- no-useless-escape -----
type NoUselessEscape = []|[{
  allowRegexCharacters?: string[]
}]
// ----- no-useless-rename -----
type NoUselessRename = []|[{
  ignoreDestructuring?: boolean
  ignoreImport?: boolean
  ignoreExport?: boolean
}]
// ----- no-void -----
type NoVoid = []|[{
  allowAsStatement?: boolean
}]
// ----- no-warning-comments -----
type NoWarningComments = []|[{
  terms?: string[]
  location?: ("start" | "anywhere")
  
  decoration?: [string, ...(string)[]]
}]
// ----- nonblock-statement-body-position -----
type NonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- object-curly-newline -----
type ObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- object-curly-spacing -----
type ObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- object-property-newline -----
type ObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- object-shorthand -----
type ObjectShorthand = ([]|[("always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed")] | []|[("always" | "methods" | "properties")]|[("always" | "methods" | "properties"), {
  avoidQuotes?: boolean
}] | []|[("always" | "methods")]|[("always" | "methods"), {
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
  avoidQuotes?: boolean
  avoidExplicitReturnArrows?: boolean
}])
// ----- one-var -----
type OneVar = []|[(("always" | "never" | "consecutive") | {
  separateRequires?: boolean
  var?: ("always" | "never" | "consecutive")
  let?: ("always" | "never" | "consecutive")
  const?: ("always" | "never" | "consecutive")
  using?: ("always" | "never" | "consecutive")
  awaitUsing?: ("always" | "never" | "consecutive")
} | {
  initialized?: ("always" | "never" | "consecutive")
  uninitialized?: ("always" | "never" | "consecutive")
})]
// ----- one-var-declaration-per-line -----
type OneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- operator-assignment -----
type OperatorAssignment = []|[("always" | "never")]
// ----- operator-linebreak -----
type OperatorLinebreak = []|[("after" | "before" | "none" | null)]|[("after" | "before" | "none" | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- padded-blocks -----
type PaddedBlocks = []|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
})]|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- padding-line-between-statements -----
type _PaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _PaddingLineBetweenStatementsStatementType = (("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with") | [("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"), ...(("*" | "block-like" | "cjs-export" | "cjs-import" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with"))[]])
type PaddingLineBetweenStatements = {
  blankLine: _PaddingLineBetweenStatementsPaddingType
  prev: _PaddingLineBetweenStatementsStatementType
  next: _PaddingLineBetweenStatementsStatementType
}[]
// ----- prefer-arrow-callback -----
type PreferArrowCallback = []|[{
  allowNamedFunctions?: boolean
  allowUnboundThis?: boolean
}]
// ----- prefer-const -----
type PreferConst = []|[{
  destructuring?: ("any" | "all")
  ignoreReadBeforeAssign?: boolean
}]
// ----- prefer-destructuring -----
type PreferDestructuring = []|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  enforceForRenamedProperties?: boolean
}]
// ----- prefer-promise-reject-errors -----
type PreferPromiseRejectErrors = []|[{
  allowEmptyReject?: boolean
}]
// ----- prefer-reflect -----
type PreferReflect = []|[{
  exceptions?: ("apply" | "call" | "delete" | "defineProperty" | "getOwnPropertyDescriptor" | "getPrototypeOf" | "setPrototypeOf" | "isExtensible" | "getOwnPropertyNames" | "preventExtensions")[]
}]
// ----- prefer-regex-literals -----
type PreferRegexLiterals = []|[{
  disallowRedundantWrapping?: boolean
}]
// ----- preserve-caught-error -----
type PreserveCaughtError = []|[{
  
  requireCatchParameter?: boolean
}]
// ----- quote-props -----
type QuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- quotes -----
type Quotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]
// ----- radix -----
type Radix = []|[("always" | "as-needed")]
// ----- require-atomic-updates -----
type RequireAtomicUpdates = []|[{
  allowProperties?: boolean
}]
// ----- require-unicode-regexp -----
type RequireUnicodeRegexp = []|[{
  requireFlag?: ("u" | "v")
}]
// ----- rest-spread-spacing -----
type RestSpreadSpacing = []|[("always" | "never")]
// ----- semi -----
type Semi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- semi-spacing -----
type SemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- semi-style -----
type SemiStyle = []|[("last" | "first")]
// ----- sonarjs/arrow-function-convention -----
type SonarjsArrowFunctionConvention = []|[{
  requireParameterParentheses?: boolean
  requireBodyBraces?: boolean
}]
// ----- sonarjs/class-name -----
type SonarjsClassName = []|[{
  format?: string
}]
// ----- sonarjs/cognitive-complexity -----
type SonarjsCognitiveComplexity = []|[(number | string)]|[(number | string), string]
// ----- sonarjs/comment-regex -----
type SonarjsCommentRegex = []|[{
  regularExpression?: string
  message?: string
  flags?: string
}]
// ----- sonarjs/content-length -----
type SonarjsContentLength = []|[{
  fileUploadSizeLimit?: number
  standardSizeLimit?: number
}]
// ----- sonarjs/cyclomatic-complexity -----
type SonarjsCyclomaticComplexity = []|[{
  threshold?: number
}]
// ----- sonarjs/enforce-trailing-comma -----
type SonarjsEnforceTrailingComma = []|[(_SonarjsEnforceTrailingCommaValue | {
  arrays?: _SonarjsEnforceTrailingCommaValueWithIgnore
  objects?: _SonarjsEnforceTrailingCommaValueWithIgnore
  imports?: _SonarjsEnforceTrailingCommaValueWithIgnore
  exports?: _SonarjsEnforceTrailingCommaValueWithIgnore
  functions?: _SonarjsEnforceTrailingCommaValueWithIgnore
})]
type _SonarjsEnforceTrailingCommaValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _SonarjsEnforceTrailingCommaValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- sonarjs/expression-complexity -----
type SonarjsExpressionComplexity = []|[{
  max?: number
}]
// ----- sonarjs/file-header -----
type SonarjsFileHeader = []|[{
  headerFormat?: string
  isRegularExpression?: boolean
}]
// ----- sonarjs/function-name -----
type SonarjsFunctionName = []|[{
  format?: string
}]
// ----- sonarjs/max-lines -----
type SonarjsMaxLines = []|[{
  maximum?: number
}]
// ----- sonarjs/max-lines-per-function -----
type SonarjsMaxLinesPerFunction = []|[{
  maximum?: number
}]
// ----- sonarjs/max-switch-cases -----
type SonarjsMaxSwitchCases = []|[number]
// ----- sonarjs/max-union-size -----
type SonarjsMaxUnionSize = []|[{
  threshold?: number
}]
// ----- sonarjs/nested-control-flow -----
type SonarjsNestedControlFlow = []|[{
  maximumNestingLevel?: number
}]
// ----- sonarjs/new-operator-misuse -----
type SonarjsNewOperatorMisuse = []|[{
  considerJSDoc?: boolean
}]
// ----- sonarjs/no-duplicate-string -----
type SonarjsNoDuplicateString = []|[{
  threshold?: number
  ignoreStrings?: string
}]
// ----- sonarjs/no-hardcoded-passwords -----
type SonarjsNoHardcodedPasswords = []|[{
  passwordWords?: string[]
}]
// ----- sonarjs/no-hardcoded-secrets -----
type SonarjsNoHardcodedSecrets = []|[{
  secretWords?: string
  randomnessSensibility?: number
}]
// ----- sonarjs/no-identical-functions -----
type SonarjsNoIdenticalFunctions = []|[number]
// ----- sonarjs/no-implicit-dependencies -----
type SonarjsNoImplicitDependencies = []|[{
  whitelist?: string[]
}]
// ----- sonarjs/no-intrusive-permissions -----
type SonarjsNoIntrusivePermissions = []|[{
  permissions?: string[]
}]
// ----- sonarjs/no-nested-functions -----
type SonarjsNoNestedFunctions = []|[{
  threshold?: number
}]
// ----- sonarjs/regex-complexity -----
type SonarjsRegexComplexity = []|[{
  threshold?: number
}]
// ----- sonarjs/variable-name -----
type SonarjsVariableName = []|[{
  format?: string
}]
// ----- sort-imports -----
type SortImports = []|[{
  ignoreCase?: boolean
  
  memberSyntaxSortOrder?: [("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single"), ("none" | "all" | "multiple" | "single")]
  ignoreDeclarationSort?: boolean
  ignoreMemberSort?: boolean
  allowSeparatedGroups?: boolean
}]
// ----- sort-keys -----
type SortKeys = []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
  ignoreComputedKeys?: boolean
}]
// ----- sort-vars -----
type SortVars = []|[{
  ignoreCase?: boolean
}]
// ----- space-before-blocks -----
type SpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]
// ----- space-before-function-paren -----
type SpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]
// ----- space-in-parens -----
type SpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- space-infix-ops -----
type SpaceInfixOps = []|[{
  int32Hint?: boolean
}]
// ----- space-unary-ops -----
type SpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- spaced-comment -----
type SpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- strict -----
type Strict = []|[("never" | "global" | "function" | "safe")]
// ----- switch-colon-spacing -----
type SwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- template-curly-spacing -----
type TemplateCurlySpacing = []|[("always" | "never")]
// ----- template-tag-spacing -----
type TemplateTagSpacing = []|[("always" | "never")]
// ----- unicode-bom -----
type UnicodeBom = []|[("always" | "never")]
// ----- unicorn/better-regex -----
type UnicornBetterRegex = []|[{
  sortCharacterClasses?: boolean
}]
// ----- unicorn/catch-error-name -----
type UnicornCatchErrorName = []|[{
  name?: string
  ignore?: unknown[]
}]
// ----- unicorn/consistent-function-scoping -----
type UnicornConsistentFunctionScoping = []|[{
  checkArrowFunctions?: boolean
}]
// ----- unicorn/escape-case -----
type UnicornEscapeCase = []|[("uppercase" | "lowercase")]
// ----- unicorn/expiring-todo-comments -----
type UnicornExpiringTodoComments = []|[{
  terms?: string[]
  ignore?: unknown[]
  ignoreDatesOnPullRequests?: boolean
  allowWarningComments?: boolean
  date?: string
}]
// ----- unicorn/explicit-length-check -----
type UnicornExplicitLengthCheck = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]
// ----- unicorn/filename-case -----
type UnicornFilenameCase = []|[({
  case?: ("camelCase" | "snakeCase" | "kebabCase" | "pascalCase")
  ignore?: unknown[]
  multipleFileExtensions?: boolean
} | {
  cases?: {
    camelCase?: boolean
    snakeCase?: boolean
    kebabCase?: boolean
    pascalCase?: boolean
  }
  ignore?: unknown[]
  multipleFileExtensions?: boolean
})]
// ----- unicorn/import-style -----
type UnicornImportStyle = []|[{
  checkImport?: boolean
  checkDynamicImport?: boolean
  checkExportFrom?: boolean
  checkRequire?: boolean
  extendDefaultStyles?: boolean
  styles?: _UnicornImportStyle_ModuleStyles
}]
type _UnicornImportStyleStyles = (false | _UnicornImportStyle_BooleanObject) | undefined
interface _UnicornImportStyle_ModuleStyles {
  [k: string]: _UnicornImportStyleStyles | undefined
}
interface _UnicornImportStyle_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/no-array-reduce -----
type UnicornNoArrayReduce = []|[{
  allowSimpleOperations?: boolean
}]
// ----- unicorn/no-array-reverse -----
type UnicornNoArrayReverse = []|[{
  allowExpressionStatement?: boolean
}]
// ----- unicorn/no-array-sort -----
type UnicornNoArraySort = []|[{
  allowExpressionStatement?: boolean
}]
// ----- unicorn/no-instanceof-builtins -----
type UnicornNoInstanceofBuiltins = []|[{
  useErrorIsError?: boolean
  strategy?: ("loose" | "strict")
  include?: string[]
  exclude?: string[]
}]
// ----- unicorn/no-keyword-prefix -----
type UnicornNoKeywordPrefix = []|[{
  
  disallowedPrefixes?: []|[string]
  checkProperties?: boolean
  onlyCamelCase?: boolean
}]
// ----- unicorn/no-null -----
type UnicornNoNull = []|[{
  checkStrictEquality?: boolean
}]
// ----- unicorn/no-typeof-undefined -----
type UnicornNoTypeofUndefined = []|[{
  checkGlobalVariables?: boolean
}]
// ----- unicorn/no-unnecessary-polyfills -----
type UnicornNoUnnecessaryPolyfills = []|[{
  targets: (string | unknown[] | {
    [k: string]: unknown | undefined
  })
}]
// ----- unicorn/no-useless-undefined -----
type UnicornNoUselessUndefined = []|[{
  checkArguments?: boolean
  checkArrowFunctionBody?: boolean
}]
// ----- unicorn/number-literal-case -----
type UnicornNumberLiteralCase = []|[{
  hexadecimalValue?: ("uppercase" | "lowercase")
}]
// ----- unicorn/numeric-separators-style -----
type UnicornNumericSeparatorsStyle = []|[{
  binary?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  octal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  hexadecimal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  number?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  onlyIfContainsSeparator?: boolean
}]
// ----- unicorn/prefer-add-event-listener -----
type UnicornPreferAddEventListener = []|[{
  excludedPackages?: string[]
}]
// ----- unicorn/prefer-array-find -----
type UnicornPreferArrayFind = []|[{
  checkFromLast?: boolean
}]
// ----- unicorn/prefer-array-flat -----
type UnicornPreferArrayFlat = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-at -----
type UnicornPreferAt = []|[{
  getLastElementFunctions?: unknown[]
  checkAllIndexAccess?: boolean
}]
// ----- unicorn/prefer-export-from -----
type UnicornPreferExportFrom = []|[{
  ignoreUsedVariables?: boolean
}]
// ----- unicorn/prefer-number-properties -----
type UnicornPreferNumberProperties = []|[{
  checkInfinity?: boolean
  checkNaN?: boolean
}]
// ----- unicorn/prefer-object-from-entries -----
type UnicornPreferObjectFromEntries = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-single-call -----
type UnicornPreferSingleCall = []|[{
  ignore?: unknown[]
}]
// ----- unicorn/prefer-structured-clone -----
type UnicornPreferStructuredClone = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-switch -----
type UnicornPreferSwitch = []|[{
  minimumCases?: number
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]
// ----- unicorn/prefer-ternary -----
type UnicornPreferTernary = []|[("always" | "only-single-line")]
// ----- unicorn/prevent-abbreviations -----
type UnicornPreventAbbreviations = []|[{
  checkProperties?: boolean
  checkVariables?: boolean
  checkDefaultAndNamespaceImports?: (boolean | string)
  checkShorthandImports?: (boolean | string)
  checkShorthandProperties?: boolean
  checkFilenames?: boolean
  extendDefaultReplacements?: boolean
  replacements?: _UnicornPreventAbbreviations_Abbreviations
  extendDefaultAllowList?: boolean
  allowList?: _UnicornPreventAbbreviations_BooleanObject
  ignore?: unknown[]
}]
type _UnicornPreventAbbreviationsReplacements = (false | _UnicornPreventAbbreviations_BooleanObject) | undefined
interface _UnicornPreventAbbreviations_Abbreviations {
  [k: string]: _UnicornPreventAbbreviationsReplacements | undefined
}
interface _UnicornPreventAbbreviations_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/relative-url-style -----
type UnicornRelativeUrlStyle = []|[("never" | "always")]
// ----- unicorn/string-content -----
type UnicornStringContent = []|[{
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      message?: string
    }) | undefined
  }
}]
// ----- unicorn/switch-case-braces -----
type UnicornSwitchCaseBraces = []|[("always" | "avoid")]
// ----- unicorn/template-indent -----
type UnicornTemplateIndent = []|[{
  indent?: (string | number)
  tags?: string[]
  functions?: string[]
  selectors?: string[]
  comments?: string[]
}]
// ----- unicorn/text-encoding-identifier-case -----
type UnicornTextEncodingIdentifierCase = []|[{
  withDash?: boolean
}]
// ----- use-isnan -----
type UseIsnan = []|[{
  enforceForSwitchCase?: boolean
  enforceForIndexOf?: boolean
}]
// ----- valid-typeof -----
type ValidTypeof = []|[{
  requireStringLiterals?: boolean
}]
// ----- wrap-iife -----
type WrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- yield-star-spacing -----
type YieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]
// ----- yoda -----
type Yoda = []|[("always" | "never")]|[("always" | "never"), {
  exceptRange?: boolean
  onlyEquality?: boolean
}]
// Names of all the configs
export type ConfigNames = 'oliveryasuna/ignores/global' | 'oliveryasuna/ignores/git' | 'oliveryasuna/imports/base' | 'oliveryasuna/imports/typescript' | 'oliveryasuna/javascript/setup' | 'oliveryasuna/javascript/rules/base' | 'oliveryasuna/javascript/rules/tests' | 'oliveryasuna/jsdoc/setup' | 'oliveryasuna/jsdoc/rules/base' | 'oliveryasuna/jsdoc/rules/typescript' | 'oliveryasuna/sonarjs/recommended' | 'oliveryasuna/sonarjs/rules/base' | 'oliveryasuna/stylistic/recommended' | 'typescript-eslint/base' | 'typescript-eslint/eslint-recommended' | 'typescript-eslint/stylistic-type-checked' | 'oliveryasuna/stylistic/rules/base' | 'oliveryasuna/test/setup' | 'oliveryasuna/test/rules/base' | 'oliveryasuna/typescript/setup' | 'oliveryasuna/typescript/rules/disable' | 'oliveryasuna/typescript/rules/base' | 'oliveryasuna/typescript/rules/custom' | 'oliveryasuna/typescript/rules/dts' | 'oliveryasuna/typescript/rules/tsx' | 'oliveryasuna/unicorn/recommended' | 'oliveryasuna/unicorn/rules/base' | 'oliveryasuna/extra/allow-default-export' | 'oliveryasuna/extra/vite-env-fix';
