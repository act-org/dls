/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable filenames/match-exported */

import { get } from 'lodash';
import {
  enqueueSnackbar,
  OptionsObject,
  ProviderContext,
  SnackbarProvider,
} from 'notistack';
import { Component, ReactElement, ReactNode } from 'react';

import SnackbarAlert from '~/components/SnackbarAlert';
import getErrorMessage from '~/helpers/getErrorMessage';
import { ServerError } from '~/types';

import styled from '@emotion/styled';
import { createTheme as muiCreateTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/system/Box';
import AlertContext from '.';

interface ProviderProps {
  children: ReactNode;
}

class Provider extends Component<ProviderProps> {
  constructor(props: ProviderProps) {
    super(props);

    this._addAlert = this._addAlert.bind(this);
    this._addError = this._addError.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  async _addAlert({
    message,
    options,
  }: {
    message: string | ReactNode;
    options?: OptionsObject;
  }): Promise<void> {
    const key = new Date().getTime();
    if (enqueueSnackbar) {
      enqueueSnackbar(message, {
        content: (
          <SnackbarAlert
            id={key}
            message={message}
            variant={get(options, 'variant')}
          />
        ),
        key,
        ...options,
      });
    }
  }

  async _addError(error: Error | ServerError | unknown): Promise<void> {
    await this._addAlert({
      message: getErrorMessage(error),
      options: {
        variant: 'error',
      },
    });
  }

  render(): ReactNode {
    const theme = muiCreateTheme();

    const StyledBox = styled(Box)<BoxProps>(() => ({
      [theme.breakpoints.down('xs')]: {
        paddingBottom: theme.spacing(9),
      },
    }));

    const { children } = this.props;

    return (
      <StyledBox>
        <AlertContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            actions: {
              addAlert: this._addAlert,
              addError: this._addError,
            },
          }}
        >
          {children}
        </AlertContext.Provider>
      </StyledBox>
    );
  }
}

interface AlertContextProviderProps extends Partial<ProviderContext> {
  anchorOriginHorizontal?: 'left' | 'right' | 'center';
  anchorOriginVertical?: 'bottom' | 'top';
  children: ReactNode;
  maxSnack?: number;
}

export const AlertContextProvider = ({
  anchorOriginHorizontal,
  anchorOriginVertical,
  maxSnack,
  ...otherProps
}: AlertContextProviderProps): ReactElement<unknown> => (
  <SnackbarProvider
    anchorOrigin={{
      horizontal: anchorOriginHorizontal || 'center',
      vertical: anchorOriginVertical || 'bottom',
    }}
    classes={{
      containerAnchorOriginBottomRight: 'notistackContainer',
    }}
    maxSnack={maxSnack || 3}
  >
    <Provider {...otherProps} />
  </SnackbarProvider>
);

AlertContextProvider.defaultProps = {
  anchorOriginHorizontal: undefined,
  anchorOriginVertical: undefined,
  maxSnack: undefined,
};

export default AlertContextProvider;
