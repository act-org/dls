/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const percentageData = [
  {
    A: 0.2,
    name: 'Day 1',
  },
  {
    A: 0.6,
    name: 'Day 2',
  },
  {
    A: 0.35,
    name: 'Day 3',
  },
  {
    A: 0.34,
    name: 'Day 4',
  },
  {
    A: 0.82,
    name: 'Day 5',
  },
  {
    A: 0.2,
    name: 'Day 6',
  },
  {
    A: 1,
    name: 'Day 7',
  },
];

export const defaultData = [
  {
    A: 7,
    name: 'Day 1',
  },
  {
    A: 15,
    name: 'Day 2',
  },
  {
    A: 18,
    name: 'Day 3',
  },
  {
    A: 12,
    name: 'Day 4',
  },
  {
    A: 4,
    name: 'Day 5',
  },
  {
    A: 9,
    name: 'Day 6',
  },
  {
    A: 11,
    name: 'Day 7',
  },
  {
    A: 4,
    name: 'Day 7',
  },
];

export const largerDataset = [
  {
    A: 2,
    B: 8,
    name: 'Day 1',
  },
  {
    A: 5,
    B: 17,
    name: 'Day 2',
  },
  {
    A: 18,
    B: 18,
    name: 'Day 3',
  },
  {
    A: 4,
    B: 24,
    name: 'Day 4',
  },
  {
    A: 22,
    B: 6,
    name: 'Day 5',
  },
  {
    A: 15,
    B: 4,
    name: 'Day 6',
  },
];

export const largerDatasetWith18Keys: { [key: string]: number | string }[] =
  largerDataset.map(item => {
    const newItem: { [key: string]: number | string } = { name: item.name };
    // eslint-disable-next-line no-loops/no-loops
    for (let i = 0; i < 18; i += 1) {
      newItem[String.fromCharCode(65 + i)] = Math.floor(Math.random() * 100);
    }
    return newItem;
  });
