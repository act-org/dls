/**
 * @prettier
 */

import * as React from 'react';

import ButtonBase from '.';

export const component = (): React.ReactElement<any> => (
  <ButtonBase>Click Me</ButtonBase>
);

export default {
  component: ButtonBase,
  parameters: {
    info: {
      text:
        'This is the base button component. It is not intended to be used directly.',
    },
  },
  title: 'ButtonBase',
};
