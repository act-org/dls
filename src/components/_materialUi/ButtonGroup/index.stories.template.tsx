/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  Button as MuiButton,
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
} from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

export const Button = MuiButton;
export const ButtonGroup = MuiButtonGroup;
export type ButtonGroupProps = MuiButtonGroupProps;

const buttonLabels = ['One', 'Two', 'Three'];

export const Template: Story<ButtonGroupProps> = (props: ButtonGroupProps) => {
  const [active, setActive] = React.useState('One');

  return (
    <ButtonGroup {...props}>
      {buttonLabels.map(
        (buttonLabel): React.ReactElement<unknown> => (
          <Button
            key={buttonLabel}
            onClick={(): void => {
              setActive(buttonLabel);
            }}
            variant={active === buttonLabel ? 'contained' : 'outlined'}
          >
            {buttonLabel}
          </Button>
        ),
      )}
    </ButtonGroup>
  );
};

export const argTypes = Playground(
  {
    children: {},
    color: {},
    disabled: {},
    fullWidth: {},
    orientation: {},
    size: {},
    variant: {},
  },
  ButtonGroup,
);
