/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Link, Typography } from '@mui/material';

import useStyles from './styles';

export interface RenderNavigationItemProps {
  isActive?: boolean;
  LinkComponent?: React.ComponentType;
  LinkProps: any;
  title: string;
}

const RenderNavigationItem: React.FC<RenderNavigationItemProps> = ({
  isActive,
  LinkComponent,
  LinkProps: linkProps,
  title,
}: RenderNavigationItemProps): React.ReactElement<RenderNavigationItemProps> => {
  const NavLink = LinkComponent || Link;

  const classes = useStyles({ isActive });

  return (
    <NavLink className={classes.navLink} {...linkProps}>
      <Typography classes={{ root: classes.navTypography }} color="primary">
        {title}
      </Typography>
    </NavLink>
  );
};

RenderNavigationItem.defaultProps = {
  isActive: undefined,
  LinkComponent: undefined,
};

export default RenderNavigationItem;
