/* eslint-disable import/prefer-default-export */
import Button, { ButtonProps, buttonClasses } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type StyledButtonProps = ButtonProps & {
  shouldRenderErrorState: boolean;
};

export const StyledButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'shouldRenderErrorState' })<StyledButtonProps>(({ shouldRenderErrorState, theme }) => ({
  [`&.${buttonClasses.root}`]: {
    '&:focus': {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    '&:hover': {
      backgroundColor:  theme.palette.common.white,
      borderColor: shouldRenderErrorState ? theme.palette.error.main : theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
    backgroundColor: theme.palette.common.white ,
    borderColor: shouldRenderErrorState ? theme.palette.error.main : theme.palette.grey[300],
    display: 'flex',
    fontSize: theme.typography.h4.fontSize,
    fontWeight: Number(theme.typography.fontWeightLight),
    justifyContent: 'space-between',
    maxWidth: 250,
    minHeight: 36,
    minWidth: 200,
    padding: theme.spacing(2, 1.5),
  },
}));
