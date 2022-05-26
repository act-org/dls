/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Link, LinkProps } from '@mui/material';
import { linkClasses } from '@mui/material/Link';
import { styled } from '@mui/material/styles';

import { StyledTypography } from './styles';

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
  const StyledLink = styled(LinkComponent || Link)<LinkProps>(() => ({
    [`&.${linkClasses.root}`]: {
      '&, &:hover': {
        color: 'unset',
        textDecoration: 'none',
      },
      cursor: 'pointer',
    },
  }));

  return (
    <StyledLink {...linkProps}>
      <StyledTypography color="primary" isActive={isActive}>
        {title}
      </StyledTypography>
    </StyledLink>
  );
};

RenderNavigationItem.defaultProps = {
  isActive: undefined,
  LinkComponent: undefined,
};

export default RenderNavigationItem;
