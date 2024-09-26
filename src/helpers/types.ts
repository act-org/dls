/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Helper which validates against the options interface without changing the actual value type.
 */
export const typeOk =
  <T>() =>
  <V extends T>(val: V): V =>
    val;

/**
 * Helper which accesses an object's keys in a type safe way instead of returning a string[]
 */
export const typedKeys = <T extends object>(value: T): (keyof T)[] => {
  return Object.keys(value) as (keyof T)[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const notImplemented = () => {
  throw new Error('Unimplemented');
};
