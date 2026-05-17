import * as fc from 'fast-check';
import {describe, it} from 'vitest';

/**
 * Recursively walks a laws object and creates describe/it blocks.
 *
 * Nested objects become nested describe blocks. Leaf properties
 * (fc.IProperty instances) become it blocks.
 * @param laws - The laws object to run.
 */
const runLaws = ((laws: Record<string, unknown>): void => {
  for(const [name, law] of Object.entries(laws)) {
    if((law !== null) && (typeof law === 'object') && !('generate' in law)) {
      // Nested law group (e.g., additiveGroupLaws)
      describe(name, (() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        runLaws(law as Record<string, unknown>);
      }));
    } else {
      // eslint-disable-next-line sonarjs/assertions-in-tests
      it(name, (() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
        fc.assert((law as fc.IProperty<unknown>), {numRuns: 200});
      }));
    }
  }
});

export {
  runLaws
};
