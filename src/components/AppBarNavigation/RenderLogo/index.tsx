/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Link, LinkProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ComponentType, FC, ReactElement } from 'react';

import { StyledImg } from './styles';

export interface RenderLogoProps {
  alt: string;
  LinkComponent?: ComponentType;
  LinkProps?: any;
  src: string;
}

const RenderLogo: FC<RenderLogoProps> = ({
  alt,
  LinkComponent,
  LinkProps: linkProps,
  src,
}: RenderLogoProps): ReactElement<RenderLogoProps> => {
  const StyledLink = styled(LinkComponent || Link)<LinkProps>(() => ({
    height: '38.88%',
  }));

  const children = (
    <StyledImg
      alt={alt || 'Logo'}
      aria-label={alt || 'Logo'}
      isWrapped={!!linkProps}
      src={src}
    />
  );

  if (linkProps) {
    return <StyledLink {...linkProps}>{children}</StyledLink>;
  }

  return children;
};

RenderLogo.defaultProps = {
  LinkComponent: undefined,
  LinkProps: undefined,
};

export default RenderLogo;
