/**
 * @prettier
 */

import * as React from 'react';

import InputAdornmentBase from '~/components/InputAdornmentBase';
import OutlinedInputBase, {
  Props as OutlinedInputBaseProps,
} from '~/components/OutlinedInputBase';
import { Magnify } from '~/icons';

import useStyles from './styles';

export type Props = OutlinedInputBaseProps;

const SearchBarPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <OutlinedInputBase
      classes={{
        notchedOutline: classes.searchNotchedOutlined,
        root: classes.searchRoot,
      }}
      inputProps={{
        'aria-label': 'Search',
      }}
      startAdornment={
        <InputAdornmentBase
          classes={{
            root: classes.inputIconRoot,
          }}
          position="start"
        >
          <Magnify />
        </InputAdornmentBase>
      }
      {...props}
    />
  );
};

export default SearchBarPrimary;
