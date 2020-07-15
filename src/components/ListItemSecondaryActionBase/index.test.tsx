/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ListItemSecondaryActionBase from '.';

describe('ListItemSecondaryActionBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ListItemSecondaryActionBase>
        ListItemSecondaryAction
      </ListItemSecondaryActionBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
