/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Button, ButtonGroup, ButtonGroupProps } from '@mui/material';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

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
