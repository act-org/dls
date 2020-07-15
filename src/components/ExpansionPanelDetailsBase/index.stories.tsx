/**
 * @prettier
 */

import * as React from 'react';

import ExpansionPanelDetailsBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ExpansionPanelDetailsBase>
    <div>ExpansionPanelDetails</div>
  </ExpansionPanelDetailsBase>
);

export default {
  component: ExpansionPanelDetailsBase,
  parameters: {
    info: {
      text: 'This is the base variant of the ExpansionPanelDetails component.',
    },
  },
  title: 'Atoms/ExpansionPanelDetails',
};
