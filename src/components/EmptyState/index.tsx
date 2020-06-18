/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import ActionButton, { Props as ActionButtonProps } from './ActionButton';
import useStyles from './styles';

export interface Props {
  action?: ActionButtonProps;
  description?: any;
  flexibleHeight?: boolean;
  Icon?: React.FC<any> | React.ComponentClass<any>;
  maxWidth?: string | number;
  style?: React.CSSProperties;
  title?: any;
}

const EmptyState: React.FC<Props> = ({
  action,
  description,
  flexibleHeight,
  Icon,
  maxWidth,
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
              root: classes.iconRoot,
            }}
            color="disabled"
            titleAccess={title}
          />
        )}

        {title && (
          <Grid
            alignItems="center"
            classes={{
              container: `${classes.titleGridContainer} ${
                description ? classes.titleGridContainerWithDescription : ''
              }`,
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
              <Typography align="center" variant="h6">
                {title}
              </Typography>
            </Grid>
          </Grid>
        )}

        {description && (
          <Typography
            align="center"
            classes={{
              root: clsx(
                classes.descriptionRoot,
                flexibleHeight && classes.descriptionRootFlexibleHeight,
                !title && classes.descriptionRootWithoutTitle,
              ),
            }}
            style={{
              maxWidth,
            }}
            variant="body1"
          >
            {description}
          </Typography>
        )}

        {action && <ActionButton {...action} />}
      </div>
    </>
  );
};

export default EmptyState;
