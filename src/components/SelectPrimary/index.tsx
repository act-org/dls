/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';

import { ChevronDown } from '~/icons';
import SelectBase, { Props as SelectBaseProps } from '~/components/SelectBase';

import useStyles from './styles';

export type Props = SelectBaseProps;

const SelectPrimary: React.FC<Props> = ({
  value,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <SelectBase
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
