/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';

import { CloseCircle, Magnify } from '~/icons';
import IconButtonBase from '~/components/IconButtonBase';
import InputAdornmentBase from '~/components/InputAdornmentBase';
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
  const shouldHideCloseButton = !value;

  const classes = useStyles();

  return (
    <OutlinedInputBase
      classes={{
        notchedOutline: classes.outlinedInputNotchedOutlined,
        root: classes.outlinedInputRoot,
      }}
      endAdornment={
        <InputAdornmentBase
          classes={{
            root: clsx(
              classes.iconClose,
              shouldHideCloseButton && classes.iconCloseHidden,
            ),
          }}
          position="end"
        >
          <IconButtonBase
            onClick={(e: any): void => {
              if (onChange) {
                onChange({
                  ...e,
                  target: {
                    ...e.target,
                    value: '',
                  },
                });
              }
            }}
          >
            <CloseCircle fontSize="small" />
          </IconButtonBase>
        </InputAdornmentBase>
      }
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
