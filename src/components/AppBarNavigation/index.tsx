/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { AppBar, AppBarProps, Grid } from '@material-ui/core';

import RenderLogo, { Props as LogoProps } from './RenderLogo';
import RenderNavigationItem, {
  Props as NavigationItem,
} from './RenderNavigationItem';
import useStyles from './styles';

export interface AppBarNavigationProps {
  appBarHeight?: number;
  AppBarProps?: AppBarProps;
  headerRightElement?: React.ReactElement<any>;
  LogoProps: LogoProps;
  navigationItems: NavigationItem[];
}

/**
 * # App Bar Navigation
 *
 * This component uses App Bar to create a top-level navigation header.
 *
 * @param props
 */
export const AppBarNavigation: React.FC<AppBarNavigationProps> = ({
  appBarHeight,
  AppBarProps: appBarProps,
  headerRightElement,
  LogoProps: logoProps,
  navigationItems,
}: AppBarNavigationProps): React.ReactElement<AppBarNavigationProps> => {
  const classes = useStyles({ appBarHeight: appBarHeight || 72 });

  return (
    <AppBar
      classes={{ root: classes.appBarRoot }}
      color="transparent"
      {...appBarProps}
    >
      <RenderLogo {...logoProps} />

      <Grid classes={{ container: classes.navContainer }} container spacing={4}>
        {navigationItems.map(
          (n: NavigationItem): React.ReactElement<any> => (
            <Grid item key={n.title}>
              <RenderNavigationItem {...n} />
            </Grid>
          ),
        )}
      </Grid>

      {Boolean(headerRightElement) && (
        <Grid style={{ marginLeft: 'auto' }}>{headerRightElement}</Grid>
      )}
    </AppBar>
  );
};

AppBarNavigation.defaultProps = {
  appBarHeight: undefined,
  AppBarProps: undefined,
  headerRightElement: undefined,
};

export default AppBarNavigation;
