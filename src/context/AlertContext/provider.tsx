/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable filenames/match-exported */

import { flow, get } from 'lodash';
import {
  OptionsObject,
  SnackbarProvider,
  withSnackbar,
  WithSnackbarProps,
} from 'notistack';
import { Component, ReactElement, ReactNode } from 'react';

import SnackbarAlert from '@actinc/dls/components/SnackbarAlert';
import getErrorMessage from '@actinc/dls/helpers/getErrorMessage';
import { ServerError } from '@actinc/dls/types';

import AlertContext from '.';

interface Props extends Partial<WithSnackbarProps> {
  anchorOriginHorizontal?: 'left' | 'right' | 'center';
  anchorOriginVertical?: 'bottom' | 'top';
  children: ReactNode;
  maxSnack?: number;
}

class Provider extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this._addAlert = this._addAlert.bind(this);
    this._addError = this._addError.bind(this);
  }

  async _addAlert({
    message,
    options,
  }: {
    message: ReactNode;
    options?: OptionsObject;
  }): Promise<void> {
    const { enqueueSnackbar } = this.props;

    const key = new Date().getTime();
    if (enqueueSnackbar) {
      enqueueSnackbar(message, {
        content: (
          <SnackbarAlert
            id={key}
            message={String(message)}
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

const EnhancedProvider = flow(withSnackbar)(Provider);

export const AlertContextProvider = ({
  anchorOriginHorizontal,
  anchorOriginVertical,
  maxSnack,
  ...otherProps
}: Props): ReactElement<unknown> => (
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
    <EnhancedProvider {...otherProps} />
  </SnackbarProvider>
);

AlertContextProvider.defaultProps = {
  anchorOriginHorizontal: undefined,
  anchorOriginVertical: undefined,
  maxSnack: undefined,
};

export default AlertContextProvider;
