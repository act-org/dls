/**
 * @prettier
 */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import TooltipBase from '.';

export const Base = (): React.ReactElement<any> => (
  <TooltipBase
    arrow={boolean('Has Arrow?', true)}
    onClose={action('onClose()')}
    onOpen={action('onOpen()')}
    open={boolean('Open?', true)}
    placement={select(
      'Placement',
      {
        Bottom: 'bottom',
        BottomEnd: 'bottom-end',
        BottomStart: 'bottom-start',
        Left: 'left',
        LeftEnd: 'left-end',
        LeftStart: 'left-start',
        Right: 'right',
        RightEnd: 'right-end',
        RightStart: 'right-start',
        Top: 'top',
        TopEnd: 'top-end',
        TopStart: 'top-start',
      },
      'top',
    )}
    title={text('Title', 'Tooltip title goes here.')}
  >
    <div>Tooltip Base</div>
  </TooltipBase>
);

export default {
  component: TooltipBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Tooltip component.',
    },
  },
  title: 'Atoms/Tooltip',
};
