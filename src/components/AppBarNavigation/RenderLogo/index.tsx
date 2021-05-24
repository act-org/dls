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

import Link, { LinkProps } from '~/components/Link';

import useStyles from './styles';

export interface Props {
  alt: string;
  LinkComponent?: React.ComponentType;
  LinkProps?: LinkProps;
  src: string;
}

const RenderLogo: React.FC<Props> = ({
  alt,
  LinkComponent,
  LinkProps: linkProps,
  src,
}: Props): React.ReactElement<Props> => {
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
