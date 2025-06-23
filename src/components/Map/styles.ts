/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable import/prefer-default-export */

import { styled } from '@mui/material/styles';

export const StyledAttibutionControlContainer = styled('div')(() => ({
  '& .mapbox-improve-map': {
    display: 'none',
  },
  height: '100%',
  width: '100%',
}));
