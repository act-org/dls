/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { FormInput } from '.';

describe('FormInput', () => {
  const Component = (
    <FormInput label="Label" placeholder="Placeholder" value="test" />
  );
  standard(Component);
});
