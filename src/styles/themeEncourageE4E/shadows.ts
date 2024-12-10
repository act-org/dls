/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import baseTheme from './baseTheme';

import type { Shadows } from '@mui/material';

export const SHADOWS_MAPPING: { [key: number]: string } = {
  0: 'none',
  2: '0px 4px 8px rgba(79, 94, 113, 0.1),0px 2px 4px rgba(79, 94, 113, 0.11), 0px 0px 2px rgba(79, 94, 113, 0.12)',
  24:
    '0px 32px 64px rgba(79, 94, 113, 0.07), 0px 16px 32px rgba(79, 94, 113, 0.08),' +
    '0px 8px 16px rgba(79, 94, 113, 0.09), 0px 4px 8px rgba(79, 94, 113, 0.1),' +
    '0px 2px 4px rgba(79, 94, 113, 0.11), 0px 0px 2px rgba(79, 94, 113, 0.12)',
  6:
    '0px 16px 32px rgba(79, 94, 113, 0.09), 0px 4px 8px rgba(79, 94, 113, 0.1),' +
    '0px 2px 4px rgba(79, 94, 113, 0.11), 0px 0px 2px rgba(79, 94, 113, 0.12)',
  8:
    '0px 16px 32px rgba(79, 94, 113, 0.08), 0px 8px 16px rgba(79, 94, 113, 0.09),' +
    '0px 4px 8px rgba(79, 94, 113, 0.1), 0px 2px 4px rgba(79, 94, 113, 0.11),0px 0px 2px rgba(79, 94, 113, 0.12)',
};

export const shadows = baseTheme.shadows.map((shadow, index) => {
  return SHADOWS_MAPPING[index] || shadow;
}) as Shadows;

export default shadows;
