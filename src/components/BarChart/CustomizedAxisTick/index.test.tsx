/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { CustomizedAxisTick } from '.';

describe('CustomizedAxisTick', () => {
  const Component = (
    <CustomizedAxisTick
      dx={9}
      height={670}
      orientation="bottom"
      payload={{ value: 'Latino/Hispanic/Chicano' }}
      width={60}
      x={160}
      y={177}
    />
  );
  standard(Component);
});
