/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable import/prefer-default-export */

import Avatar, { avatarClasses } from '@mui/material/Avatar';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';

import { styled } from '@actinc/dls/helpers/styled';

const AVATAR_SIZE = 50;

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  [`&.${avatarClasses.root}`]: {
    borderColor: theme.palette.grey[300],
    borderWidth: 1,
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)({
  [`&.${listItemIconClasses.root}`]: {
    width: AVATAR_SIZE * 1.25,
  },
});
