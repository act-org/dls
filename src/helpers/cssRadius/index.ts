/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { StandardCSSProperties } from '@mui/system';

import px from '~/helpers/px';

type BorderRadius = Pick<
  StandardCSSProperties,
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
>;

export const cssRadius = (value: number): BorderRadius => ({
  borderBottomLeftRadius: px(value),
  borderBottomRightRadius: px(value),
  borderRadius: px(value),
  borderTopLeftRadius: px(value),
  borderTopRightRadius: px(value),
});

export default cssRadius;
