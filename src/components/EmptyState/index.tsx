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
  Button,
  ButtonProps,
  Grid,
  IconProps,
  Typography,
  TypographyProps,
} from '@material-ui/core';
import clsx from 'clsx';
import { isString } from 'lodash';

import useStyles from './styles';

export interface EmptyStateProps {
  buttonProps?: ButtonProps;
  description?: any;
  descriptionTypographyProps?: TypographyProps;
  Icon?: React.FC<any> | React.ComponentClass<any>;
  iconProps?: IconProps;
  style?: React.CSSProperties;
  title?: string | React.ReactElement<unknown>;
  titleTypographyProps?: TypographyProps & {
    component?: string;
  };
}

export function EmptyState({
  buttonProps,
  description,
  descriptionTypographyProps,
  Icon,
  iconProps,
  style,
  title,
  titleTypographyProps,
}: EmptyStateProps): React.ReactElement<EmptyStateProps> {
  const classes = useStyles();

  return (
    <div className={classes.container} style={style}>
      {Icon && (
        <Icon
          classes={{
            root: clsx(classes.iconRoot),
          }}
          color="disabled"
          titleAccess={isString(title) ? title : undefined}
          {...iconProps}
        />
      )}

      {title && (
        <Grid
          alignItems="center"
          classes={{
            container: clsx(classes.titleGridContainer),
          }}
          container
          justifyContent="center"
        >
          <Grid
            classes={{
              item: classes.titleGridItem,
            }}
            item
          >
            <Typography
              align="center"
              classes={{
                root: classes.titleRoot,
              }}
              component="h6"
              variant="body1"
              {...titleTypographyProps}
            >
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
          color="textSecondary"
          variant="body1"
          {...descriptionTypographyProps}
        >
          {description}
        </Typography>
      )}

      {buttonProps && <Button {...buttonProps} />}
    </div>
  );
}

export default EmptyState;
