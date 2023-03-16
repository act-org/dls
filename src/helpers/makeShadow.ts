/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import px from '@actinc/dls/helpers/px';

export const makeShadow = (
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

export default makeShadow;
