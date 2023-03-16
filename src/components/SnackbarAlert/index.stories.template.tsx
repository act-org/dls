/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Button, Grid } from '@mui/material';
import { Story } from '@storybook/react/types-6-0';
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

type DefaultProps = {
  defaultProps: Record<string, unknown>;
};

export const Template: Story<StoryProps> & DefaultProps = ({
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

Template.defaultProps = {
  anchorOriginHorizontal: undefined,
  anchorOriginVertical: undefined,
  maxSnack: undefined,
};

export const argTypes = Playground(
  {
    anchorOriginHorizontal: { type: 'string' },
    anchorOriginVertical: { type: 'string' },
    maxSnack: { type: 'number' },
  },
  SnackbarAlert,
);
