/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { PieLegend } from '.';

describe('PieLegend', () => {
  const Component = (
    <PieLegend
      payload={[
        {
          color: '#7FC4E1',
          payload: {
            strokeDasharray: 2,
            value: 120,
          },
          value: '120',
        },
      ]}
      pieTotalValue={50}
    />
  );
  standard(Component);
});
