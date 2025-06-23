/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { CustomizedLabel } from '.';

describe('CustomizedLabel', () => {
  const Component = <CustomizedLabel value="Test" x={160} y={177} />;
  standard(Component);
});
