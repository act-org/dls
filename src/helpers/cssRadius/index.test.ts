/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cssRadius from '.';

describe('cssRadius', () => {
  it('returns an object with all radius properties set to the same value', () => {
    const radius = cssRadius(10);

    expect(radius.borderBottomLeftRadius).toEqual('10px');
    expect(radius.borderBottomRightRadius).toEqual('10px');
    expect(radius.borderRadius).toEqual('10px');
    expect(radius.borderTopLeftRadius).toEqual('10px');
    expect(radius.borderTopRightRadius).toEqual('10px');
  });
});
