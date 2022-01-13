/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Paper, PaperProps } from '@material-ui/core';

import useStyles from './styles';

const Component: React.FC = (
  props: PaperProps,
): React.ReactElement<unknown> => {
  const classes = useStyles();

  return (
    <Paper
      classes={{
        root: classes.paperRoot,
      }}
      elevation={0}
      {...props}
    />
  );
};

export default Component;
