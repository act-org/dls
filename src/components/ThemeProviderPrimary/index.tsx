/**
 * @prettier
 */

import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '~/styles/theme';

export type Props = any;

const ThemeProviderPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ThemeProvider theme={theme} {...props} />;

export default ThemeProviderPrimary;
