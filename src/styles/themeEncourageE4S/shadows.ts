/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Shadows } from '@mui/material/styles';

import baseTheme from './baseTheme';
import { px } from './typography';

export const shadows: Shadows = [...baseTheme.shadows];

const makeShadow = (
  xOffset: number,
  yOffset: number,
  blurRadius: number | undefined,
  spreadRadius: number | undefined,
  color: string,
  inset = false,
): string => {
  return `${inset ? 'inset ' : ''}${px(xOffset)} ${px(yOffset)} ${`${px(
    blurRadius,
  )} `}${`${px(spreadRadius)} `}${color}`;
};

shadows[1] = makeShadow(0, 4, 4, undefined, 'rgba(0, 0, 0, 0.1)'); // "South" elevation 100
shadows[2] = makeShadow(0, 4, 20, undefined, 'rgba(0, 0, 0, 0.1)'); // "Full" elevation 100

export default shadows;
