/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Button, Grid } from '@material-ui/core';
import { startCase } from 'lodash';
import { Story } from '@storybook/react/types-6-0';

import AlertContext from '~/context/AlertContext';
import AlertContextProvider from '~/context/AlertContext/provider';
import { Playground } from '~/helpers/playground';

import { SnackbarAlert } from '.';

export const Template: Story = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <AlertContextProvider>
      <AlertContext.Consumer>
        {({ actions }): React.ReactElement<any> => (
          <Grid container spacing={2}>
            {['error', 'info', 'warning', 'success'].map(
              (variant): React.ReactElement<any> => (
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

export const argTypes = Playground({}, SnackbarAlert);
