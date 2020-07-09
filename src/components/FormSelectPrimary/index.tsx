/**
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';

import AlertOutline from '~/icons/AlertOutline';
import COLORS from '~/constants/colors';
import InputLabelPrimary, {
  Props as InputLabelPrimaryProps,
} from '~/components/InputLabelPrimary';
import MenuItemBase from '~/components/MenuItemBase';
import SelectPrimary, {
  Props as SelectPrimaryProps,
} from '~/components/SelectPrimary';

import useStyles from './styles';

interface SelectOption {
  label: string | null;
  value: number | string;
}

export interface Props {
  disabled?: boolean;
  labelProps?: InputLabelPrimaryProps;
  options?: SelectOption[];
  placeholder?: string;
  placeholderIsDisabled?: boolean;
  required?: boolean;
  selectProps: SelectPrimaryProps;
}

const FormSelectPrimary: React.FC<Props> = ({
  disabled,
  labelProps,
  options = [],
  placeholder,
  placeholderIsDisabled,
  required,
  selectProps,
}: Props): React.ReactElement<Props> => {
  const classes = useStyles();

  const children = (
    <div className={classes.selectContainer}>
      <SelectPrimary
        {...selectProps}
        disabled={disabled}
        fullWidth
        required={required}
        value={selectProps.value || 'undefined'}
      >
        <MenuItemBase
          classes={{ root: classes.selectOptionRoot }}
          disabled={placeholderIsDisabled}
          value="undefined"
        >
          {placeholder || 'Select'}
        </MenuItemBase>

        {options.map(
          ({ label: optionLabel, value: optionValue }): React.ReactElement => (
            <MenuItemBase
              classes={{ root: classes.selectOptionRoot }}
              key={optionValue}
              value={optionValue}
            >
              {optionLabel}
            </MenuItemBase>
          ),
        )}
      </SelectPrimary>

      {get(selectProps, 'error') && (
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
      {labelProps && (
        <div className={classes.labelContainer}>
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
