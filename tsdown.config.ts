import {readFile} from 'node:fs/promises';
import type {UserConfig} from 'tsdown';

const config = ({
  entry: './src/index.ts',
  minify: true,
  treeshake: {moduleSideEffects: false},
  tsconfig: './tsconfig.build.json',
  deps: {neverBundle: Object.keys((JSON.parse(await readFile('./package.json', 'utf8')) as Record<string, unknown>).dependencies as Record<string, string> ?? {})},
  dts: true,
  platform: 'node',
  sourcemap: true
} satisfies UserConfig);

export default config;
