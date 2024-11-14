/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import search from '.';

describe('search', () => {
  const docs = [
    { age: 30, id: 1, name: 'John Doe' },
    { age: 25, id: 2, name: 'Jane Doe' },
    { age: 40, id: 3, name: 'Bob Smith' },
  ];

  it('should return an empty array if no documents match the search criteria', () => {
    const result = search(docs, ['name'], 'foo');
    expect(result).toEqual([]);
  });

  it('should return no documents if no properties are specified', () => {
    const result = search(docs, [], '');
    expect(result).toEqual([]);
  });

  it('should return documents that match the search value in any of the specified properties', () => {
    const result1 = search(docs, ['name'], 'doe');
    expect(result1).toEqual([docs[0], docs[1]]);

    const result2 = search(docs, ['age'], '30');
    expect(result2).toEqual([docs[0]]);

    const result3 = search(docs, ['age'], '0');
    expect(result3).toEqual([docs[0], docs[2]]);
  });

  it('should ignore case when matching search value with property values', () => {
    const result1 = search(docs, ['name'], 'john');
    expect(result1).toEqual([docs[0]]);

    const result2 = search(docs, ['name'], 'DOE');
    expect(result2).toEqual([docs[0], docs[1]]);
  });

  it('should return an empty array if called with empty array of docs', () => {
    const result = search([], ['name'], 'doe');
    expect(result).toEqual([]);
  });

  it('should return an empty array if any of the documents or their properties are undefined', () => {
    const result1 = search([null, undefined], ['name'], 'doe');
    expect(result1).toEqual([]);

    const result2 = search([{ id: 1, name: null }], ['name'], 'doe');
    expect(result2).toEqual([]);

    const result3 = search([{ id: 1, name: 'John Doe' }], [], 'doe');
    expect(result3).toEqual([]);
  });
});
