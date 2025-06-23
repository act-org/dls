/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import makeShadow from '.';

describe('makeShadow', () => {
  it('should return correct box-shadow with blurRadius and spreadRadius', () => {
    const result = makeShadow(0, 0, 4, 3, '#000000');
    expect(result).toEqual('0px 0px 4px 3px #000000');
  });

  it('should return correct box-shadow without blurRadius and spreadRadius', () => {
    const result = makeShadow(0, 0, undefined, undefined, '#FFFFFF');
    expect(result).toEqual('0px 0px #FFFFFF');
  });

  it('should return correct inset box-shadow', () => {
    const result = makeShadow(2, 2, 2, 2, '#000000', true);
    expect(result).toEqual('inset 2px 2px 2px 2px #000000');
  });

  it('should return correct box-shadow without inset', () => {
    const result = makeShadow(-2, -2, 2, undefined, '#FFFFFF');
    expect(result).toEqual('-2px -2px 2px #FFFFFF');
  });

  it('should return correct box-shadow with only xOffset and yOffset', () => {
    const result = makeShadow(2, -2, undefined, undefined, '#000000');
    expect(result).toEqual('2px -2px #000000');
  });
});
