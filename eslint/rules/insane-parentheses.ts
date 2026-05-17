/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param */

import type {TSESLint, TSESTree} from '@typescript-eslint/utils';
import {AST_NODE_TYPES, AST_TOKEN_TYPES, ESLintUtils} from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(_ => '');

type Node = TSESTree.Node;
type RuleContext = TSESLint.RuleContext<'missingParentheses', never[]>;
type RuleFixer = TSESLint.RuleFixer;
type Token = TSESTree.Token;
type SourceCode = TSESLint.SourceCode;

type ParenthesesPair = (
  {
    readonly open: '(';
    readonly close: ')';
  }
  | {
    readonly open: '{';
    readonly close: '}';
  }
  | {
    readonly open: '[';
    readonly close: ']';
  }
  | {
    readonly open: '<';
    readonly close: '>';
  }
);

const PARENTHESES_PAIRS: (readonly ParenthesesPair[]) = ([
  {
    open: '(',
    close: ')'
  },
  {
    open: '{',
    close: '}'
  },
  {
    open: '[',
    close: ']'
  },
  {
    open: '<',
    close: '>'
  }
] as const);

/**
 * Checks if a node is already wrapped.
 */
const isAlreadyWrapped = ((node: Node, context: RuleContext): boolean => {
  const sourceCode: SourceCode = context.sourceCode;
  const tokenBefore: (Token | null) = sourceCode.getTokenBefore(node);
  const tokenAfter: (Token | null) = sourceCode.getTokenAfter(node);

  if(!tokenBefore || !tokenAfter) {
    return false;
  }

  if((tokenBefore.type !== AST_TOKEN_TYPES.Punctuator) || (tokenAfter.type !== AST_TOKEN_TYPES.Punctuator)) {
    return false;
  }

  return PARENTHESES_PAIRS.some((pair: ParenthesesPair): boolean => ((tokenBefore.value === pair.open) && (tokenAfter.value === pair.close)));
});

/**
 * Checks if a node is in a context where it's already grouped.
 */
const isAlreadyInGroupedContext = ((node: Node, parent: (Node | undefined)): boolean => {
  if(!parent) {
    return false;
  }

  // Already in `if` statement condition.
  if((parent.type === AST_NODE_TYPES.IfStatement) && (parent.test === node)) {
    return true;
  }

  // Already in `for` statement condition.
  // eslint-disable-next-line sonarjs/different-types-comparison
  if((parent.type === AST_NODE_TYPES.ForStatement) && (parent.test === node)) {
    return true;
  }

  // Already in `while` statement condition.
  if((parent.type === AST_NODE_TYPES.WhileStatement) && (parent.test === node)) {
    return true;
  }

  // Already in function call arguments.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  if((parent.type === AST_NODE_TYPES.CallExpression) && parent.arguments.includes(node as TSESTree.CallExpressionArgument) && (parent.arguments.length === 1)) {
    return true;
  }

  // Already in array literal.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  if((parent.type === AST_NODE_TYPES.ArrayExpression) && (parent.elements.includes(node as (TSESTree.SpreadElement | TSESTree.Expression)))) {
    return true;
  }

  // Already in JSX attribute value.
  // eslint-disable-next-line sonarjs/different-types-comparison
  if((parent.type === AST_NODE_TYPES.JSXAttribute) && (parent.value === node)) {
    return true;
  }

  // Already in template literal expression.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  if(((parent.type === AST_NODE_TYPES.TemplateLiteral)) && (parent.expressions.includes(node as TSESTree.Expression))) {
    return true;
  }

  // Already in TypeScript template literal.
  if(parent.type === AST_NODE_TYPES.TSTemplateLiteralType) {
    return true;
  }

  // Already part of a larger logical expression with same operator.
  if((parent.type === AST_NODE_TYPES.LogicalExpression) && (node.type === AST_NODE_TYPES.LogicalExpression)) {
    const parentOp = parent.operator;
    const nodeOp = node.operator;

    // Skip wrapping if it's the same logical operator (|| with || or && with
    // &&).
    if(parentOp === nodeOp) {
      return true;
    }
  }

  return false;
});

/**
 * Checks if a node needs parentheses.
 */
const needsParentheses = ((node: Node, parent: (Node | undefined), context: RuleContext): boolean => {
  // Skip if already wrapped or in a grouped context.
  if(isAlreadyWrapped(node, context) || isAlreadyInGroupedContext(node, parent)) {
    return false;
  }

  // Binary expressions (comparisons, logical operations, arithmetic).
  if((node.type === AST_NODE_TYPES.BinaryExpression) || (node.type === AST_NODE_TYPES.LogicalExpression)) {
    return true;
  }

  // Conditional expressions (ternary).
  if(node.type === AST_NODE_TYPES.ConditionalExpression) {
    return true;
  }

  // Arrow functions.
  if(node.type === AST_NODE_TYPES.ArrowFunctionExpression) {
    return true;
  }

  // New expressions.
  if(node.type === AST_NODE_TYPES.NewExpression) {
    return true;
  }

  // TypeScript: Conditional types.
  if(node.type === AST_NODE_TYPES.TSConditionalType) {
    return true;
  }

  // TypeScript: `infer` type.
  if(node.type === AST_NODE_TYPES.TSInferType) {
    return true;
  }

  // TypeScript: Type assertions (`as` expressions).
  if(node.type === AST_NODE_TYPES.TSAsExpression) {
    return true;
  }

  // TypeScript: Type assertions (`satisfies` expressions).
  if(node.type === AST_NODE_TYPES.TSSatisfiesExpression) {
    return true;
  }

  // TypeScript: `typeof` operator.
  if(node.type === AST_NODE_TYPES.TSTypeOperator) {
    return true;
  }

  return false;
});

/**
 * Creates a fixer function to add parentheses.
 */
const createFixer = ((node: Node, fixer: RuleFixer): (readonly TSESLint.RuleFix[]) => ([
  fixer.insertTextBefore(node, '('),
  fixer.insertTextAfter(node, ')')
] as const));

type RuleListeners = TSESLint.RuleListener;

interface MessageIds {
  readonly missingParentheses: 'missingParentheses';
}

// eslint-disable-next-line import-x/no-default-export
export default createRule<never[], (keyof MessageIds)>({
  name: 'insane-parentheses',
  meta: {
    type: 'layout',
    docs: {description: 'Enforce extra parentheses around expressions for clarity'},
    fixable: 'code',
    schema: [],
    messages: {missingParentheses: 'Expression should be wrapped in parentheses'}
  },
  defaultOptions: [],
  create: ((context: RuleContext): RuleListeners => {
    const handleNode = ((node: Node): void => {
      if(needsParentheses(node, node.parent, context)) {
        context.report({
          node: node,
          messageId: 'missingParentheses',
          fix: ((fixer: RuleFixer): (readonly TSESLint.RuleFix[]) => createFixer(node, fixer))
        });
      }
    });

    return {
      BinaryExpression: handleNode,
      LogicalExpression: handleNode,
      ConditionalExpression: handleNode,
      ArrowFunctionExpression: handleNode,
      NewExpression: handleNode,
      TSConditionalType: handleNode,
      TSInferType: handleNode,
      TSAsExpression: handleNode,
      TSSatisfiesExpression: handleNode,
      TSTypeOperator: handleNode
    };
  })
});
