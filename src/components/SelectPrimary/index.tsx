/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { Select, SelectProps } from '@material-ui/core';

import ChevronDown from '~/icons/ChevronDown';

import useStyles from './styles';

export type Props = SelectProps;

const SelectPrimary: React.FC<Props> = ({
  value,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <Select
      classes={{
        icon: classes.selectIcon,
        root: clsx(classes.selectRoot, !value && classes.selectRootEmpty),
        select: classes.selectComponentRoot,
      }}
      defaultValue="0"
      disableUnderline
      IconComponent={ChevronDown}
      margin="dense"
      value={value}
      {...otherProps}
    />
  );
};

export default SelectPrimary;
