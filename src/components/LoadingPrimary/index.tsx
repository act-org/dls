/**
 * @prettier
 */

import * as React from 'react';

import CircularProgressBase, {
  Props as CircularProgressBaseProps,
} from '~/components/CircularProgressBase';
import TypographyBase from '~/components/TypographyBase';

import useStyles from './styles';

export interface Props {
  circularProgressProps?: CircularProgressBaseProps;
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
      <CircularProgressBase
        size={24}
        thickness={4.5}
        {...circularProgressProps}
      />

      {title && (
        <TypographyBase
          classes={{ root: classes.typographyRoot }}
          variant="overline"
        >
          {title}
        </TypographyBase>
      )}
    </div>
  );
};

export default LoadingPrimary;
