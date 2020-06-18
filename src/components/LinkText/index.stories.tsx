/**
 * @prettier
 */

import * as React from 'react';
import { select, text as knobText } from '@storybook/addon-knobs';

import LinkText from '.';

export const text = (): React.ReactElement<any> => (
  <LinkText
    target={select(
      'Target',
      {
        Blank: '_blank',
        Parent: '_parent',
        Self: '_self',
        Top: '_top',
      },
      '_blank',
    )}
    to={knobText('To', 'https://www.act.org')}
  >
    {knobText('Text', 'Click Me')}
  </LinkText>
);

export default {
  component: LinkText,
  parameters: {
    info: {
      text: 'This is the text variant of the Link component.',
    },
  },
  title: 'Atoms/Link',
};
