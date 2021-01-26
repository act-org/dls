import { ThemeProvider } from '@material-ui/styles';
import COLORS from '../src/constants/colors';
import theme from '../src/styles/theme';
import { grey } from '@material-ui/core/colors';
import { host } from 'storybook-host';

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: { expanded: true },
  // options: {
  //   showRoots: true,
  // },
  // viewport: {
  //   defaultViewport: 'responsive',
  // }
}
export const decorators = [
  (Story) => {
    console.log(Story, theme);
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  },
  // () => {
  //   return host({
  //     align: 'center middle',
  //     backdrop: COLORS.TRANSPARENT,
  //     background: COLORS.TRANSPARENT,
  //     border: false,
  //     cropMarks: true,
  //     padding: 100,
  //   })
  // },
]