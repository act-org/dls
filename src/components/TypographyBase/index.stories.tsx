/**
 * @prettier
 */

import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import TypographyBase from '.';

export const Base = (): React.ReactElement<any> => (
  <TypographyBase
    color={select(
      'Color',
      {
        Error: 'error',
        Inherit: 'inherit',
        Initial: 'initial',
        Primary: 'primary',
        Secondary: 'secondary',
        TextPrimary: 'textPrimary',
        TextSecondary: 'textSecondary',
      },
      'initial',
    )}
    variant={select(
      'Variant',
      {
        Body1: 'body1',
        Body2: 'body2',
        Button: 'button',
        Caption: 'caption',
        H1: 'h1',
        H2: 'h2',
        H3: 'h3',
        H4: 'h4',
        H5: 'h5',
        H6: 'h6',
        Inherit: 'inherit',
        Overline: 'overline',
        SrOnly: 'srOnly',
        Subtitle1: 'subtitle1',
        Subtitle2: 'subtitle2',
      },
      'body1',
    )}
  >
    {text('Text', 'Typography')}
  </TypographyBase>
);

export default {
  component: TypographyBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Typography component.',
    },
  },
  title: 'Atoms/Typography',
};
