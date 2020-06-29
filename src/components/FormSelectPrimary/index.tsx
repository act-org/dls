/**
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { MenuItem, Select } from '@material-ui/core';

import { ChevronDown, AlertOutline } from '~/icons';
import InputLabelPrimary, {
  Props as InputLabelPrimaryProps,
} from '~/components/InputLabelPrimary';

import useStyles from './styles';

interface SelectOption {
  label: string | null;
  value: number | string;
}

export interface Props {
  disabled?: boolean;
  // error?: boolean;
  labelProps?: InputLabelPrimaryProps;
  // multiple?: boolean;
  // onChange?: (event: any, child?: any) => void;
  // options?: SelectOption[];
  // placeholder?: string;
  required?: boolean;
  // style?: React.CSSProperties;
  // value?: number | number[] | string | string[];
}

const FormSelectPrimary: React.FC<Props> = ({
  disabled,
  error,
  labelProps,
  multiple,
  onChange,
  options = [],
  placeholder,
  required,
  style,
  value,
}: Props): React.ReactElement<Props> => {
  const classes = useStyles();

  const children = (
    <div className="inputContainer">
      <Select
        classes={{
          icon: classes.selectIcon,
          root: clsx(classes.selectRoot, !value && classes.selectRootEmpty),
          select: classes.selectComponentRoot,
        }}
        defaultValue="0"
        disabled={disabled}
        disableUnderline
        fullWidth
        IconComponent={ChevronDown}
        margin="dense"
        multiple={multiple}
        onChange={onChange}
        value={value || 'undefined'}
      >
        <MenuItem
          classes={{ root: classes.selectOptionRoot }}
          disabled
          value="undefined"
        >
          {placeholder || 'Select'}
        </MenuItem>

        {options.map(
          ({ label: optionLabel, value: optionValue }): React.ReactElement => (
            <MenuItem
              classes={{ root: classes.selectOptionRoot }}
              key={optionValue}
              value={optionValue}
            >
              {optionLabel}
            </MenuItem>
          ),
        )}
      </Select>

      {get(inputProps, 'error') && (
        <AlertOutline
          classes={{
            root: classes.warning,
          }}
          htmlColor={COLORS.REQUIRED}
        />
      )}
    </div>
  );

  return (
    <>
      <style jsx>
        {`
          .labelContainer {
            margin-bottom: ${DIMS.LAYOUT_PADDING / 2}px;
          }
          .inputContainer {
            position: relative;
          }
        `}
      </style>

      {labelProps && (
        <div className="labelContainer">
          <InputLabelPrimary
            disabled={disabled}
            required={required}
            {...labelProps}
          />
        </div>
      )}

      {children}
    </>
  );
};

export default FormSelectPrimary;
