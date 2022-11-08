import { CreateMUIStyled, styled as muiStyled, Theme } from '@mui/material/styles';

export type AsStyledProps<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};

export const forwardNonTransientProps = (propName: string): boolean => !propName.startsWith('$');

/**
 * Customized styled helper which omits transient props (starting with $)
 * which are used for styling only in styled components.
 * For example you may specify something like <StyledButton $makeItWeird={true} />
 * and this version of styled will not pass $makeItWeird as prop to the HTML in the browser.
 * This is how Styled Components does it: https://styled-components.com/docs/api#transient-props
 * Unfortunately emotion doesn't seem to care: https://github.com/emotion-js/emotion/issues/2193#issuecomment-1178372803
 */
export const styled: CreateMUIStyled<Theme> = ((...args: Parameters<typeof muiStyled>) =>
  muiStyled(args[0], {
    shouldForwardProp: forwardNonTransientProps,
    ...args[1],
  })) as unknown as CreateMUIStyled<Theme>;
