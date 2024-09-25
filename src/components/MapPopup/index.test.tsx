/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { MapPopup } from '.';

describe.skip('MapPopup', () => {
  const Component = (
    <MapPopup
      popupProps={{ latitude: 40, longitude: -100 }}
      rows={[
        {
          title: 'Test',
          value: 'Test Value',
        },
        {
          title: 'Link',
          value: 'Link Value',
        },
      ]}
    />
  );
  standard(Component);
});
