/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { isNil } from 'lodash';
import { Select, SelectProps } from '@material-ui/core';

import ChevronDown from '~/icons/ChevronDown';
import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

export type SelectPrimaryProps = SelectProps;

export const SelectPrimary: React.FC<SelectPrimaryProps> = ({
  classes: classesProp,
  value,
  ...otherProps
}: SelectPrimaryProps): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <Select
      classes={mergeClasses(
        {
          icon: classes.selectIcon,
          root: clsx(
            classes.selectRoot,
            isNil(value) && classes.selectRootEmpty,
          ),
          select: classes.selectComponentRoot,
        },
        classesProp,
      )}
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
