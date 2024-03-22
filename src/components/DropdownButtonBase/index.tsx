import { ButtonProps, Tooltip, Typography } from '@mui/material';
import { isString } from 'lodash';
import { ChevronDown } from 'mdi-material-ui';
import * as React from 'react';

import { StyledButton } from './styles';

export interface DropdownButtonBaseProps {
  buttonProps?: ButtonProps;
  disabled?: boolean;
  id: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  shouldRenderErrorState?: boolean;
  title: string;
  value: string | React.ReactElement<unknown>;
}

export const DropdownButtonBase: React.FC<DropdownButtonBaseProps> = ({
  buttonProps,
  disabled,
  id,
  onClick,
  shouldRenderErrorState = false,
  title,
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
      id={id}
      onClick={onClick}
      shouldRenderErrorState={shouldRenderErrorState}
      size="small"
      sx={{ color: 'text.primary' }}
      title={title}
      variant="outlined"
      {...buttonProps}  
    >
      {valueIsString ? (
        <Tooltip title={shouldTruncateValue ? value : ''}>
          <Typography noWrap sx={{ fontWeight: 'fontWeightLight' }}>
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
  onClick: undefined,
  shouldRenderErrorState: false,
};

export default DropdownButtonBase;
