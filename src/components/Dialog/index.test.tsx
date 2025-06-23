/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import UserEvent from '@testing-library/user-event';

import { render, standard } from '~/helpers/test';

import { Dialog } from '.';

describe('Dialog', () => {
  const Component = (
    <Dialog open title="Test Title">
      Hey
    </Dialog>
  );
  standard(Component);

  it('should publish an onClose event when the close icon is clicked', async () => {
    const onClose = jest.fn();
    const rendered = render(
      <Dialog onClose={onClose} open title="Test Title">
        Dialog Content
      </Dialog>,
      'ACT',
    );
    const user = UserEvent.setup();
    await user.click(rendered.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });

  it('should not publish an onClose event when no onClose hander is provided', async () => {
    const onClose = jest.fn();
    const rendered = render(
      <Dialog open title="Test Title">
        Dialog Content
      </Dialog>,
      'ACT',
    );
    const user = UserEvent.setup();
    await user.click(rendered.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});
