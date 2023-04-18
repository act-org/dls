/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable react/require-default-props */

import { Button, Grid } from '@mui/material';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { startCase } from 'lodash';
import { VariantType } from 'notistack';
import { ReactElement, useState } from 'react';

import AlertContext from '@actinc/dls/context/AlertContext';
import AlertContextProvider from '@actinc/dls/context/AlertContext/provider';
import { Playground } from '@actinc/dls/helpers/playground';

import { SnackbarAlert } from '.';

interface StoryProps {
  anchorOriginHorizontal?: 'left' | 'right' | 'center';
  anchorOriginVertical?: 'bottom' | 'top';
  maxSnack?: number;
}

const Template: StoryFn<StoryProps> = ({
  anchorOriginHorizontal,
  anchorOriginVertical,
  maxSnack,
}: StoryProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <AlertContextProvider
      anchorOriginHorizontal={anchorOriginHorizontal}
      anchorOriginVertical={anchorOriginVertical}
      maxSnack={maxSnack}
    >
      <AlertContext.Consumer>
        {({ actions }): ReactElement<unknown> => (
          <Grid container spacing={2}>
            {(['error', 'info', 'warning', 'success'] as VariantType[]).map(
              (variant): ReactElement<unknown> => (
                <Grid item key={variant}>
                  <Button
                    onClick={async (): Promise<void> => {
                      const newCounter = counter + 1;

                      setCounter(newCounter);

                      await actions.addAlert({
                        message: `Alert number ${newCounter}`,
                        options: {
                          variant,
                        },
                      });
                    }}
                  >
                    {`Show ${startCase(variant)}`}
                  </Button>
                </Grid>
              ),
            )}
          </Grid>
        )}
      </AlertContext.Consumer>
    </AlertContextProvider>
  );
};

/**
 * The `<SnackbarAlert />` component is used to animate the `<Alert />` component
 * on and off the screen.
 */
export default {
  args: {},
  argTypes: Playground(
    {
      anchorOriginHorizontal: { type: 'string' },
      anchorOriginVertical: { type: 'string' },
      maxSnack: { type: 'number' },
    },
    SnackbarAlert,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Molecules / SnackbarAlert',
} as Meta<StoryProps>;

export const Preview: StoryObj<StoryProps> = {
  args: {},
};

/**
 * Show up to `5` different `<SnackbarAlert />`s on the screen, rather than the
 * default (`3`).
 */
export const CustomMaxSnack: StoryObj<StoryProps> = {
  args: {
    maxSnack: 5,
  },
};

/**
 * By default, the `<SnackbarAlert />` is anchored to the bottom center of the
 * screen. Both the horizontal and vertical anchor origins can be changed.
 */
export const CustomAnchorOrigin: StoryObj<StoryProps> = {
  args: {
    anchorOriginHorizontal: 'right',
    anchorOriginVertical: 'top',
  },
};
