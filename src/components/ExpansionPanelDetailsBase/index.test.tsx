/**
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import ExpansionPanelDetailsBase from '.';

describe('ExpansionPanelDetailsBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ExpansionPanelDetailsBase>
        <div>ExpansionPanelDetailsBase</div>
      </ExpansionPanelDetailsBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
