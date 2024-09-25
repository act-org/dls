/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const oxfordCommaJoin = (input: string[]): string => {
  const clone = [...input];

  if (input.length <= 2) {
    return clone.join(' and ');
  }

  const last = clone.pop();
  return `${clone.join(', ')}, and ${last}`;
};

export default oxfordCommaJoin;
