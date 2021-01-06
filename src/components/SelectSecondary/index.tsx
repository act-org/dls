/**
 * @prettier
 */

import * as React from 'react';

import mergeClasses from '~/helpers/mergeClasses';
import SelectPrimary, {
  Props as SelectPrimaryProps,
} from '~/components/SelectPrimary';

import useStyles from './styles';

export type Props = SelectPrimaryProps;

const SelectSecondary: React.FC<Props> = ({
  classes: classesProp,
  ...otherProps
}: Props): React.ReactElement<any> => {
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
