/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */

export enum THEMES {
  ENCOURA = 'ENCOURA',
  ENCOURA_CLASSIC = 'ENCOURA_CLASSIC',
  ENCOURAGE = 'ENCOURAGE',
  ENCOURAGE_E4E = 'ENCOURAGE_E4E',
}

export type Themes = keyof typeof THEMES;

export const ThemesArray = Object.values(THEMES);
