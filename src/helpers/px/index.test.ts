/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import px from '.';

describe('px', () => {
  it('should return an empty string if called with no arguments', () => {
    expect(px()).toBe('');
  });

  it('should return a string with a number and "px" if called with a number argument', () => {
    expect(px(0)).toBe('0px');
    expect(px(0.5)).toBe('0.5px');
    expect(px(1)).toBe('1px');
    expect(px(10)).toBe('10px');
    expect(px(100)).toBe('100px');
  });
});
