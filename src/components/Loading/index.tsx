/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import {
  CircularProgress,
  CircularProgressProps,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

export interface LoadingProps {
  circularProgressProps?: CircularProgressProps;
  style?: React.CSSProperties;
  title?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  circularProgressProps,
  style,
  title,
}: LoadingProps): React.ReactElement<LoadingProps> => {
  const classes = useStyles();

  return (
    <div
      aria-label={title}
      className={classes.container}
      data-testid="loading"
      style={style}
    >
      <CircularProgress
        size={24}
        thickness={4.5}
        title={title}
        {...circularProgressProps}
      />

      {title && (
        <Typography
          classes={{ root: classes.typographyRoot }}
          variant="overline"
        >
          {title}
        </Typography>
      )}
    </div>
  );
};

Loading.defaultProps = {
  circularProgressProps: {
    size: 24,
    thickness: 4.5,
  },
  title: undefined,
};

export default Loading;
