/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
export enum THEMES {
  ACT = 'ACT',
  // ACT_2023 = 'ACT_2023',
  ACT_ET = 'ACT_ET',
  ENCOURA_DATALAB = 'ENCOURA_DATALAB',
  ENCOURAGE_E4S = 'ENCOURAGE_E4S',
};

export type Themes = keyof typeof THEMES;

export const ThemesArray = Object.values(THEMES);