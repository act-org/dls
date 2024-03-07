/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { mockResizeObserver, standard } from '~/helpers/test';

import { AreaChart } from '.';

const DATA = [
  {
    A: 7,
    name: 'Day 1',
  },
  {
    A: 15,
    name: 'Day 2',
  },
  {
    A: 18,
    name: 'Day 3',
  },
];

mockResizeObserver();

describe('AreaChart', () => {
  const Component = <AreaChart areaKeys={['A']} data={DATA} />;
  standard(Component);
});
