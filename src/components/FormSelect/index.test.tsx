/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { render, THEMES } from '~/helpers/test';

import { FormSelect } from '.';

describe('FormSelect', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
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
      />,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
