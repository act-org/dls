/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import oxfordCommaJoin from '.';

describe('oxfordCommaJoin', () => {
  it('should return an empty string if the input array is empty', () => {
    expect(oxfordCommaJoin([])).toBe('');
  });

  it('should return the first element of the input array if it has only one element', () => {
    expect(oxfordCommaJoin(['apple'])).toBe('apple');
  });

  it('should join the elements of the input array with "and" if it has two elements', () => {
    expect(oxfordCommaJoin(['apple', 'banana'])).toBe('apple and banana');
  });

  it('should join the elements of the input array with commas and "and" if it has more than two elements', () => {
    expect(oxfordCommaJoin(['apple', 'banana', 'cherry'])).toBe('apple, banana, and cherry');
    expect(oxfordCommaJoin(['apple', 'banana', 'cherry', 'date'])).toBe('apple, banana, cherry, and date');
    expect(oxfordCommaJoin(['apple', 'banana', 'cherry', 'date', 'elderberry'])).toBe(
      'apple, banana, cherry, date, and elderberry',
    );
  });

  it('should return the same result if the input array is not modified', () => {
    const input = ['apple', 'banana', 'cherry'];
    expect(oxfordCommaJoin(input)).toBe('apple, banana, and cherry');
    expect(input).toEqual(['apple', 'banana', 'cherry']);
  });
});
