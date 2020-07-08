/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ListItemTextBase from '.';

describe('ListItemTextBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ListItemTextBase primary="Primary text" secondary="Secondary text" />,
    );

    expect(container).toMatchSnapshot();
  });
});
