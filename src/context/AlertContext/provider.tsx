/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable filenames/match-exported */

import * as React from 'react';
import { flow, get } from 'lodash';
import {
  OptionsObject,
  SnackbarProvider,
  withSnackbar,
  WithSnackbarProps,
} from 'notistack';

import SnackbarAlert from '~/components/SnackbarAlert';

import AlertContext from '.';

interface Props extends WithSnackbarProps {
  children: React.ReactNode;
}

class Provider extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this._addAlert = this._addAlert.bind(this);
  }

  async _addAlert({
    message,
    options,
  }: {
    message: React.ReactNode;
    options?: OptionsObject;
  }): Promise<void> {
    const { enqueueSnackbar } = this.props;

    const key = new Date().getTime();

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

  render(): React.ReactNode {
    const { children } = this.props;

    return (
      <SnackbarProvider
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom',
        }}
        classes={{
          containerAnchorOriginBottomRight: 'notistackContainer',
        }}
        maxSnack={3}
      >
        <AlertContext.Provider
          value={{
            actions: {
              addAlert: this._addAlert,
            },
          }}
        >
          {children}
        </AlertContext.Provider>
      </SnackbarProvider>
    );
  }
}

const EnhancedProvider = flow(withSnackbar)(Provider);

export const AlertContextProvider = (props: Props): React.ReactElement<any> => (
  <SnackbarProvider
    anchorOrigin={{
      horizontal: 'center',
      vertical: 'bottom',
    }}
    classes={{
      containerAnchorOriginBottomRight: 'notistackContainer',
    }}
    maxSnack={3}
  >
    <EnhancedProvider {...props} />
  </SnackbarProvider>
);

export default AlertContextProvider;
