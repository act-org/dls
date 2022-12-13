import { createTheme as muiCreateTheme } from '@mui/material/styles';

import { CustomTheme, CustomThemeOptions } from "~/types";

export const createTheme = <T extends object>(
  options: CustomThemeOptions<T>,
  ...args: object[]
): CustomTheme<T> => muiCreateTheme(options, ...args) as CustomTheme<T>;

export default createTheme;
