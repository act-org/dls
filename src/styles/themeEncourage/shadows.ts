/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Shadows } from '@mui/material/styles';

import makeShadow from '~/helpers/makeShadow';

import baseTheme from './baseTheme';

const shadows: Shadows = [...baseTheme.shadows];

shadows[1] = makeShadow(0, 4, 4, undefined, 'rgba(0, 0, 0, 0.1)'); // "South" elevation 100

shadows[2] =
  '0px 0px 2px 0px rgba(79, 94, 113, 0.12), 0px 2px 4px 0px rgba(79, 94, 113, 0.11), 0px 4px 8px 0px rgba(79, 94, 113, 0.10)';
shadows[6] =
  '0px 0px 2px 0px rgba(79, 94, 113, 0.12), 0px 2px 4px 0px rgba(79, 94, 113, 0.11), 0px 4px 8px 0px rgba(79, 94, 113, 0.10), 0px 16px 32px 0px rgba(79, 94, 113, 0.09)';
shadows[16] =
  '0px 0px 2px 0px rgba(79, 94, 113, 0.12), 0px 2px 4px 0px rgba(79, 94, 113, 0.11), 0px 4px 8px 0px rgba(79, 94, 113, 0.10), 0px 8px 16px 0px rgba(79, 94, 113, 0.09), 0px 16px 32px 0px rgba(79, 94, 113, 0.08)';
shadows[24] =
  '0px 0px 2px 0px rgba(79, 94, 113, 0.12), 0px 2px 4px 0px rgba(79, 94, 113, 0.11), 0px 4px 8px 0px rgba(79, 94, 113, 0.10), 0px 8px 16px 0px rgba(79, 94, 113, 0.09), 0px 16px 32px 0px rgba(79, 94, 113, 0.08), 0px 32px 64px 0px rgba(79, 94, 113, 0.07)';

export default shadows;
