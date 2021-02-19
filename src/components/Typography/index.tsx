/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

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

export default Typography;
