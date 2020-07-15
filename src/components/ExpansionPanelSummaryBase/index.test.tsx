/**
 * @prettier
 */

import * as React from 'react';

import ChevronDown from '~/icons/ChevronDown';
import render from '~/helpers/test/render';

import ExpansionPanelSummaryBase from '.';

describe('ExpansionPanelSummaryBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <ExpansionPanelSummaryBase expandIcon={<ChevronDown />}>
        <div>ExpansionPanelSummaryBase</div>
      </ExpansionPanelSummaryBase>,
    );

    expect(container).toMatchSnapshot();
  });
});
