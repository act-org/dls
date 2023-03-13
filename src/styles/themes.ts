/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */

export enum THEMES {
  ACT = 'ACT',
  // ACT_2023 = 'ACT_2023',
  ACT_ET = 'ACT_ET',
  ENCOURA_CLASSIC = 'ENCOURA_CLASSIC',
  ENCOURAGE_E4S = 'ENCOURAGE_E4S',
}

export type Themes = keyof typeof THEMES;

export const ThemesArray = Object.values(THEMES);
