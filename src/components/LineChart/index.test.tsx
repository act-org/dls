/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { mockResizeObserver, standard } from '~/helpers/test';

import { DATA, processDataFn } from './mocks';

import { LineChart } from '.';

mockResizeObserver();

describe('LineChart', () => {
  const Component = <LineChart data={processDataFn(DATA)} />;
  standard(Component);
});
