/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Px } from '~/types';

export const px = (value?: number): Px => {
  return value !== undefined ? `${value}px` : '';
};

export default px;
