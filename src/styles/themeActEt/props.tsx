import { ComponentsProps } from '@mui/material/styles';

import FilterVariant from '~/icons/FilterVariant';

const PROPS: ComponentsProps = {
  MuiAlert: {
    closeText: 'Close',
    severity: 'info',
    variant: 'standard',
  },
  MuiButton: {
    variant: 'outlined',
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
    variant: 'outlined',
  },
  MuiTextField: {
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
