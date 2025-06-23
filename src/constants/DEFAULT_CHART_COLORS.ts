/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable filenames/match-exported */

import { blueGrey, common, grey } from '@mui/material/colors';
import range from 'lodash/range';

// An array of 18 hex color strings.
export const DEFAULT_CHART_COLORS = range(18).map((i): string => {
  const colorPalettes = [blueGrey, grey];
  const paletteIndex = Math.floor(i / 9);
  const colorIndex = (i % 9) * 100 + 100; // Color index will be between 100 - 900
  const currentPalette = colorPalettes[paletteIndex % colorPalettes.length];
  return currentPalette[colorIndex as keyof typeof blueGrey] || common.black;
});

export default DEFAULT_CHART_COLORS;
