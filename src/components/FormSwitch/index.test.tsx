/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { FormSwitch } from '.';

describe('FormSwitch', () => {
  const Component = (
    <FormSwitch id="uniqueId" label="Form Switch Label" value={false} />
  );
  standard(Component);
});
