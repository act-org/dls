/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { isNumber } from 'lodash';

import { Px } from '@actinc/dls/types';

export const pxToNumber = (value: Px | number): number => {
  return isNumber(value) ? value : parseInt(value.replace('px', ''), 10);
};

export default pxToNumber;
