/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { mockResizeObserver, standard } from '~/helpers/test';

import { OverlappedBarChart } from '.';

const DATA = [
  { applicants: 323, inquiries: 6536 },
  { applicants: 312, inquiries: 5550 },
  { applicants: 284, inquiries: 6711 },
];

mockResizeObserver();

describe('OverlappedBarChart', () => {
  const Component = (
    <OverlappedBarChart barKeys={['inquiries', 'applicants']} data={DATA} />
  );
  standard(Component);
});
