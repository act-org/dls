/**
 * @prettier
 */

import * as React from 'react';
import { render as originalRender } from '@testing-library/react';

import ThemeProviderPrimary from '~/components/ThemeProviderPrimary';

const Wrapper = ({
  children,
}: {
  children: React.ReactElement<any>;
}): React.ReactNode => <ThemeProviderPrimary>{children}</ThemeProviderPrimary>;

const render = (Component: React.ReactNode): any =>
  originalRender(Component, { wrapper: Wrapper });

export default render;
