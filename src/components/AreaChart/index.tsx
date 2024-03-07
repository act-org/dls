/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable react/no-array-index-key */

import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import React from 'react';
import {
  Area,
  AreaChart as RechartsAreaChart,
  Legend,
  LegendProps,
  Tooltip,
  TooltipProps,
  ResponsiveContainer,
  ResponsiveContainerProps,
  XAxis,
  YAxis,
  XAxisProps,
  YAxisProps,
  Label,
  ReferenceLine,
  AreaProps,
  LabelProps,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

export interface AreaDataProps {
  name?: string;
  [key: string]: unknown;
}

export interface AreaColorProps {
  [key: string]: string;
}

export interface AreaChartProps {
  areaChartProps?: CategoricalChartProps;
  areaKeys: string[];
  areaProps?: Partial<AreaProps>;
  children?: React.ReactNode;
  colors?: AreaColorProps;
  data: AreaDataProps[];
  height?: number;
  legendProps?: LegendProps;
  responsiveContainerProps?: ResponsiveContainerProps;
  showLegend?: boolean;
  tooltipProps?: TooltipProps<ValueType, NameType>;
  width?: number;
  xAxisProps?: XAxisProps;
  xLabel?: string;
  xLabelProps?: LabelProps;
  yAxisProps?: YAxisProps;
  yLabel?: string;
  yLabelProps?: LabelProps;
  yReferenceValue?: number;
}

/**
 * # AreaChart
 *
 */
export const AreaChart: React.FC<AreaChartProps> = ({
  children,
  colors,
  areaProps,
  areaChartProps,
  responsiveContainerProps,
  tooltipProps,
  data,
  height,
  legendProps,
  width,
  showLegend = false,
  areaKeys,
  xAxisProps,
  yAxisProps,
  xLabel,
  xLabelProps,
  yLabel,
  yLabelProps,
  yReferenceValue,
}: AreaChartProps): React.ReactElement => {
  const { customColors, palette, spacing, typography }: any = useTheme();

  return (
    <Grid container direction="column" item spacing={2} xs={12}>
      <ResponsiveContainer
        debounce={50}
        height={height || 400}
        width={width || '100%'}
        {...responsiveContainerProps}
      >
        <RechartsAreaChart
          data={data}
          margin={{
            bottom: parseInt(String(spacing(1)), 10),
            left: parseInt(String(spacing(1)), 10),
            right: parseInt(String(spacing(1)), 10),
            top: parseInt(String(spacing(1)), 10),
          }}
          style={{ fontFamily: typography.fontFamily, position: 'absolute' }}
          {...areaChartProps}
        >
          <XAxis
            axisLine={false}
            dataKey="name"
            height={50}
            orientation="bottom"
            padding={{ left: 40, right: 30 }}
            style={{
              fill: palette.secondary.dark,
              fontSize: typography.caption.fontSize,
            }}
            tickLine={false}
            xAxisId={0}
            {...xAxisProps}
          >
            {xLabel && (
              <Label
                position="insideBottom"
                style={{
                  fill: palette.secondary.dark,
                  fontSize: typography.h4.fontSize,
                  paddingTop: '10px',
                  userSelect: 'none',
                }}
                {...xLabelProps}
              >
                {xLabel}
              </Label>
            )}
          </XAxis>
          <YAxis
            axisLine={false}
            padding={{ bottom: 20, top: 20 }}
            style={{
              fill: palette.secondary.dark,
              fontSize: typography.h4.fontSize,
              fontWeight: Number(typography.fontWeightRegular),
            }}
            tickCount={5}
            tickLine={false}
            type="number"
            yAxisId={0}
            {...yAxisProps}
          >
            {yLabel && (
              <Label
                angle={-90}
                offset={15}
                position="insideLeft"
                style={{
                  fill: palette.secondary.dark,
                  fontSize: typography.h4.fontSize,
                  userSelect: 'none',
                }}
                {...yLabelProps}
              >
                {yLabel}
              </Label>
            )}
          </YAxis>
          {(yReferenceValue || yReferenceValue === 0) && (
            <ReferenceLine stroke={palette.grey[400]} y={yReferenceValue} />
          )}
          {areaKeys.map((key, i) => (
            <Area
              dataKey={key}
              fill={clsx(
                i === 0 && customColors?.chart?.primary?.first,
                i === 1 && customColors?.chart?.primary?.second,
                i === 2 && customColors?.chart?.primary?.third,
                i === 3 && customColors?.chart?.primary?.fourth,
                i === 4 && customColors?.chart?.primary?.fifth,
                i === 5 && customColors?.chart?.primary?.sixth,
                i > 5 && palette.grey[700],
              )}
              fillOpacity={1}
              key={`${key}-area`}
              stroke="none"
              style={
                colors?.[key]
                  ? { ...areaProps?.style, fill: colors[key] }
                  : areaProps?.style
              }
              {...(areaProps as Omit<AreaProps, 'dataKey' | 'ref'>)}
            />
          ))}

          {showLegend && (
            <Legend
              align={data.length > 4 ? 'right' : 'center'}
              layout="vertical"
              verticalAlign={data.length > 6 ? 'top' : 'middle'}
              {...(legendProps as Legend)}
            />
          )}
          <Tooltip
            itemStyle={{ color: palette.secondary.dark }}
            labelStyle={{ color: palette.secondary.dark }}
            wrapperStyle={{ outline: 'none' }}
            {...tooltipProps}
          />
          {children}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </Grid>
  );
};

AreaChart.defaultProps = {
  areaChartProps: undefined,
  areaProps: undefined,
  children: undefined,
  colors: undefined,
  height: undefined,
  legendProps: undefined,
  responsiveContainerProps: undefined,
  showLegend: undefined,
  tooltipProps: undefined,
  width: undefined,
  xAxisProps: undefined,
  xLabel: undefined,
  xLabelProps: undefined,
  yAxisProps: undefined,
  yLabel: undefined,
  yLabelProps: undefined,
  yReferenceValue: undefined,
};

export default AreaChart;
