/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  ListItem,
  ListItemProps,
  ListItemIcon,
  ListItemText,
  ListItemTextProps,
  Paper,
  PaperProps,
} from '@mui/material';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import DLS_COMPONENT_SLOT_NAMES from '~/constants/DLS_COMPONENT_SLOT_NAMES';

interface StyledListItemProps extends ListItemProps {
  chartWidth?: number | string;
}

interface StyledListItemTextProps extends ListItemTextProps {
  chartHeight?: number | string;
  chartLegendTextFontSize?: number | string;
  chartLegendTextFontSizeSmall?: number | string; // Used when the chartWidth & chartHeight is less than 350 px
  chartWidth?: number | string;
}

interface StyledPaperProps extends PaperProps {
  chartWidth?: number | string;
  index: number;
  optionsLength?: number;
  showAsSquare?: boolean;
  theme?: any;
}

interface StyledUlType {
  numberOfItems: number;
}

export const StyledUl = styled('ul')<StyledUlType>(
  ({ theme, numberOfItems }) => ({
    marginTop: numberOfItems > 6 ? theme.spacing(-1) : theme.spacing(3),
    paddingLeft: theme.spacing(1),
  }),
);

export const StyledListItem = styled(ListItem)<StyledListItemProps>(
  ({ chartWidth, theme }) => ({
    padding:
      chartWidth && Number(chartWidth) > 350
        ? theme.spacing(0.5, 2)
        : theme.spacing(0, 1),
  }),
);

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
  minWidth: 'auto',
}));

export const StyledPaper = styled(Paper)<StyledPaperProps>(
  ({ chartWidth, optionsLength, showAsSquare, theme }) => ({
    // eslint-disable-next-line no-nested-ternary
    borderRadius: showAsSquare
      ? theme.shape.borderRadius
      : optionsLength && optionsLength > 4
        ? theme.shape.borderRadius
        : '50%',
    height:
      chartWidth && Number(chartWidth) > 350
        ? theme.spacing(3.5)
        : theme.spacing(2.5),
    width:
      chartWidth && Number(chartWidth) > 350
        ? theme.spacing(3.5)
        : theme.spacing(2.5),
  }),
);

export const StyledListItemText = styled(ListItemText, {
  name: DLS_COMPONENT_NAMES.PIE_CHART,
  slot: DLS_COMPONENT_SLOT_NAMES[DLS_COMPONENT_NAMES.PIE_CHART]
    .PIE_LEGEND_LABEL,
})<StyledListItemTextProps>(
  ({
    chartHeight,
    chartLegendTextFontSize,
    chartLegendTextFontSizeSmall,
    chartWidth,
    theme,
  }) => ({
    [`& .${listItemTextClasses.primary}`]: {
      fontSize:
        chartWidth &&
        Number(chartWidth) > 350 &&
        chartHeight &&
        Number(chartHeight) >= 350
          ? Number(chartLegendTextFontSize) ||
            (theme.typography.body1.fontSize as number)
          : Number(chartLegendTextFontSizeSmall) ||
            (theme.typography.body2.fontSize as number),
    },
  }),
);
