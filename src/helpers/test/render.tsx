/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { render as originalRender } from '@testing-library/react';

import ThemeProvider from '~/components/ThemeProvider';

const render = (
  Component: React.ReactNode,
  theme?: 'ACT' | 'ACT_ET' | string,
): any =>
  originalRender(Component, {
    // eslint-disable-next-line react/display-name
    wrapper: ({
      children,
    }: {
      children: React.ReactElement<any>;
    }): React.ReactNode => (
      <ThemeProvider theme={theme || 'ACT'}>{children}</ThemeProvider>
    ),
  });

export default render;
