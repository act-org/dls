/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import numeral from 'numeral';
import React from 'react';
import {
  Line,
  LineProps,
  CartesianGridProps,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
  ResponsiveContainerProps,
  XAxisProps,
  YAxisProps,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

import { StyledContainer, StyledResponsiveContainer } from './styles';

export interface LineRawDataProps {
  label: string;
  [key: string]: unknown;
}

export interface LineChartProps {
  cartesianGridProps?: CartesianGridProps;
  chartProps?: CategoricalChartProps;
  children?: React.ReactElement<unknown>;
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

export const LineChart: React.FC<LineChartProps> = ({
  cartesianGridProps,
  chartProps,
  children,
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
}: LineChartProps): React.ReactElement<LineChartProps> => {
  const { customColors, palette, spacing, typography }: any = useTheme();

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
            style={{
              fill: palette.grey[700],
              fontSize: typography.caption.fontSize,
            }}
            tickCount={data.length}
            xAxisId={0}
            {...xAxisProps}
          />
          <YAxis
            orientation="left"
            padding={{ bottom: 10, top: 10 }}
            style={{
              fill: palette.grey[700],
              fontSize: typography.caption.fontSize,
              fontWeight: Number(typography.fontWeightRegular),
            }}
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
                stroke={clsx(
                  i === 0 && customColors?.chart?.tertiary?.first,
                  i === 1 && customColors?.chart?.tertiary?.second,
                  i === 2 && customColors?.chart?.tertiary?.third,
                  i === 3 && customColors?.chart?.tertiary?.fourth,
                  i === 4 && customColors?.chart?.tertiary?.fifth,
                  i === 5 && customColors?.chart?.tertiary?.sixth,
                  i > 5 && palette.grey[700],
                )}
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

LineChart.defaultProps = {
  cartesianGridProps: undefined,
  chartProps: undefined,
  children: undefined,
  containerStyles: undefined,
  height: undefined,
  lineKeys: undefined,
  lineProps: undefined,
  maxHeight: undefined,
  responsiveContainerProps: undefined,
  tooltipProps: undefined,
  width: undefined,
  xAxisProps: undefined,
  yAxisProps: undefined,
};

export default LineChart;
