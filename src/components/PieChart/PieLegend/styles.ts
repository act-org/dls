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
import clsx from 'clsx';

interface StyledListItemProps extends ListItemProps {
  chartWidth?: number | string;
}

interface StyledListItemTextProps extends ListItemTextProps {
  chartWidth?: number | string;
  chartHeight?: number | string;
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
  ({ chartWidth, index, optionsLength, showAsSquare, theme }) => ({
    backgroundColor: clsx(
      index === 0 && theme.customColors?.chart?.tertiary?.first,
      index === 1 && theme.customColors?.chart?.tertiary?.second,
      index === 2 && theme.customColors?.chart?.tertiary?.third,
      index === 3 && theme.customColors?.chart?.tertiary?.fourth,
      index === 4 && theme.customColors?.chart?.tertiary?.fifth,
      index === 5 && theme.customColors?.chart?.tertiary?.sixth,
      index > 5 && theme.palette.grey[700],
    ),
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

export const StyledListItemText = styled(ListItemText)<StyledListItemTextProps>(
  ({ chartHeight, chartWidth, theme }) => ({
    [`& .${listItemTextClasses.primary}`]: {
      color: theme.palette.secondary.dark,
      fontSize:
        chartWidth &&
        Number(chartWidth) > 350 &&
        chartHeight &&
        Number(chartHeight) >= 350
          ? (theme.typography.h4.fontSize as number)
          : (theme.typography.h5.fontSize as number),
      fontWeight: theme.typography.fontWeightBold,
    },
    [`& .${listItemTextClasses.secondary}`]: {
      color: theme.palette.grey[700],
    },
  }),
);
