/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable react/display-name */

import * as React from 'react';
import { Paper as MiuPaper, PaperProps } from '@material-ui/core';

export type { PaperProps };

/**
 * # Paper
 *
 * The Paper component is often used to create a container in which to render
 * other components. Our implementation is based on the
 * <a href="https://material-ui.com/components/paper" target="_blank">Paper</a>
 * &nbsp;component from Material UI.
 *
 * @param PaperProps
 */
export const Paper: React.FC<PaperProps> = React.forwardRef(
  (props: PaperProps, ref): React.ReactElement<PaperProps> => {
    return <MiuPaper ref={ref} {...props} />;
  },
);

export default Paper;
