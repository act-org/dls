/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import PencilCircle from '@actinc/dls/icons/PencilCircle';
import PencilCircleOutline from '@actinc/dls/icons/PencilCircleOutline';

export const IconButton = MuiIconButton;
export type IconButtonProps = MuiIconButtonProps;

export const Template: Story<IconButtonProps> = (props: IconButtonProps) => (
  <>
    <IconButton {...props} size="large">
      <PencilCircle />
    </IconButton>

    <IconButton {...props} size="large">
      <PencilCircleOutline />
    </IconButton>
  </>
);
