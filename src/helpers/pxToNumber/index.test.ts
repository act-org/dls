/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import pxToNumber from '.';

describe('pxToNumber', () => {
  it('should return the same number if called with a number argument', () => {
    expect(pxToNumber(0)).toBe(0);
    expect(pxToNumber(1)).toBe(1);
    expect(pxToNumber(10)).toBe(10);
    expect(pxToNumber(100)).toBe(100);
    expect(pxToNumber(-100)).toBe(-100);
    expect(pxToNumber(1.5)).toBe(1.5);
  });

  it('should return the number value of a "px" string if called with a "px" string argument', () => {
    expect(pxToNumber('0px')).toBe(0);
    expect(pxToNumber('1px')).toBe(1);
    expect(pxToNumber('10px')).toBe(10);
    expect(pxToNumber('100px')).toBe(100);
    expect(pxToNumber('-100px')).toBe(-100);
    expect(pxToNumber('1.5px')).toBe(1.5);
  });
});
