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
  IconButton as MiuIconButton,
  IconButtonProps,
} from '@material-ui/core';

export type { IconButtonProps };

/**
 * # IconButton
 *
 * The IconButton component is commonly used in app bars and toolbars.  Our
 * implementation is based on the
 * <a href="https://material-ui.com/components/buttons/#icon-buttons" target="_blank">IconButton</a>
 * &nbsp;component from Material UI.
 *
 * @param IconButtonProps
 */
export const IconButton: React.FC<IconButtonProps> = (
  props: IconButtonProps,
): React.ReactElement<IconButtonProps> => {
  return <MiuIconButton {...props} />;
};

export default IconButton;
