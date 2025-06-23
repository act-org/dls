/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable import/prefer-default-export */

import IconButton, {
  IconButtonProps,
  iconButtonClasses,
} from '@mui/material/IconButton';

import { styled } from '~/helpers/styled';

export const StyledIconButton = styled(IconButton)<
  IconButtonProps & {
    $isHidden: boolean;
  }
>(({ $isHidden }) => ({
  [`&.${iconButtonClasses.root}`]: {
    opacity: $isHidden ? 0 : undefined,
    pointerEvents: $isHidden ? 'none' : undefined,
  },
}));
