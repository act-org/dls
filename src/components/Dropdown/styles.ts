import { List, ListItem } from '@mui/material';
import { listClasses } from '@mui/material/List';
import { listItemClasses } from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

export const StyledList = styled(List)({
  [`&.${listClasses.root}`]: {
    maxHeight: 250,
    overflowX: 'hidden',
  },
});

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  [`&.${listItemClasses.gutters}`]: {
    padding: theme.spacing(0, 0.5),
  },
  [`&.${listItemClasses.root}`]: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.text.secondary,
      cursor: 'pointer',
    },
    overflowY: 'hidden',
  },
}));
