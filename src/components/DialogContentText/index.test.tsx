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

import { DialogContentText } from '.';

describe('DialogContentText', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
      <DialogContentText>Hey</DialogContentText>,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
