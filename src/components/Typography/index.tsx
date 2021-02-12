/** @format */

import React from 'react';
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core';

export type TypographyProps = MuiTypographyProps;

/**
 * # Typography
 *
 * Main component for displaying text
 *
 * @param typographyProps
 */
export function Typography(
  typographyProps: TypographyProps,
): React.ReactElement<TypographyProps> {
  return <MuiTypography {...typographyProps} />;
}
