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

const LoadingBase: React.FC<Props> = ({
  circularProgressProps,
  style,
  title,
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <>
      <style jsx>
        {`
          .container {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;
            width: 100%;
          }
        `}
      </style>

      <div className="container" data-testid="loading" style={style}>
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
    </>
  );
};

export default LoadingBase;
