/**
 * @prettier
 */

import * as React from 'react';
import * as MaterialCommunityIcons from 'mdi-material-ui';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import IconBase from '.';

storiesOf('Atoms/Icon', module).add(
  'Base',
  (): React.ReactElement<any> => (
    <IconBase
      color={select(
        'Color',
        {
          Action: 'action',
          Disabled: 'disabled',
          Error: 'error',
          Inherit: 'inherit',
          Primary: 'primary',
          Secondary: 'secondary',
        },
        'inherit',
      )}
      fontSize={select(
        'Font Size',
        {
          Default: 'default',
          Inherit: 'inherit',
          Large: 'large',
          Small: 'small',
        },
        'large',
      )}
    >
      <path
        d={text(
          'Path',
          'M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z',
        )}
      />
    </IconBase>
  ),
);

Object.keys(MaterialCommunityIcons).forEach((iconName): void => {
  storiesOf('Atoms/Icon', module).add(
    iconName,
    (): React.ReactElement<any> => {
      const MaterialCommunityIcon = (MaterialCommunityIcons as any)[iconName];

      return (
        <MaterialCommunityIcon
          color={select(
            'Color',
            {
              Action: 'action',
              Disabled: 'disabled',
              Error: 'error',
              Inherit: 'inherit',
              Primary: 'primary',
              Secondary: 'secondary',
            },
            'primary',
          )}
          fontSize={select(
            'Font Size',
            {
              Default: 'default',
              Inherit: 'inherit',
              Large: 'large',
              Small: 'small',
            },
            'large',
          )}
        />
      );
    },
  );
});

export default {
  component: IconBase,
  parameters: {
    info: {
      text: 'This is the base variant of the Icon component.',
    },
  },
  title: 'Atoms/Icon',
};