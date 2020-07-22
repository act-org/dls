/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ModalBase from '.';

describe('ModalBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ModalBase disableBackdropClick open>
        <div>Modal content</div>
      </ModalBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
