/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { mockResizeObserver, standard } from '~/helpers/test';

import { DATA, processDataFn } from './mocks';

import { LineChart } from '.';

mockResizeObserver();

describe('LineChart', () => {
  const Component = <LineChart data={processDataFn(DATA)} />;
  standard(Component);
});
