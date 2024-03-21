/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import {
  ComponentsOverrides,
  ComponentsVariants,
  Theme as MuiTheme,
} from '@mui/material/styles';

import { AreaChartProps } from '~/components/AreaChart';
import { BarChartProps } from '~/components/BarChart';
import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';

type Theme = Omit<MuiTheme, 'components'>;

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey {}

  interface ComponentsPropsList {
    [DLS_COMPONENT_NAMES.AREA_CHART]: Partial<AreaChartProps>;
    [DLS_COMPONENT_NAMES.BAR_CHART]: Partial<BarChartProps>;
  }

  interface Components {
    [DLS_COMPONENT_NAMES.AREA_CHART]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.AREA_CHART];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.AREA_CHART];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.AREA_CHART];
    };
    [DLS_COMPONENT_NAMES.BAR_CHART]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.BAR_CHART];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.BAR_CHART];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.BAR_CHART];
    };
  }
}
