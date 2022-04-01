/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { standard } from '~/helpers/test';

import { FormSwitch } from '.';

describe('FormSwitch', () => {
  const Component = (
    <FormSwitch id="uniqueId" label="Form Switch Label" value={false} />
  );
  standard(Component);
});
