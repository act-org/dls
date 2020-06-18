/**
 * @prettier
 */

import * as React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { grey } from '@material-ui/core/colors';
import { muiTheme } from 'storybook-addon-material-ui';
import { withInfo } from '@storybook/addon-info';

import COLORS from '../src/constants/colors';
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
  backgrounds: [
    {
      default: true,
      name: 'White',
      value: COLORS.WHITE,
    },
    {
      name: 'Grey',
      value: grey[300],
    },
    {
      name: 'Black',
      value: COLORS.BLACK,
    },
  ],
});

addParameters({
  options: {
    showRoots: true,
  },
});

addParameters({
  viewport: {
    defaultViewport: 'responsive',
  },
});

configureActions({
  clearOnStoryChange: true,
  depth: 100,
  limit: 20,
});
