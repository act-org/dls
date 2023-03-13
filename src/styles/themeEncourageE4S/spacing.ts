/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { createSpacing } from '@mui/system';

// Default spacing is 8 px
// https://mui.com/customization/spacing/#spacing
// Override here to change
export const SPACING_PX = 8;

const spacing = createSpacing(SPACING_PX);

export default spacing;
