import { ButtonProps, Tooltip, Typography } from '@mui/material';
import { isString } from 'lodash';
import { ChevronDown } from 'mdi-material-ui';
import * as React from 'react';

import { StyledButton } from './styles';

export interface DropdownButtonBaseProps {
  buttonProps?: ButtonProps;
  disabled?: boolean;
  idSubstring: string;
  isFixed?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  shouldRenderErrorState?: boolean;
  value: string | React.ReactElement<unknown>;
}

export const DropdownButtonBase: React.FC<DropdownButtonBaseProps> = ({
  buttonProps,
  disabled,
  isFixed,
  onClick,
  shouldRenderErrorState = false,
  value,
}: DropdownButtonBaseProps): React.ReactElement<DropdownButtonBaseProps> => {
  const endIcon = <ChevronDown />;
  const valueIsString = isString(value);
  const shouldTruncateValue = valueIsString && value?.length > 35;

  return (
    <StyledButton
      disabled={disabled}
      disableRipple
      endIcon={endIcon}
      isFixed={isFixed}
      onClick={onClick}
      shouldRenderErrorState={shouldRenderErrorState}
      size="small"
      sx={{ color: 'text.primary' }}
      variant="outlined"
      {...buttonProps}
    >
      {valueIsString ? (
        <Tooltip title={shouldTruncateValue ? value : ''}>
          <Typography noWrap sx={{ fontWeight: 'fontWeightLight' }} variant="h4">
            {value}
          </Typography>
        </Tooltip>
      ) : (
        value
      )}
    </StyledButton>
  );
};

DropdownButtonBase.defaultProps = {
  buttonProps: undefined,
  disabled: false,
  isFixed: undefined,
  onClick: undefined,
  shouldRenderErrorState: false,
};

export default DropdownButtonBase;
