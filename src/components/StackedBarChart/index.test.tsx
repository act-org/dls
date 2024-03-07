/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { mockResizeObserver, standard } from '~/helpers/test';

import { defaultBarKeys } from './mocks';

import { StackedBarChart } from '.';

const DATA = [
  {
    '2019': 900,
    '2019a': 250,
    '2019b': 250,
    '2020': 823,
    '2020a': 300,
    '2020b': 300,
    '2021': 925,
    '2021a': 350,
    '2021b': 250,
    name: 'California',
  },
  {
    '2019': 575,
    '2019a': 250,
    '2019b': 250,
    '2020': 565,
    '2020a': 300,
    '2020b': 300,
    '2021': 580,
    '2021a': 350,
    '2021b': 250,
    name: 'Nevada',
  },
];

mockResizeObserver();

describe('StackedBarChart', () => {
  const Component = <StackedBarChart barKeys={defaultBarKeys} data={DATA} />;
  standard(Component);
});
