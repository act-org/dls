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
import { isFunction } from 'lodash';
import numeral from 'numeral';
import React, { useMemo } from 'react';
import {
  ComposedChart,
  Bar,
  BarProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
  CartesianGrid,
  CartesianGridProps,
  Tooltip,
  LabelList,
  LabelListProps,
  ResponsiveContainerProps,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

import { ILabelListData, TooltipPayloadProps, VariantType } from '~/types';

import {
  CustomizedAxisTick,
  CustomizedAxisTickProps,
} from './CustomizedAxisTick';
import CustomTooltip, { CustomToolTipProps } from './CustomTooltip';
import { StyledResponsiveContainer, StyledContainer } from './styles';
import { DataProps as ConsolidatedDataProps } from './types';

// Exporting this type here as well so that we can retain retro-compatibility.
// The interface used to be exported from this file, but was needed in the CustomTooltip component,
// generating a dependency cycle. If we remove this export from here, projects that use the lib and had
// imported DataProps directly from the BarCharts file would stop working.
export type DataProps = ConsolidatedDataProps;
export interface BarLabelProps {
  tooltipPayload: Array<TooltipPayloadProps>;
  width: number;
}

export interface ColorProps {
  [key: string]: string;
}

export interface BarChartProps {
  barKeys?: Array<string>;
  barProps?: Omit<BarProps, 'dataKey' | 'ref'>;
  cartesianGridProps?: CartesianGridProps;
  chartProps?: CategoricalChartProps;
  children?: React.ReactElement<unknown>;
  colors?: ColorProps;
  containerRef?: React.Ref<HTMLDivElement>;
  containerStyles?: React.CSSProperties;
  customizeBarFillColor?: (index: number, key: string) => string | undefined;
  customizedAxisTickProps?: CustomizedAxisTickProps;
  data: Array<DataProps>;
  height?: number | ((calculatedHeight: number) => number | undefined);
  labelListProps?: LabelListProps<ILabelListData>;
  maxHeight?: number | string;
  parentHeight?: number;
  responsiveContainerProps?: ResponsiveContainerProps;
  setTooltipBarId?: (value: string | undefined) => void;
  subLabelProps?: LabelListProps<ILabelListData>;
  subLabelWidth?: number;
  subLabels?: Array<string>;
  tooltipBarId?: string;
  tooltipProps?: CustomToolTipProps;
  UnhoveredTooltipComponent?: React.JSX.Element;
  variant?: VariantType;
  width?: number | string;
  xAxisProps?: XAxisProps;
  yAxisProps?: YAxisProps;
}

export const measureText = (font: string, text?: string): number => {
  const canvas = document
    .createElement('canvas')
    .getContext('2d') as CanvasRenderingContext2D;
  if (canvas && text) {
    canvas.font = font;

    return canvas.measureText(text).width;
  }

  return 120;
};

export const DEFAULT_BAR_CATEGORY_GAP = 8;
export const DEFAULT_BAR_GAP = 4;

export const BarChart: React.FC<BarChartProps> = ({
  barKeys = [],
  barProps,
  cartesianGridProps,
  chartProps,
  children,
  colors = {},
  containerRef,
  containerStyles,
  customizeBarFillColor,
  customizedAxisTickProps,
  data,
  height,
  labelListProps,
  maxHeight,
  responsiveContainerProps,
  setTooltipBarId,
  subLabelProps,
  subLabelWidth,
  subLabels,
  tooltipBarId,
  tooltipProps,
  variant,
  width,
  xAxisProps,
  yAxisProps,
}: BarChartProps): React.ReactElement<BarChartProps> => {
  const { palette, typography, spacing, customColors }: any = useTheme();

  const [barIdHovered, setBarIdHovered] = React.useState<string | undefined>(
    tooltipBarId,
  );

  // FIXME recharts uses react-smooth under the hood and that library has a know issue that sometimes prevents the charts from rendering labels,
  // when the issue is closed we can remove this workaround
  // issue link: https://github.com/recharts/react-smooth/issues/44
  const responsiveContainerKey = React.useMemo(() => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }, []);
  const [animate, setAnimate] = React.useState(true);
  const onAnimationStart = React.useCallback(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 1500);
  }, []);

  let finalHeight;
  let defaultHeight;
  if (barKeys.length) {
    defaultHeight =
      108 +
      (26 * (barKeys.length - 1) + 2 * (barKeys.length - 1)) +
      (data.length - 1) * (38 + 26 * (barKeys.length - 1));
  } else {
    defaultHeight =
      // eslint-disable-next-line no-nested-ternary
      data.length < 2
        ? 150
        : data.length <= 4
          ? 105 * data.length
          : 90 * data.length;
  }
  if (isFunction(height)) {
    finalHeight = height(defaultHeight);
  } else {
    finalHeight = height || defaultHeight;
  }

  const maxLabelWidth = useMemo(
    () =>
      data.reduce((acc, { name }) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const textWidth = measureText(
          `${typography.h4.fontSize}px ${typography.fontFamily}`,
          name?.toLocaleString(),
        );
        if (textWidth > acc) {
          return textWidth;
        }
        return acc;
      }, 0),
    [data, typography.h4.fontSize, typography.fontFamily],
  );

  const maxSubLabelWidth = useMemo(() => {
    const subKeys = subLabels || barKeys;
    return subKeys.reduce((acc, key) => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const textWidth = measureText(
        `${typography.caption.fontSize}px ${typography.fontFamily}`,
        key.toLocaleString(),
      );
      if (textWidth > acc) {
        return textWidth;
      }
      return acc;
    }, 0);
  }, [barKeys, subLabels, typography.caption.fontSize, typography.fontFamily]);

  let composedChartLeftMargin =
    (subLabelWidth || maxSubLabelWidth) + parseInt(String(spacing(3.5)), 10);
  if (maxLabelWidth <= 20) {
    composedChartLeftMargin =
      (subLabelWidth || maxSubLabelWidth) - parseInt(String(spacing(1.5)), 10);
  } else if (maxLabelWidth <= 60 || variant) {
    composedChartLeftMargin =
      (subLabelWidth || maxSubLabelWidth) + parseInt(String(spacing(1)), 10);
  }

  return (
    <StyledContainer
      height={finalHeight}
      maxHeight={maxHeight}
      ref={containerRef}
      style={containerStyles}
      tabIndex={0}
      width={width || '100%'}
    >
      <StyledResponsiveContainer
        debounce={50}
        height={finalHeight}
        key={responsiveContainerKey}
        width="100%"
        {...responsiveContainerProps}
      >
        <ComposedChart
          barCategoryGap={DEFAULT_BAR_CATEGORY_GAP}
          barGap={DEFAULT_BAR_GAP}
          data={data}
          layout="vertical"
          margin={{
            bottom: parseInt(String(spacing(0.6)), 10),
            left: composedChartLeftMargin,
            right: parseInt(String(spacing(8)), 10),
            top: parseInt(String(spacing(2)), 10),
          }}
          maxBarSize={30}
          style={{
            cursor: chartProps?.onClick ? 'pointer' : undefined,
            fontFamily: typography.fontFamily,
          }}
          {...chartProps}
        >
          <CartesianGrid
            stroke={palette.grey[100]}
            {...(cartesianGridProps as CartesianGridProps)}
          />
          <XAxis
            axisLine={false}
            orientation="top"
            style={{
              fill: palette.grey[700],
              fontSize: typography.caption.fontSize,
            }}
            tickFormatter={(v: number): string => numeral(v).format('0,0')}
            type="number"
            xAxisId={0}
            {...xAxisProps}
          />
          <YAxis
            dataKey="name"
            padding={{ bottom: 10, top: 10 }}
            style={{
              fill: palette.secondary.dark,
              fontSize: typography.h4.fontSize,
              fontWeight: Number(typography.fontWeightRegular),
            }}
            tick={
              <CustomizedAxisTick
                variant={variant}
                {...customizedAxisTickProps}
              />
            }
            tickLine={false}
            type="category"
            {...yAxisProps}
          />

          {barKeys.map((key, i) => {
            return (
              <Bar
                dataKey={key}
                fill={
                  customizeBarFillColor
                    ? customizeBarFillColor(i, key)
                    : clsx(
                        i === 0 && customColors?.chart?.primary?.first,
                        i === 1 && customColors?.chart?.primary?.second,
                        i === 2 && customColors?.chart?.primary?.third,
                        i === 3 && customColors?.chart?.primary?.fourth,
                        i === 4 && customColors?.chart?.primary?.fifth,
                        i === 5 && customColors?.chart?.primary?.sixth,
                        i > 5 && palette.grey[700],
                      )
                }
                id={key}
                isAnimationActive={animate}
                key={`${key}-bar`}
                onAnimationStart={onAnimationStart}
                onMouseLeave={(): void => {
                  if (setTooltipBarId) setTooltipBarId(undefined);
                  setBarIdHovered(undefined);
                }}
                onMouseOver={(): void => {
                  if (barIdHovered !== key) {
                    if (setTooltipBarId) setTooltipBarId(key);
                    setBarIdHovered(key);
                  }
                }}
                style={
                  colors[key] ? { backgroundColor: colors[key] } : undefined
                }
                {...(barProps as Omit<BarProps, 'dataKey' | 'ref'>)}
              >
                <LabelList
                  dataKey={key}
                  formatter={(v: number): string => numeral(v).format('0,0')}
                  onMouseLeave={(): void => {
                    if (setTooltipBarId) setTooltipBarId(undefined);
                    setBarIdHovered(undefined);
                  }}
                  onMouseOver={(): void => {
                    if (barIdHovered !== key) {
                      if (setTooltipBarId) setTooltipBarId(key);
                      setBarIdHovered(key);
                    }
                  }}
                  position="right"
                  style={{
                    fill: palette.grey[700],
                    fontSize: typography.caption.fontSize,
                  }}
                  {...labelListProps}
                />
                {barKeys.length > 1 && (
                  <LabelList
                    position="left"
                    style={{
                      fill: palette.grey[700],
                      fontSize: typography.caption.fontSize,
                    }}
                    valueAccessor={(bar: BarLabelProps): string =>
                      subLabels ? subLabels[i] : bar?.tooltipPayload[0]?.name
                    }
                    {...subLabelProps}
                  />
                )}
              </Bar>
            );
          })}

          <Tooltip
            content={
              <CustomTooltip barId={tooltipBarId || barIdHovered} data={data} />
            }
            itemStyle={{ color: palette.secondary.dark }}
            labelStyle={{ color: palette.secondary.dark }}
            tooltipColor={palette.secondary.dark}
            wrapperStyle={{ outline: 'none' }}
            {...tooltipProps}
          />

          {children}
        </ComposedChart>
      </StyledResponsiveContainer>
    </StyledContainer>
  );
};

BarChart.defaultProps = {
  barKeys: undefined,
  barProps: undefined,
  cartesianGridProps: undefined,
  chartProps: undefined,
  children: undefined,
  colors: undefined,
  containerRef: undefined,
  containerStyles: undefined,
  customizeBarFillColor: undefined,
  customizedAxisTickProps: undefined,
  height: undefined,
  labelListProps: undefined,
  maxHeight: undefined,
  parentHeight: undefined,
  responsiveContainerProps: undefined,
  setTooltipBarId: undefined,
  subLabelProps: undefined,
  subLabels: undefined,
  subLabelWidth: undefined,
  tooltipBarId: undefined,
  tooltipProps: undefined,
  UnhoveredTooltipComponent: undefined,
  variant: undefined,
  width: undefined,
  xAxisProps: undefined,
  yAxisProps: undefined,
};

export default BarChart;
