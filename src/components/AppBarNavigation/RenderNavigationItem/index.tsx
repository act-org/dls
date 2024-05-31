/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import Link, { LinkProps, linkClasses } from '@mui/material/Link';
import { ComponentType, FC, ReactElement } from 'react';

import { styled } from '~/helpers/styled';

import { StyledTypography } from './styles';

export interface RenderNavigationItemProps {
  isActive?: boolean;
  LinkComponent?: ComponentType;
  LinkProps: { to: string };
  title: string;
}

const RenderNavigationItem: FC<RenderNavigationItemProps> = ({
  isActive,
  LinkComponent,
  LinkProps: linkProps,
  title,
}: RenderNavigationItemProps): ReactElement<RenderNavigationItemProps> => {
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
      <StyledTypography $isActive={isActive} color="primary">
        {title}
      </StyledTypography>
    </StyledLink>
  );
};

export default RenderNavigationItem;
