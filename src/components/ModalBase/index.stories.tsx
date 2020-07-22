/**
 * @prettier
 */

import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';

import ModalBase from '.';

export const Base = (): React.ReactElement<any> => (
  <ModalBase
    disableBackdropClick
    disableEscapeKeyDown
    open={boolean('Open?', true)}
  >
    <div>Modal Content</div>
  </ModalBase>
);

export default {
  component: ModalBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Modal component.',
    },
  },
  title: 'Atoms/Modal',
};
