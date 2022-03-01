import { ComponentsProps } from '@mui/material/styles';

import ChevronDown from '~/icons/ChevronDown';
import FilterVariant from '~/icons/FilterVariant';

const PROPS: ComponentsProps = {
  MuiAlert: {
    closeText: 'Close',
    severity: 'info',
    variant: 'standard',
  },
  MuiButton: {
    disableElevation: true,
    variant: 'contained',
  },
  MuiButtonGroup: {
    disableElevation: true,
  },
  MuiDataGrid: {
    components: {
      ColumnFilteredIcon: FilterVariant,
    },
    disableSelectionOnClick: true,
  },
  MuiPaper: {
    elevation: 3,
  },
  MuiSelect: {
    IconComponent: ChevronDown,
    variant: 'outlined',
  },
  MuiTextField: {
    color: 'secondary',
    InputLabelProps: {
      shrink: true,
    },
    InputProps: {
      notched: false,
    },
    size: 'small',
    variant: 'outlined',
  },
  MuiTooltip: {
    arrow: true,
  },
};

export default PROPS;
