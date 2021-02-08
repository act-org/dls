import { ThemeProvider } from '../src/components/ThemeProvider';
import { CssBaseline } from '@material-ui/core';
import COLORS from '../src/constants/colors';
import { grey } from '@material-ui/core/colors';
import { configureActions } from '@storybook/addon-actions';
import * as locales from '@material-ui/core/locale';

configureActions({
  depth: 3,
  limit: 20,
});

export const parameters = {
  //actions: { argTypesRegex: '^onClick$|^onChange$|^onFocus&|^onBlur&' },
  layout: 'centered',
  controls: { expanded: false },
  backgrounds: {
    default: 'White',
    values: [
      {
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
    ]
  }
}
export const decorators = [
  (Story, ctx) => (
    <ThemeProvider theme={ctx.globals.theme} locale={ctx.globals.language}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
  // host({
  //   align: 'center middle',
  //   backdrop: COLORS.TRANSPARENT,
  //   background: COLORS.TRANSPARENT,
  //   border: false,
  //   cropMarks: true,
  // })
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'act',
    toolbar: {
      icon: 'paintbrush',
      // array of plain string values or MenuItem shape (see below)
      items: ['act', 'act-et'],
    },
  },
  language: {
    name: 'Language',
    description: 'Global language for components',
    defaultValue: 'enUS',
    toolbar: {
      icon: 'book',
      // array of plain string values or MenuItem shape (see below)
      items: Object.keys(locales),
    },
  },
};