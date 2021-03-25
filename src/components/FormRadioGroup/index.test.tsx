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

import { FormRadioGroup } from '.';

describe.skip('FormRadioGroup', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
      <FormRadioGroup
        id="primaryradiogroup"
        label="The label"
        name="radiooptions"
        options={[
          { id: 'one', label: 'one', value: 'one' },
          { id: 'two', label: 'two', value: 'two' },
        ]}
      />,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
