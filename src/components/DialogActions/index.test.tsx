/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { Button } from '~/components/Button';
import { render, THEMES } from '~/helpers/test';

import { DialogActions } from '.';

describe('DialogActions', () => {
  test.each(THEMES)('%s theme matches the snapshot', theme => {
    const { container } = render(
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>,
      theme,
    );

    expect(container).toMatchSnapshot();
  });
});
