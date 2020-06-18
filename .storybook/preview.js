/**
 * @prettier
 */

import * as React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { muiTheme } from 'storybook-addon-material-ui';
import { withInfo } from '@storybook/addon-info';

import { theme } from '../src/styles/theme';

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

addDecorator(
  muiTheme([
    {
      ...theme,
      themeName: 'ACT Primary Theme',
    },
  ]),
);

addParameters({
  options: {
    showRoots: true,
  },
});

configureActions({
  clearOnStoryChange: true,
  depth: 100,
  limit: 20,
});
