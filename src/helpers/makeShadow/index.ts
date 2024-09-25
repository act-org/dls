/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isNumber from 'lodash/isNumber';

import px from '~/helpers/px';

export const makeShadow = (
  xOffset: number,
  yOffset: number,
  blurRadius: number | undefined,
  spreadRadius: number | undefined,
  color: string,
  inset = false,
): string => {
  let str = '';

  if (inset) {
    str = `${str} inset`;
  }

  if (isNumber(xOffset)) {
    str = `${str} ${px(xOffset)}`;
  }

  if (isNumber(yOffset)) {
    str = `${str} ${px(yOffset)}`;
  }

  if (isNumber(blurRadius)) {
    str = `${str} ${px(blurRadius)}`;
  }

  if (isNumber(spreadRadius)) {
    str = `${str} ${px(spreadRadius)}`;
  }

  if (color) {
    str = `${str} ${color}`;
  }

  return str.trim();
};

export default makeShadow;
