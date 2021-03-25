/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { render, THEMES } from '../../helpers/test';

import { FormSwitch } from '.';

describe('Alert', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
      <FormSwitch id="FormSwitchId" label="Form Switch Label" />,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
