/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { mockResizeObserver, standard } from '~/helpers/test';

import { PieChart } from '.';

const DATA = [
  { name: 'Male', value: 220 },
  { name: 'Female', value: 450 },
  { name: 'Unknown', value: 120 },
  { name: 'Other', value: 15 },
];

describe('PieChart', () => {
  const Component = <PieChart data={DATA} />;
  standard(Component);
});

mockResizeObserver();

describe('PieChart with title', () => {
  const Component = (
    <PieChart data={DATA} titleProps={{ title: 'Test Title' }} />
  );
  standard(Component);
});
