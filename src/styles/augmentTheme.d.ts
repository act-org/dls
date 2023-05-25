/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import CustomColorsDictionary from './customColorsDictionary';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: CustomColorsDictionary;
  }

  interface PaletteOptions {
    customColors?: CustomColorsDictionary;
  }
}
