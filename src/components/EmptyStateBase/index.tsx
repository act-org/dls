/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import ButtonBase, { Props as ButtonBaseProps } from '~/components/ButtonBase';

import useStyles from './styles';

export interface Props {
  Button?: React.FC<ButtonBaseProps>;
  buttonProps?: ButtonBaseProps;
  classes?: {
    descriptionRoot: any;
    descriptionRootWithoutTitle: any;
    iconRoot: any;
    titleGridContainer: any;
    titleGridContainerWithDescription: any;
    titleGridItem: any;
  };
  css?: string;
  description?: any;
  Icon?: React.FC<any> | React.ComponentClass<any>;
  maxWidth?: string | number;
  title?: any;
}

const EmptyStateBase: React.FC<Props> = ({
  Button = ButtonBase,
  buttonProps,
  classes: classesProps,
  css,
  description,
  Icon,
  maxWidth,
  title,
}: Props): React.ReactElement<any> => {
  const classesBase = useStyles();

  const classes = classesProps || classesBase;

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
          ${css}
        `}
      </style>

      <div className="container">
        {Icon && (
          <Icon
            classes={{
              root: clsx(classes.iconRoot),
            }}
            color="disabled"
            titleAccess={title}
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

        {buttonProps && <Button {...buttonProps} />}
      </div>
    </>
  );
};

export default EmptyStateBase;
