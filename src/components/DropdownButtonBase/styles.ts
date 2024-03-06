/* eslint-disable import/prefer-default-export */
import Button, { ButtonProps, buttonClasses } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type StyledButtonProps = ButtonProps & {
  isFixed: boolean | undefined;
  shouldRenderErrorState: boolean;
};

export const StyledButton = styled(Button)<StyledButtonProps>(({ isFixed, shouldRenderErrorState, theme }) => ({
  [`&.${buttonClasses.root}`]: {
    '&:focus': {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    '&:hover': {
      backgroundColor: isFixed ? theme.palette.common.white : theme.palette.grey[200],
      borderColor: shouldRenderErrorState ? theme.palette.error.main : theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
    backgroundColor: isFixed ? theme.palette.common.white : theme.palette.grey[200],
    // eslint-disable-next-line no-nested-ternary
    borderColor: shouldRenderErrorState ? theme.palette.error.main : isFixed ? theme.palette.grey[300] : theme.palette.grey[400],
    display: 'flex',
    fontSize: theme.typography.h4.fontSize,
    fontWeight: Number(theme.typography.fontWeightLight),
    justifyContent: 'space-between',
    maxWidth: 250,
    minHeight: 35,
    minWidth: 200,
    padding: theme.spacing(2, 1.5),
  },
}));
