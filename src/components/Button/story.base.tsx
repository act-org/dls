/* eslint-disable import/no-extraneous-dependencies */
/**
 * @prettier
 */

/* eslint-disable sort-keys */

import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';

import Plus from '../../icons/Plus';

import ButtonComp, { Props } from '.';

// eslint-disable-next-line func-names
export default function (props: Props) {
  // eslint-disable-next-line react/display-name
  return (): React.ReactElement<Record<string, unknown>> => (
    <ButtonComp
      disabled={boolean('Disabled?', false)}
      endIcon={boolean('End Icon?', false) ? <Plus /> : undefined}
      onClick={action('onClick()')}
      size={select(
        'Size',
        {
          Small: 'small',
          Default: 'default',
          Large: 'large',
        },
        'default',
      )}
      startIcon={boolean('Start Icon?', true) ? <Plus /> : undefined}
      {...props}
    >
      {text('Text', 'Click Me')}
    </ButtonComp>
  );
}
