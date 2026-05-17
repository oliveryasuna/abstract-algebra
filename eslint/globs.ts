const GLOB_SRC_EXT = '?([cm])[jt]s?(x)';
const GLOB_SRC = '**/*.?([cm])[jt]s?(x)';

const GLOB_JS = '**/*.?([cm])js';
const GLOB_JSX = '**/*.jsx';

const GLOB_TS = '**/*.?([cm])ts';
const GLOB_TSX = '**/*.tsx';

const GLOB_STYLE = '**/*.{c,le,sc}ss';
const GLOB_CSS = '**/*.css';
const GLOB_LESS = '**/*.less';
const GLOB_SCSS = '**/*.scss';

const GLOB_JSON = '**/*.json';
const GLOB_JSON5 = '**/*.json5';
const GLOB_JSONC = '**/*.jsonc';

const GLOB_MARKDOWN = '**/*.md';
const GLOB_VUE = '**/*.vue';
const GLOB_YAML = '**/*.y?(a)ml';
const GLOB_HTML = '**/*.htm?(l)';

const GLOB_TESTS = [`**/*.test.${GLOB_SRC_EXT}`];

const GLOB_ALL_SRC: string[] = [
  GLOB_SRC,
  GLOB_STYLE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_MARKDOWN,
  GLOB_VUE,
  GLOB_YAML,
  GLOB_HTML
];

const GLOB_NODE_MODULES = ('**/node_modules' as const);
const GLOB_DIST = ('**/dist' as const);
const GLOB_LOCKFILE: string[] = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb'
];

const GLOB_EXCLUDE: string[] = [
  GLOB_NODE_MODULES,
  GLOB_DIST,
  ...GLOB_LOCKFILE,

  '**/output',
  '**/.output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/fixtures',
  '**/.changeset',
  '**/.idea',
  '**/.cache',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*'
];

export {
  GLOB_SRC_EXT,
  GLOB_SRC,
  GLOB_JS,
  GLOB_JSX,
  GLOB_TS,
  GLOB_TSX,
  GLOB_STYLE,
  GLOB_CSS,
  GLOB_LESS,
  GLOB_SCSS,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_MARKDOWN,
  GLOB_VUE,
  GLOB_YAML,
  GLOB_HTML,
  GLOB_TESTS,
  GLOB_ALL_SRC,
  GLOB_NODE_MODULES,
  GLOB_DIST,
  GLOB_LOCKFILE,
  GLOB_EXCLUDE
};
