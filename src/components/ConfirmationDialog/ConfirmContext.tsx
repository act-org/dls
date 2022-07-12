/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { createContext } from 'react';
import { ConfirmDialogProps } from './ConfirmationDialog';

type ConfirmContextType = (options?: ConfirmDialogProps) => Promise<boolean>;
export const ConfirmContext = createContext<ConfirmContextType>(() =>
  Promise.resolve(true),
);
export default ConfirmContext;
