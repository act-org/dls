/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PaperProps } from '@mui/material';
import { FC, ReactElement } from 'react';

import { StyledPaper } from './styles';

const Component: FC = (props: PaperProps): ReactElement<unknown> => (
  <StyledPaper elevation={0} {...props} />
);

export default Component;
