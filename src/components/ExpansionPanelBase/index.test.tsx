/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import ExpansionPanelBase from '.';

describe('ExpansionPanelBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ExpansionPanelBase defaultExpanded expanded onChange={noop} square>
        <div>ExpansionPanelBase</div>
      </ExpansionPanelBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
