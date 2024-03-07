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

const defaultColors = {
  '2019': '#03BBBB',
  '2020': '#1594A3',
  '2021': '#225479',
};

mockResizeObserver();

describe('BarChart', () => {
  const Component = (
    <BarChart barKeys={defaultBarKeys} colors={defaultColors} data={DATA} />
  );
  standard(Component);
});
