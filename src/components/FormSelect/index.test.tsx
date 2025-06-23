/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { FormSelect } from '.';

describe('FormSelect', () => {
  const Component = (
    <FormSelect
      label="Select Label"
      options={[
        {
          label: 'One',
          value: 'ONE',
        },
        {
          label: 'Two',
          value: 'TWO',
        },
        {
          label: 'Three',
          value: 'THREE',
        },
      ]}
      placeholder="Placeholder"
      value="ONE"
      variant="outlined"
    />
  );
  standard(Component);
});
