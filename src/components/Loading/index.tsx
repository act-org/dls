/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { CircularProgress, CircularProgressProps } from '@mui/material';
import { CSSProperties, FC, ReactElement } from 'react';

import { StyledContainer, StyledTypography } from './styles';

export interface LoadingProps {
  circularProgressProps?: CircularProgressProps;
  style?: CSSProperties;
  title?: string;
}

export const Loading: FC<LoadingProps> = ({
  circularProgressProps,
  style,
  title,
}: LoadingProps): ReactElement<LoadingProps> => (
  <StyledContainer aria-label={title} data-chromatic="ignore" data-testid="loading" style={style}>
    <CircularProgress
      size={24}
      thickness={4.5}
      title={title}
      {...circularProgressProps}
    />

    {title && <StyledTypography variant="overline">{title}</StyledTypography>}
  </StyledContainer>
);

Loading.defaultProps = {
  circularProgressProps: {
    size: 24,
    thickness: 4.5,
  },
  style: undefined,
  title: undefined,
};

export default Loading;
