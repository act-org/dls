/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { PaperProps } from '@mui/material';

import { StyledPaper } from './styles';

const Component: React.FC = (
  props: PaperProps,
): React.ReactElement<unknown> => <StyledPaper elevation={0} {...props} />;

export default Component;
