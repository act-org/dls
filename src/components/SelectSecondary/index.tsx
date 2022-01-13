/**
 * @prettier
 */

import * as React from 'react';

import mergeClasses from '~/helpers/mergeClasses';
import SelectPrimary, { SelectPrimaryProps } from '~/components/SelectPrimary';

import useStyles from './styles';

export type SelectSecondaryProps = SelectPrimaryProps;

export const SelectSecondary: React.FC<SelectSecondaryProps> = ({
  classes: classesProp,
  ...otherProps
}: SelectSecondaryProps): React.ReactElement<unknown> => {
  const classes = useStyles();

  return (
    <SelectPrimary
      classes={mergeClasses(
        {
          icon: classes.selectIcon,
          root: classes.selectRoot,
        },
        classesProp,
      )}
      {...otherProps}
    />
  );
};

export default SelectSecondary;
