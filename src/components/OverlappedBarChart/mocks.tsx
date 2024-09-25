/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const defaultData = [
  { applicants: 323, inquiries: 6536 },
  { applicants: 312, inquiries: 5550 },
  { applicants: 284, inquiries: 6711 },
];

export const threeBarsData = [
  { applicants: 323, inquiries: 6536, test: 3000 },
  { applicants: 312, inquiries: 5550, test: 3000 },
  { applicants: 284, inquiries: 6711, test: 3000 },
];

export const edgeCaseCloseData = [
  {
    applicants: 9800,
    inquiries: 10255,
  },
  {
    applicants: 10416,
    inquiries: 10416,
  },
  {
    applicants: 11000,
    inquiries: 11418,
  },
];

export const edgeCaseLowData = [
  {
    applicants: 68000,
    inquiries: 313898,
  },
  {
    applicants: 0,
    inquiries: 204352,
  },
  {
    applicants: 9514,
    inquiries: 50000,
  },
];

export const edgeCaseNoData = [
  {
    applicants: 0,
    inquiries: 0,
  },
  {
    applicants: 0,
    inquiries: 0,
  },
  {
    applicants: 0,
    inquiries: 0,
  },
];
