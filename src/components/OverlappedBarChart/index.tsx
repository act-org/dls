/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/no-array-index-key */

import { useTheme, useThemeProps } from '@mui/material/styles';
import * as React from 'react';
import {
  Bar,
  BarProps,
  Cell,
  LabelList,
  LabelListProps,
  XAxis,
  XAxisProps,
} from 'recharts';

import { BarChart, BarChartProps } from '~/components/BarChart';
import DEFAULT_CHART_COLORS from '~/constants/DEFAULT_CHART_COLORS';
import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import { ILabelListData } from '~/types';

import OverlappedLabel from './OverlappedLabel';

export interface OverlappedBarDataProps {
  color?: string;
  name?: string;
  [key: string]: unknown;
}

export interface OverlappedBarChartProps {
  barChartProps?: Omit<BarChartProps, 'data'>;
  barKeys: string[];
  barProps?: Omit<BarProps, 'dataKey' | 'ref'>;
  barTextColors?: string[]; // From the most outter bar to the most inner bar
  children?: React.ReactElement<unknown>;
  colors?: string[];
  data: Array<OverlappedBarDataProps>;
  initialBarSize?: number;
  innerBarTextColor?: string;
  labelProps?: LabelListProps<ILabelListData>;
  xAxisProps?: XAxisProps;
}

export const OverlappedBarChart: React.FC<OverlappedBarChartProps> = (
  inProps: OverlappedBarChartProps,
): React.ReactElement<OverlappedBarChartProps> => {
  const {
    barChartProps,
    barKeys,
    barProps,
    barTextColors,
    children,
    colors = [],
    data,
    initialBarSize = 320,
    innerBarTextColor,
    labelProps,
    xAxisProps,
  } = useThemeProps({
    name: DLS_COMPONENT_NAMES.OVERLAPPED_BAR_CHART,
    props: inProps,
  });

  const { palette, spacing } = useTheme();
  return (
    <BarChart
      cartesianGridProps={{ stroke: palette.common.white }}
      chartProps={{
        layout: 'horizontal',
        margin: { top: parseInt(String(spacing(5)), 10) },
      }}
      data={data}
      tooltipProps={{
        contentStyle: {
          backgroundColor: palette.common.white,
        },
        wrapperStyle: {
          textTransform: 'capitalize',
        },
      }}
      xAxisProps={{
        dataKey: 'name',
        hide: true,
        orientation: 'bottom',
        type: 'category',
      }}
      yAxisProps={{ dataKey: undefined, dx: 0, hide: true, type: 'number' }}
      {...barChartProps}
    >
      <>
        {barKeys.map((key, index) => {
          const commonLabelProps = {
            data: data as Record<string, string | number>[],
            index,
            label: key,
            outsideBarDataKey: barKeys[0],
          };
          if (index === 0) {
            return (
              <Bar
                barSize={initialBarSize}
                dataKey={key}
                key={`${key}-bar`}
                xAxisId={index}
                {...(barProps as Omit<BarProps, 'dataKey' | 'ref'>)}
              >
                {data.map(({ color }, i) => (
                  <Cell
                    fill={
                      color ||
                      colors[i] ||
                      DEFAULT_CHART_COLORS[i] ||
                      palette.grey[800]
                    }
                    key={`cell-${i}`}
                  />
                ))}
                <LabelList
                  content={
                    <OverlappedLabel
                      isOutsideBar
                      textColor={barTextColors?.[index]}
                      {...commonLabelProps}
                    />
                  }
                  dataKey={key}
                  {...labelProps}
                />
              </Bar>
            );
          }

          return (
            <React.Fragment key={`${key}-bar`}>
              <XAxis dataKey="name" hide xAxisId={index} {...xAxisProps} />
              <Bar
                barSize={initialBarSize - initialBarSize * (index * 0.15)}
                dataKey={key}
                fill={palette.common.white}
                fillOpacity={1 - index * 0.3}
                xAxisId={index}
                {...(barProps as Omit<BarProps, 'dataKey' | 'ref'>)}
              >
                <LabelList
                  content={
                    <OverlappedLabel
                      barTextColors={barTextColors}
                      innerBarTextColor={innerBarTextColor}
                      textColor={barTextColors?.[index]}
                      {...commonLabelProps}
                    />
                  }
                  dataKey={key}
                  {...labelProps}
                />
              </Bar>
            </React.Fragment>
          );
        })}

        {children}
      </>
    </BarChart>
  );
};

export default OverlappedBarChart;
