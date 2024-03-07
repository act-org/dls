/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { standard } from '~/helpers/test';

import { defaultData } from './mocks';

import { Map } from '.';

describe('Map', () => {
  const Component = (
    <Map data={defaultData} height={450} mapboxAccessToken="" width="100%" />
  );
  standard(Component);
});
