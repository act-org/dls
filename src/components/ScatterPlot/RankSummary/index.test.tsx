/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { mockResizeObserver, standard } from '~/helpers/test';

import { RankSummary } from '.';

const DATA = [
  { label: 'FAFSA', x: 0.9, y: 32 },
  { label: 'SAT Scores', x: 0.85, y: 27 },
  { label: 'Website Inquiry', x: 1.8, y: 23 },
];

mockResizeObserver();

describe('RankSummary', () => {
  const Component = <RankSummary data={DATA} />;
  standard(Component);
});
