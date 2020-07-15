/**
 * @prettier
 */

import * as React from 'react';

import ChevronDown from '~/icons/ChevronDown';

import ExpansionPanelSummaryBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ExpansionPanelSummaryBase expandIcon={<ChevronDown />}>
    <div>ExpansionPanelSummary</div>
  </ExpansionPanelSummaryBase>
);

export default {
  component: ExpansionPanelSummaryBase,
  parameters: {
    info: {
      text: 'This is the base variant of the ExpansionPanelSummary component.',
    },
  },
  title: 'Atoms/ExpansionPanelSummary',
};
