/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable import/prefer-default-export */

import { styled } from '~/helpers/styled';

export const StyledImg = styled('img')<{ $isWrapped: boolean }>(
  ({ $isWrapped }) => ({
    height: $isWrapped ? '100%' : '38.88%',
  }),
);
