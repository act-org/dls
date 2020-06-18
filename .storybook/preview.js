/**
 * @prettier
 */

import * as React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(
  withInfo({
    header: true,
    inline: true,
    source: true,
    styles: {
      infoStory: {
        paddingLeft: 40,
        marginTop: -15,
      },
    },
  }),
);
