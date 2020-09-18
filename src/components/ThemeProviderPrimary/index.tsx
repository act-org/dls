/**
 * @prettier
 */

import * as React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@material-ui/core';

import theme from '~/styles/theme';

export type Props = Omit<ThemeProviderProps, 'theme'>;

const ThemeProviderPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ThemeProvider theme={theme} {...props} />;

export default ThemeProviderPrimary;
