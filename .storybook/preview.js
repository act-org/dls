import { ThemeProvider } from '@material-ui/styles';
import actTheme from '../src/styles/theme';
import COLORS from '../src/constants/colors';
import { grey } from '@material-ui/core/colors';
import { configureActions } from '@storybook/addon-actions';


configureActions({
  depth: 3,
  limit: 20,
});

export const parameters = {
  actions: { argTypesRegex: '^onClick$|^onChange$|^onFocus&|^onBlur&' },
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
  (Story) => {
    return (<ThemeProvider theme={actTheme}><Story /></ThemeProvider>)
  }
]