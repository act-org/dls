/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable filenames/match-exported */

import isChromatic from 'chromatic/isChromatic';
import { get } from 'lodash';
import {
  enqueueSnackbar,
  OptionsObject,
  ProviderContext,
  SnackbarProvider,
} from 'notistack';
import { Component, ReactElement, ReactNode } from 'react';

import SnackbarAlert from '@actinc/dls/components/SnackbarAlert';
import getErrorMessage from '@actinc/dls/helpers/getErrorMessage';
import { ServerError } from '@actinc/dls/types';

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
        ...(isChromatic() && {
          transitionDuration: {
            enter: 0,
            exit: 1e20,
          },
        }),
      });
    }
  }

  async _addError(error: Error | ServerError | unknown): Promise<void> {
    await this._addAlert({
      message: getErrorMessage(error),
      options: {
        variant: 'error',
        ...(isChromatic() && {
          transitionDuration: {
            enter: 0,
            exit: 1e20,
          },
        }),
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
