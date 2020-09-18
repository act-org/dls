/**
 * @prettier
 */

import * as React from 'react';
import {
  CircularProgress,
  CircularProgressProps,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

export interface Props {
  circularProgressProps?: CircularProgressProps;
  style?: React.CSSProperties;
  title?: string;
}

const LoadingPrimary: React.FC<Props> = ({
  circularProgressProps,
  style,
  title,
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <div className={classes.container} data-testid="loading" style={style}>
      <CircularProgress size={24} thickness={4.5} {...circularProgressProps} />

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

export default LoadingPrimary;
