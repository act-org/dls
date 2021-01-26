import { ThemeProvider } from '@material-ui/styles';
import actTheme from '../src/styles/theme';
import COLORS from '../src/constants/colors';
import { grey } from '@material-ui/core/colors';

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  controls: { expanded: true },
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
  // options: {
  //   showRoots: true,
  // },
  // viewport: {
  //   defaultViewport: 'responsive',
  // }
}
export const decorators = [
  (Story) => {
    return (<ThemeProvider theme={actTheme}><Story /></ThemeProvider>)
  }
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