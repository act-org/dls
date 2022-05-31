/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable import/prefer-default-export */

import { styled } from '@mui/material/styles';
import { IconButton, IconButtonProps } from '@mui/material';
import { iconButtonClasses } from '@mui/material/IconButton';

export const StyledIconButton = styled(IconButton)<
  IconButtonProps & {
    isHidden: boolean;
  }
>(({ isHidden }) => ({
  [`&.${iconButtonClasses.root}`]: {
    opacity: isHidden ? 0 : undefined,
    pointerEvents: isHidden ? 'none' : undefined,
  },
}));
