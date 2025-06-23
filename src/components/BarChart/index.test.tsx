/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { mockResizeObserver, standard } from '~/helpers/test';

import { defaultBarKeys } from './mocks';

import { BarChart } from '.';

const DATA = [
  {
    '2019': 900,
    '2020': 823,
    '2021': 925,
    name: 'California',
  },
  {
    '2019': 575,
    '2020': 565,
    '2021': 580,
    name: 'Nevada',
  },
];

mockResizeObserver();

describe('BarChart', () => {
  const Component = <BarChart barKeys={defaultBarKeys} data={DATA} />;
  standard(Component);
});
