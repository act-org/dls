/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable react/no-array-index-key */

import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
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
import { ILabelListData } from '~/types';

import OverlappedLabel from './OverlappedLabel';

export interface OverlappedBarDataProps {
  color?: string;
  name?: string;
  [key: string]: unknown;
}

export interface OverlappedBarChartProps {
  barKeys: string[];
  barProps?: Omit<BarProps, 'dataKey' | 'ref'>;
  barChartProps?: Omit<BarChartProps, 'data'>;
  children?: React.ReactElement<unknown>;
  data: Array<OverlappedBarDataProps>;
  initialBarSize?: number;
  labelProps?: LabelListProps<ILabelListData>;
  xAxisProps?: XAxisProps;
}

export const OverlappedBarChart: React.FC<OverlappedBarChartProps> = ({
  barKeys,
  barProps,
  barChartProps,
  children,
  data,
  initialBarSize = 320,
  labelProps,
  xAxisProps,
}: OverlappedBarChartProps): React.ReactElement<OverlappedBarChartProps> => {
  const { customColors, palette, spacing }: any = useTheme();

  return (
    <BarChart
      cartesianGridProps={{ stroke: palette.common.white }}
      chartProps={{
        layout: 'horizontal',
        margin: { top: parseInt(String(spacing(5)), 10) },
      }}
      data={data}
      tooltipProps={{ contentStyle: { backgroundColor: palette.common.white } }}
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
                      clsx(
                        i === 0 && customColors?.chart?.quaternary?.first,
                        i === 1 && customColors?.chart?.quaternary?.second,
                        i === 2 && customColors?.chart?.quaternary?.third,
                        i === 3 && customColors?.chart?.quaternary?.fourth,
                        i === 4 && customColors?.chart?.quaternary?.fifth,
                        i === 5 && customColors?.chart?.quaternary?.sixth,
                        i > 5 && palette.grey[800],
                      )
                    }
                    key={`cell-${i}`}
                  />
                ))}
                <LabelList
                  content={
                    <OverlappedLabel
                      isOutsideBar
                      labelColor={palette.text.primary}
                      valueColor={palette.secondary.dark}
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
                      labelColor={palette.common.white}
                      valueColor={palette.common.white}
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

OverlappedBarChart.defaultProps = {
  barChartProps: undefined,
  barProps: undefined,
  children: undefined,
  initialBarSize: undefined,
  labelProps: undefined,
  xAxisProps: undefined,
};

export default OverlappedBarChart;
