/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { grey } from '@mui/material/colors';
import MenuItem, {
  MenuItemProps,
  menuItemClasses,
} from '@mui/material/MenuItem';
import TextField, { textFieldClasses } from '@mui/material/TextField';

import { styled } from '@actinc/dls/helpers/styled';

export const StyledContainer = styled('div')({
  alignItems: 'center',
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'center',
  userSelect: 'none',
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    color: theme.palette.text.primary,
    fontSize: 14,
    margin: 0,
  },
  /* FIXME: SelectProps.classes.select
    selectSelect: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: 'right',
      textAlignLast: 'right',
    },
    selectSelectInverted: { // variant === 'inverted'
      color: grey[200],
    },
  */
  /* FIXME: SelectProps.classes.icon
    selectIconRoot: {
      color: grey[200],
    },
  */
}));

export const StyledMenuItem = styled(MenuItem)<
  MenuItemProps & { isSelected: boolean }
>(({ isSelected }) => ({
  [`&.${menuItemClasses.root}`]: {
    backgroundColor: isSelected ? grey[200] : undefined,
  },
}));
