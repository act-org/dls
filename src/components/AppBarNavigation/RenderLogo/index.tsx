/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { Link } from '@material-ui/core';

import useStyles from './styles';

export interface RenderLogoProps {
  alt: string;
  LinkComponent?: React.ComponentType;
  LinkProps?: any;
  src: string;
}

const RenderLogo: React.FC<RenderLogoProps> = ({
  alt,
  LinkComponent,
  LinkProps: linkProps,
  src,
}: Props): React.ReactElement<RenderLogoProps> => {
  const classes = useStyles();
  const LogoLink = LinkComponent || Link;

  const children = (
    <img
      alt={alt}
      className={clsx(
        !linkProps && classes.logoImg,
        !!linkProps && classes.logoImgWrapped,
      )}
      src={src}
    />
  );

  if (linkProps) {
    return (
      <LogoLink className={classes.logoLink} {...linkProps}>
        {children}
      </LogoLink>
    );
  }

  return children;
};

RenderLogo.defaultProps = {
  LinkComponent: undefined,
  LinkProps: undefined,
};

export default RenderLogo;
