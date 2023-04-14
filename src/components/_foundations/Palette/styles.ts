/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import Avatar, { avatarClasses } from '@mui/material/Avatar';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Grid, { gridClasses } from '@mui/material/Grid';
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

export const StyledDivider = styled(Divider)(({ theme }) => ({
  [`&.${dividerClasses.root}`]: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)({
  [`&.${listItemIconClasses.root}`]: {
    width: AVATAR_SIZE * 1.25,
  },
});

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${gridClasses.root}`]: {
    border: `1px solid ${theme.palette.divider}`,
  },
}));

export const StyledGridContainer = styled(Grid)(({ theme }) => ({
  [`&.${gridClasses.root}`]: {
    marginBottom: theme.spacing(2),
  },
}));
