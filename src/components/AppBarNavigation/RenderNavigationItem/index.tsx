/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import Link, { LinkProps } from '~/components/Link';
import Typography from '~/components/Typography';

import useStyles from './styles';

export interface Props {
  isActive?: boolean;
  LinkComponent?: React.ComponentType;
  LinkProps: LinkProps;
  title: string;
}

const RenderNavigationItem: React.FC<Props> = ({
  isActive,
  LinkComponent,
  LinkProps: linkProps,
  title,
}: Props): React.ReactElement<Props> => {
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
