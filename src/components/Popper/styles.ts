import Paper, { paperClasses } from '@mui/material/Paper';
import MuiPopper, { PopperProps } from '@mui/material/Popper';
import { styled } from '@mui/material/styles';
import { FC, HTMLAttributes } from 'react';

interface StyledPopperProps extends PopperProps {
  maxHeight?: number;
  minWidth?: number;
  zIndex?: number;
}

interface StyledDividerProps extends HTMLAttributes<HTMLDivElement> {
  dividerType?: 'header' | 'footer';
}

export const StyledPopper: FC<StyledPopperProps> = styled(MuiPopper)<StyledPopperProps>(
  ({ maxHeight, minWidth, zIndex, theme }) => ({
    borderRadius: Number(theme.shape.borderRadius) * 2.5,
    maxHeight: maxHeight || 300,
    minWidth: minWidth || 200,
    zIndex: zIndex || 1,
  }),
);

export const StyledPaper = styled(Paper)(({ theme }) => ({
  [`&.${paperClasses.root}`]: {
    padding: theme.spacing(1.25, 1.5),
    position: 'relative',
  },
}));

export const StyledDivider = styled('div')<StyledDividerProps>(({ dividerType, theme }) => ({
  borderTop: `1px dashed ${theme.palette.grey[400]}`,
  margin: dividerType === 'header' ? theme.spacing(1.25, 0) : theme.spacing(1.25, 0, 1, 0),
}));
