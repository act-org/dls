/**
 * @prettier
 */

import * as React from 'react';
import { render as originalRender } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';

import theme from '~/styles/theme';

const Wrapper = ({
  children,
}: {
  children: React.ReactElement<any>;
}): React.ReactNode => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const render = (Component: React.ReactNode): any =>
  originalRender(Component, { wrapper: Wrapper });

export default render;
