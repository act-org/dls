/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  CreateMUIStyled,
  styled as muiStyled,
  Theme,
} from '@mui/material/styles';

export type AsStyledProps<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};

export const forwardNonTransientProps = (propName: string): boolean =>
  !propName.startsWith('$');

/**
 * Customized styled helper which omits transient props (starting with $) which are used for
 * styling only in styled components. Use as a drop in replacement of the `styled` function
 * that exists in @mui/material/styles.
 *
 * For example you may specify something like <StyledButton $makeItWeird={true} />
 * and this version of styled will not pass $makeItWeird as prop to the HTML in the browser,
 * while still allowing it to be a param in your computed style.
 *
 * This implementation is how Styled Components does it: https://styled-components.com/docs/api#transient-props
 * Unfortunately emotion doesn't seem to care: https://github.com/emotion-js/emotion/issues/2193#issuecomment-1178372803
 */
export const styled = ((...args: Parameters<typeof muiStyled>) =>
  muiStyled(args[0], {
    shouldForwardProp: forwardNonTransientProps,
    ...args[1],
  })) as unknown as CreateMUIStyled<Theme>;

/**
 * Function generator that will generate a `styled` function that has a specific theme type injected. E.g.,
 * const styled = createThemeStyled(THEME_ENCOURAGE);
 * const StyledTypography = styled(Typography)(({ theme }) => ({ color: theme.palette.branding.teal }));
 */
export const createThemeStyled = <T extends Theme = Theme>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _theme?: T,
): CreateMUIStyled<T> => styled as CreateMUIStyled<T>;
