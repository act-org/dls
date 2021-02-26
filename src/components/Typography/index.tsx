/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  Typography as MiuTypography,
  TypographyProps,
} from '@material-ui/core';

export type { TypographyProps };

/**
 * # Typography
 *
 * The Typography component is the primary component that is used to render
 * text. Our implementation is based on the
 * <a href="https://material-ui.com/components/typography" target="_blank">Typography</a>
 * &nbsp;component from Material UI.
 *
 * @param TypographyProps
 */
export const Typography: React.FC<TypographyProps> = (
  props: TypographyProps,
): React.ReactElement<TypographyProps> => {
  return <MiuTypography {...props} />;
};

export default Typography;
