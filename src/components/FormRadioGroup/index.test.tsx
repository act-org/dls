/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { FormRadioGroup } from '.';

describe('FormRadioGroup', () => {
  const Component = (
    <FormRadioGroup
      id="primaryradiogroup"
      label="The label"
      name="radiooptions"
      options={[
        { id: 'one', label: 'one', value: 'one' },
        { id: 'two', label: 'two', value: 'two' },
      ]}
    />
  );
  standard(Component);
});
