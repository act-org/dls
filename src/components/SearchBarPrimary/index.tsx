/**
 * @prettier
 */

import * as React from 'react';

import InputAdornmentBase from '~/components/InputAdornmentBase';
import Magnify from '~/icons/Magnify';
import OutlinedInputBase, {
  Props as OutlinedInputBaseProps,
} from '~/components/OutlinedInputBase';

import useStyles from './styles';

export type Props = OutlinedInputBaseProps;

const SearchBarPrimary: React.FC<Props> = ({
  onChange,
  value,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <OutlinedInputBase
      classes={{
        notchedOutline: classes.outlinedInputNotchedOutlined,
        root: classes.outlinedInputRoot,
      }}
      inputProps={{
        'aria-label': 'Search',
      }}
      onChange={onChange}
      startAdornment={
        <InputAdornmentBase
          classes={{
            root: classes.inputAdornmentRoot,
          }}
          position="start"
        >
          <Magnify />
        </InputAdornmentBase>
      }
      value={value}
      {...otherProps}
    />
  );
};

export default SearchBarPrimary;
