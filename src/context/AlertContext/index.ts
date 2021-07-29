/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';
import { OptionsObject } from 'notistack';

export const AlertContext = React.createContext({
  actions: {
    /* eslint-disable @typescript-eslint/no-unused-vars, lodash/no-extra-args */
    addAlert: (alert: {
      message: React.ReactNode;
      options?: OptionsObject;
    }): void => noop(alert),
    /* eslint-enable @typescript-eslint/no-unused-vars, lodash/no-extra-args */
  },
});

export default AlertContext;
