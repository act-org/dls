/**
 * @prettier
 */

import * as React from 'react';
import '@storybook/addon-console';
import { addDecorator, addParameters } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { grey } from '@material-ui/core/colors';
import { host } from 'storybook-host';
import { muiTheme } from 'storybook-addon-material-ui';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import COLORS from '../src/constants/colors';
import { theme } from '../src/styles/theme';

addDecorator(
  withInfo({
    header: true,
    inline: false,
    source: true,
  }),
);

addDecorator(
  host({
    align: 'center middle',
    backdrop: COLORS.TRANSPARENT,
    background: COLORS.TRANSPARENT,
    border: false,
    cropMarks: true,
    padding: 100,
  }),
);

addDecorator(withA11y());

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
