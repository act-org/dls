/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ComponentsOverrides, ComponentsVariants, Theme as MuiTheme } from '@mui/material/styles';

import { AreaChartProps } from '../components/AreaChart';
import { BarChartProps } from '../components/BarChart';
import { HeatMapProps } from '../components/HeatMap';
import { LineChartProps } from '../components/LineChart';
import { MapProps } from '../components/Map';
import { OverlappedBarChartProps } from '../components/OverlappedBarChart';
import { PieChartProps } from '../components/PieChart';
import { ScatterPlotProps } from '../components/ScatterPlot';
import { StackedBarChartProps } from '../components/StackedBarChart';
import DLS_COMPONENT_NAMES from '../constants/DLS_COMPONENT_NAMES';

type Theme = Omit<MuiTheme, 'components'>;

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface ComponentNameToClassKey {}

  interface ComponentsPropsList {
    [DLS_COMPONENT_NAMES.AREA_CHART]: Partial<AreaChartProps>;
    [DLS_COMPONENT_NAMES.BAR_CHART]: Partial<BarChartProps>;
    [DLS_COMPONENT_NAMES.HEAT_MAP]: Partial<HeatMapProps>;
    [DLS_COMPONENT_NAMES.LINE_CHART]: Partial<LineChartProps>;
    [DLS_COMPONENT_NAMES.MAP]: Partial<MapProps>;
    [DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART]: Partial<OverlappedBarChartProps>;
    [DLS_COMPONENT_NAMES.PIE_CHART]: Partial<PieChartProps>;
    [DLS_COMPONENT_NAMES.SCATTER_PLOT]: Partial<ScatterPlotProps>;
    [DLS_COMPONENT_NAMES.STACKED_BAR_CHART]: Partial<StackedBarChartProps>;
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
    [DLS_COMPONENT_NAMES.HEAT_MAP]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.HEAT_MAP];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.HEAT_MAP];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.HEAT_MAP];
    };
    [DLS_COMPONENT_NAMES.LINE_CHART]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.LINE_CHART];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.LINE_CHART];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.LINE_CHART];
    };
    [DLS_COMPONENT_NAMES.MAP]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.MAP];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.MAP];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.MAP];
    };
    [DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART];
    };
    [DLS_COMPONENT_NAMES.PIE_CHART]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.PIE_CHART];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.PIE_CHART];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.PIE_CHART];
    };
    [DLS_COMPONENT_NAMES.SCATTER_PLOT]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.SCATTER_PLOT];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.SCATTER_PLOT];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.SCATTER_PLOT];
    };
    [DLS_COMPONENT_NAMES.STACKED_BAR_CHART]?: {
      defaultProps?: ComponentsPropsList[typeof DLS_COMPONENT_NAMES.STACKED_BAR_CHART];
      styleOverrides?: ComponentsOverrides<Theme>[typeof DLS_COMPONENT_NAMES.STACKED_BAR_CHART];
      variants?: ComponentsVariants[typeof DLS_COMPONENT_NAMES.STACKED_BAR_CHART];
    };
  }
}
