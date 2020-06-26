/**
 * @prettier
 */

import * as React from 'react';
import { Paper, PaperProps } from '@material-ui/core';

import useStyles from './styles';

const TableContainerComponent: React.FC<PaperProps> = (
  props: PaperProps,
): React.ReactElement<any> => {
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

export default TableContainerComponent;
