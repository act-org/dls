/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ToolbarBase from '.';

describe('ToolbarBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ToolbarBase disableGutters variant="regular">
        Toolbar Base
      </ToolbarBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
