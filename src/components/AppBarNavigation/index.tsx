/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { AppBarProps } from '@mui/material/AppBar';
import Grid2 from '@mui/material/Grid2';
import { FC, ReactElement } from 'react';

import RenderLogo, { RenderLogoProps } from './RenderLogo';
import RenderNavigationItem, {
  RenderNavigationItemProps,
} from './RenderNavigationItem';
import { StyledAppBar, StyledGrid } from './styles';

export interface AppBarNavigationProps {
  appBarHeight?: number;
  AppBarProps?: AppBarProps;
  headerRightElement?: ReactElement<unknown>;
  RenderLogoProps: RenderLogoProps;
  navigationItems: RenderNavigationItemProps[];
}

export const AppBarNavigation: FC<AppBarNavigationProps> = ({
  appBarHeight,
  AppBarProps: appBarProps,
  headerRightElement,
  RenderLogoProps: logoProps,
  navigationItems,
}: AppBarNavigationProps): ReactElement<AppBarNavigationProps> => (
  <StyledAppBar
    $appBarHeight={appBarHeight || 72}
    color="transparent"
    {...appBarProps}
  >
    <RenderLogo {...logoProps} />

    <StyledGrid container spacing={4}>
      {navigationItems.map(
        (n: RenderNavigationItemProps): ReactElement<unknown> => (
          <Grid2 key={n.title}>
            <RenderNavigationItem {...n} />
          </Grid2>
        ),
      )}
    </StyledGrid>

    {Boolean(headerRightElement) && (
      <Grid2 style={{ marginLeft: 'auto' }}>{headerRightElement}</Grid2>
    )}
  </StyledAppBar>
);

export default AppBarNavigation;
