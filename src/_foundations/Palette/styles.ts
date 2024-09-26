/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Avatar, { avatarClasses } from '@mui/material/Avatar';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Grid2, { grid2Classes } from '@mui/material/Grid2';
import ListItem, { listItemClasses } from '@mui/material/ListItem';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';

import { styled } from '~/helpers/styled';

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

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  [`&.${listItemClasses.root}`]: {
    border: `1px solid ${theme.palette.divider}`,
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)({
  [`&.${listItemIconClasses.root}`]: {
    width: AVATAR_SIZE * 1.25,
  },
});

export const StyledGridContainer = styled(Grid2)(({ theme }) => ({
  [`&.${grid2Classes.root}`]: {
    marginBottom: theme.spacing(2),
  },
}));
