/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import sort from '.';

describe('sort function', () => {
  const data = [
    { age: 30, name: 'John' },
    { age: 25, name: 'Jane' },
    { age: 35, name: 'Joe' },
  ];

  it('sorts objects in ascending order', () => {
    const sortedData = data.sort(
      sort({ sortBy: 'name', sortDirection: 'ASCENDING' }),
    );

    expect(sortedData[0].name).toEqual('Jane');
    expect(sortedData[1].name).toEqual('Joe');
    expect(sortedData[2].name).toEqual('John');
  });

  it('sorts objects in descending order', () => {
    const sortedData = data.sort(
      sort({ sortBy: 'name', sortDirection: 'DESCENDING' }),
    );

    expect(sortedData[0].name).toEqual('John');
    expect(sortedData[1].name).toEqual('Joe');
    expect(sortedData[2].name).toEqual('Jane');
  });

  it('sorts numbers', () => {
    const sortedData = data.sort(
      sort({ sortBy: 'age', sortDirection: 'ASCENDING' }),
    );

    expect(sortedData[0].age).toEqual(25);
    expect(sortedData[1].age).toEqual(30);
    expect(sortedData[2].age).toEqual(35);
  });
});
