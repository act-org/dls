/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable filenames/match-exported */

import get from 'lodash/get';
import {
  enqueueSnackbar,
  OptionsObject,
  SnackbarProvider,
  SnackbarProviderProps,
} from 'notistack';
import { Component, ReactElement, ReactNode } from 'react';

import { AlertProps } from '~/components';
import SnackbarAlert from '~/components/SnackbarAlert';
import getErrorMessage from '~/helpers/getErrorMessage';
import { ServerError } from '~/types';

import AlertContext from '.';

interface ProviderProps {
  children: ReactNode;
  Components?: SnackbarProviderProps['Components'];
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
    const { Components } = this.props;

    const variant = get(options, 'variant');
    const CustomAlert = get(
      Components,
      variant || 'default',
    ) as React.FC<AlertProps>;

    const key = new Date().getTime();
    if (enqueueSnackbar) {
      enqueueSnackbar(message, {
        content: (
          <SnackbarAlert
            CustomAlert={CustomAlert}
            id={key}
            message={message}
            variant={variant}
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
    const { children } = this.props;

    return (
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
    );
  }
}

export interface AlertContextProviderProps
  extends Partial<SnackbarProviderProps> {
  anchorOriginHorizontal?: 'left' | 'right' | 'center';
  anchorOriginVertical?: 'bottom' | 'top';
  children: ReactNode;
  maxSnack?: number;
}

export const AlertContextProvider = ({
  anchorOriginHorizontal,
  anchorOriginVertical,
  children,
  maxSnack,
  ...otherSnackbarProps
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
    {...otherSnackbarProps}
  >
    <Provider Components={otherSnackbarProps?.Components}>{children}</Provider>
  </SnackbarProvider>
);

export default AlertContextProvider;
