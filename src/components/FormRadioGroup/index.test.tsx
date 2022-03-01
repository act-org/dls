/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { standard } from '~/helpers/test';

import { FormRadioGroup } from '.';

jest.mock('@mui/material/utils/useId', () => {
  let initialId = 12345;
  return jest.fn(() => {
    // eslint-disable-next-line no-plusplus
    return `mui-${initialId++}`;
  });
});

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
