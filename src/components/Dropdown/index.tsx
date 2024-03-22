import { ListItemProps, ListItemText, ListItemTextProps, ListProps, PopperProps } from '@mui/material';
import { GridProps } from '@mui/system';
import * as React from 'react';

import DropdownButtonBase, { DropdownButtonBaseProps } from '~/components/DropdownButtonBase';
import Popper from '~/components/Popper';
import WithLabel, { IWithLabelLabelProps } from '~/components/WithLabel';
import KEYBOARD_KEYS from '~/constants/KEYBOARD_KEYS';


import { StyledList, StyledListItem } from './styles';

export interface IDropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  dropdownButtonBaseProps?: Partial<DropdownButtonBaseProps>;
  containerProps?: Partial<GridProps>;
  disabled?: boolean;
  id: string;
  error?: boolean;
  label?: string;
  labelProps?: Partial<IWithLabelLabelProps>;
  listItemProps?: Partial<ListItemProps>;
  listItemTextProps?: Partial<ListItemTextProps>;
  listProps?: Partial<ListProps>;
  onClose?: () => void;
  required?: boolean;
  popperProps?: PopperProps;
  placeholder?: string;
  onChange: (newValue: IDropdownOption | undefined) => void;
  options: IDropdownOption[];
  title: string;
  value: IDropdownOption | undefined | null;
}

export const Dropdown: React.FC<DropdownProps> = props => {
  const { required, options, error, id, label, labelProps, value, onChange, onClose, disabled, title } = props;
  // Prop propagation
  const { dropdownButtonBaseProps, containerProps, listItemProps, listItemTextProps, listProps, placeholder = 'Select value...', popperProps } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [popperWidth, setPopperWidth] = React.useState<number>();
  const [popperYTranslate, setPopperYTranslate] = React.useState<number>();

  const handleOnClose = (): void => {
    if (onClose) {
      onClose();
    }
    setAnchorEl(null);
  };

  const handleOnOptionClick = (option: IDropdownOption): void => {
    onChange(option);
    setAnchorEl(null);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, option: IDropdownOption): void => {
    if (event.code === KEYBOARD_KEYS.ESCAPE) {
      handleOnClose();
    }
    if (event.code === KEYBOARD_KEYS.SPACE || event.code === KEYBOARD_KEYS.ENTER) {
      event.preventDefault();
      handleOnOptionClick(option);
    }
  };

  return (
    <>
      <WithLabel containerProps={containerProps} label={label} labelProps={labelProps} required={required}>
        <DropdownButtonBase
          disabled={disabled}
          id={id}
          onClick={(event: React.MouseEvent<HTMLElement>): void => {
            const { currentTarget } = event;
            setAnchorEl(currentTarget);
            setPopperWidth(currentTarget.clientWidth - 7);
            setPopperYTranslate(-currentTarget.clientHeight - 4);
          }}
          shouldRenderErrorState={error || (!value && required)}
          title={title}
          value={value?.label || placeholder}
          {...dropdownButtonBaseProps}
        />
      </WithLabel>

      <Popper
        anchorElement={anchorEl}
        bodyElement={
          <StyledList disablePadding {...listProps}>
            {(options || []).map(opt => (
              <StyledListItem
                id={opt.value}
                key={opt.value}
                onClick={(): void => handleOnOptionClick(opt)}
                onKeyDown={(event): void => handleOnKeyDown(event, opt)}
                tabIndex={0}
                {...listItemProps}
              >
                <ListItemText
                  primaryTypographyProps={{
                    style: {
                      fontWeight: 400,
                      maxWidth: '85%',
                    },
                  }}
                  {...listItemTextProps}
                >
                  {opt.label}
                </ListItemText>
              </StyledListItem>
            ))}
          </StyledList>
        }
        onClose={(): void => handleOnClose()}
        popperWidth={popperWidth}
        popperYTranslate={popperYTranslate}
        zIndex={1500}
        {...popperProps}
      />
    </>
  );
};

Dropdown.defaultProps = {
  containerProps: undefined,
  disabled: undefined,
  dropdownButtonBaseProps: undefined,
  error: undefined,
  label: undefined,
  labelProps: undefined,
  listItemProps: undefined,
  listItemTextProps: undefined,
  listProps: undefined,
  onClose: undefined,
  placeholder: undefined,
  popperProps: undefined,
  required: undefined,
}

export default Dropdown;
