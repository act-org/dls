/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { isString } from 'lodash';
import { Grid } from '@material-ui/core';

import ButtonPrimary, {
  Props as ButtonPrimaryProps,
} from '~/components/ButtonPrimary';
import TypographyBase from '~/components/TypographyBase';

import useStyles from './styles';

export interface Props {
  buttonProps?: ButtonPrimaryProps;
  description?: any;
  Icon?: React.FC<any> | React.ComponentClass<any>;
  style?: React.CSSProperties;
  title?: string | React.ReactElement<any>;
}

const EmptyStatePrimary: React.FC<Props> = ({
  buttonProps,
  description,
  Icon,
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
            flex: 1;
            flex-direction: column;
          }
        `}
      </style>

      <div className="container" style={style}>
        {Icon && (
          <Icon
            classes={{
              root: clsx(classes.iconRoot),
            }}
            color="disabled"
            titleAccess={isString(title) ? title : undefined}
          />
        )}

        {title && (
          <Grid
            alignItems="center"
            classes={{
              container: clsx(classes.titleGridContainer),
            }}
            container
            justify="center"
          >
            <Grid
              classes={{
                item: classes.titleGridItem,
              }}
              item
            >
              <TypographyBase align="center" variant="h6">
                {title}
              </TypographyBase>
            </Grid>
          </Grid>
        )}

        {description && (
          <TypographyBase
            align="center"
            classes={{
              root: clsx(
                classes.descriptionRoot,
                !title && classes.descriptionRootWithoutTitle,
              ),
            }}
            variant="body1"
          >
            {description}
          </TypographyBase>
        )}

        {buttonProps && <ButtonPrimary {...buttonProps} />}
      </div>
    </>
  );
};

export default EmptyStatePrimary;
