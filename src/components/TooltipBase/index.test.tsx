/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import TooltipBase from '.';

describe('TooltipBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <TooltipBase arrow placement="top" title="Tooltip title">
        <div>Tooltip Base</div>
      </TooltipBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
