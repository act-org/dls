/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import ExpansionPanelBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ExpansionPanelBase
    expanded={boolean('Expanded?', false)}
    onChange={action('onChange()')}
    square={boolean('Square?', false)}
  >
    <div>ExpansionPanel</div>
  </ExpansionPanelBase>
);

export default {
  component: ExpansionPanelBase,
  parameters: {
    info: {
      text: 'This is the base variant of the ExpansionPanel component.',
    },
  },
  title: 'Atoms/ExpansionPanel',
};
