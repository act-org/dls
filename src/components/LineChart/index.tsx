/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useTheme, useThemeProps } from '@mui/material/styles';
import numeral from 'numeral';
import React from 'react';
import {
  CartesianGrid,
  CartesianGridProps,
  ComposedChart,
  Line,
  LineProps,
  ResponsiveContainerProps,
  Tooltip,
  TooltipProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent';

import DEFAULT_CHART_COLORS from '~/constants/DEFAULT_CHART_COLORS';
import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';

import { StyledContainer, StyledResponsiveContainer } from './styles';

export interface LineRawDataProps {
  label: string;
  [key: string]: unknown;
}

export interface LineChartProps {
  cartesianGridProps?: CartesianGridProps;
  chartProps?: CategoricalChartProps;
  children?: React.ReactElement<unknown>;
  colors?: string[];
  containerStyles?: React.CSSProperties;
  data: Array<LineRawDataProps>;
  height?: number | string;
  lineKeys?: Array<string>;
  lineProps?: Omit<LineProps, 'dataKey' | 'ref'>;
  maxHeight?: number | string;
  responsiveContainerProps?: ResponsiveContainerProps;
  tooltipProps?: TooltipProps<ValueType, NameType>;
  width?: number | string;
  xAxisProps?: XAxisProps;
  yAxisProps?: YAxisProps;
}

export const LineChart: React.FC<LineChartProps> = (
  inProps: LineChartProps,
): React.ReactElement<LineChartProps> => {
  const {
    cartesianGridProps,
    chartProps,
    children,
    colors = [],
    containerStyles,
    data,
    height,
    lineKeys = [],
    lineProps,
    maxHeight,
    responsiveContainerProps,
    tooltipProps,
    width,
    xAxisProps,
    yAxisProps,
  } = useThemeProps({ name: DLS_COMPONENT_NAMES.LINE_CHART, props: inProps });

  const { palette, spacing, typography } = useTheme();
  return (
    <StyledContainer
      height={height}
      maxHeight={maxHeight}
      style={containerStyles}
      width={width || '100%'}
    >
      <StyledResponsiveContainer {...responsiveContainerProps}>
        <ComposedChart
          data={data}
          margin={{
            bottom: parseInt(String(spacing(0.6)), 10),
            left: parseInt(String(spacing(4)), 10),
            right: parseInt(String(spacing(8)), 10),
            top: parseInt(String(spacing(2)), 10),
          }}
          style={{ fontFamily: typography.fontFamily }}
          {...chartProps}
        >
          <CartesianGrid
            stroke="#f5f5f5"
            vertical={false}
            {...(cartesianGridProps as CartesianGridProps)}
          />
          <XAxis
            dataKey="label"
            orientation="bottom"
            tickCount={data.length}
            xAxisId={0}
            {...xAxisProps}
          />
          <YAxis
            orientation="left"
            padding={{ bottom: 10, top: 10 }}
            tickFormatter={(v: number): string => numeral(v).format('0,0')}
            tickLine={false}
            yAxisId={0}
            {...yAxisProps}
          />
          {lineKeys?.map((key, i) => {
            return (
              <Line
                activeDot={false}
                dataKey={key}
                dot={false}
                key={`${key}-line`}
                stroke={
                  colors[i] || DEFAULT_CHART_COLORS[i] || palette.grey[700]
                }
                type="natural"
                {...lineProps}
              />
            );
          })}

          <Tooltip
            formatter={(v: ValueType): string => numeral(v).format('0,0')}
            itemStyle={{ color: palette.secondary.dark }}
            labelStyle={{ color: palette.secondary.dark }}
            wrapperStyle={{ outline: 'none' }}
            {...tooltipProps}
          />

          {children}
        </ComposedChart>
      </StyledResponsiveContainer>
    </StyledContainer>
  );
};

export default LineChart;
