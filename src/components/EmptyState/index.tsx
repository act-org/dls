/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import { isString } from 'lodash';

import { Button, ButtonProps } from '~/components/Button';

import useStyles from './styles';

export interface EmptyStateProps {
  buttonProps?: ButtonProps;
  description?: any;
  Icon?: React.FC<any> | React.ComponentClass<any>;
  style?: React.CSSProperties;
  title?: string | React.ReactElement<any>;
}

export function EmptyState({
  buttonProps,
  description,
  Icon,
  style,
  title,
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
          variant="body1"
        >
          {description}
        </Typography>
      )}

      {buttonProps && <Button {...buttonProps} />}
    </div>
  );
}

export default EmptyState;
