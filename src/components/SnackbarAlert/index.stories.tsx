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

import AlertContext from '~/context/AlertContext';
import AlertContextProvider, {
  AlertContextProviderProps,
} from '~/context/AlertContext/provider';
import { Playground } from '~/helpers/playground';

import { SnackbarAlert } from '.';

const Template: StoryFn<AlertContextProviderProps> = (
  props: AlertContextProviderProps,
) => {
  const [counter, setCounter] = useState(0);

  return (
    <AlertContextProvider {...props}>
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
                        message: (
                          <span>
                            Alert number {newCounter} with&nbsp;
                            <b>
                              <i>
                                <u>html content</u>
                              </i>
                            </b>
                            .
                          </span>
                        ),
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
} as Meta<AlertContextProviderProps>;

export const Preview: StoryObj<AlertContextProviderProps> = {
  args: {},
};

/**
 * Show up to `5` different `<SnackbarAlert />`s on the screen, rather than the
 * default (`3`).
 */
export const CustomMaxSnack: StoryObj<AlertContextProviderProps> = {
  args: {
    maxSnack: 5,
  },
};

/**
 * By default, the `<SnackbarAlert />` is anchored to the bottom center of the
 * screen. Both the horizontal and vertical anchor origins can be changed.
 */
export const CustomAnchorOrigin: StoryObj<AlertContextProviderProps> = {
  args: {
    anchorOriginHorizontal: 'right',
    anchorOriginVertical: 'top',
  },
};

/**
 * This component also accepts and passes through `SnackbarProviderProps` to the
 * underlying library. For reference, see the official documentation here:
 * https://notistack.com/api-reference#snackbarprovider-props
 */
export const CustomSnackbarProps: StoryObj<AlertContextProviderProps> = {
  args: {
    autoHideDuration: 10_000,
    classes: {
      containerRoot: 'notistackContainerClass',
    },
  },
};
