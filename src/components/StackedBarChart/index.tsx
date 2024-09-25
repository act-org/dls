/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useTheme, useThemeProps } from '@mui/material/styles';
import numeral from 'numeral';
import React, { useMemo } from 'react';
import { Bar, BarProps, LabelList, LabelListProps } from 'recharts';

import {
  BarChart,
  BarChartProps,
  BarLabelProps,
  measureText,
} from '~/components/BarChart';
import { DataProps } from '~/components/BarChart/types';
import DEFAULT_CHART_COLORS from '~/constants/DEFAULT_CHART_COLORS';
import DLS_COMPONENT_NAMES from '~/constants/DLS_COMPONENT_NAMES';
import { ILabelListData } from '~/types';

import { StyledTooltipText } from './styles';

export interface StackedBarChartProps {
  barChartProps?: Omit<BarChartProps, 'data'>;
  barKeys?: Array<Array<string>>;
  barProps?: BarProps;
  children?: React.ReactElement<unknown>;
  colors?: string[];
  customizeBarText?: (index: number) => React.CSSProperties;
  data: Array<DataProps>;
  labelListProps?: LabelListProps<ILabelListData>;
  setTooltipBarId?: (value: string | undefined) => void;
  subLabelProps?: LabelListProps<ILabelListData>;
  subLabels?: Array<string>;
  tooltipBarId?: string;
}

export const StackedBarChart: React.FC<StackedBarChartProps> = (
  inProps: StackedBarChartProps,
): React.ReactElement<StackedBarChartProps> => {
  const {
    barChartProps,
    barKeys = [],
    barProps,
    children,
    colors = [],
    customizeBarText,
    data,
    labelListProps,
    setTooltipBarId,
    subLabelProps,
    subLabels,
    tooltipBarId,
  } = useThemeProps({
    name: DLS_COMPONENT_NAMES.STACKED_BAR_CHART,
    props: inProps,
  });

  const { palette, typography } = useTheme();

  const [barIdHovered, setBarIdHovered] = React.useState<string | undefined>(
    tooltipBarId,
  );

  const subLabelKeys =
    subLabels ||
    barKeys.reduce((acc, keys) => [...acc, keys[0]], [] as Array<string>);

  // FIXME recharts uses react-smooth under the hood and that library has a know issue that sometimes prevents the charts from rendering labels,
  // when the issue is closed we can remove this workaround
  // issue link: https://github.com/recharts/react-smooth/issues/44
  const [animate, setAnimate] = React.useState(true);
  const onAnimationStart = React.useCallback(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 1500);
  }, []);

  const maxSubLabelWidth = useMemo(
    () =>
      subLabelKeys.reduce((acc, key) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const textWidth = measureText(
          `${subLabelProps?.style?.fontSize || typography.body1.fontSize}px ${typography.fontFamily}`,
          key.toLocaleString(),
        );
        if (textWidth > acc) {
          return textWidth;
        }
        return acc;
      }, 0),
    [subLabelKeys, subLabelProps?.style?.fontSize, typography.fontFamily],
  );

  const renderAdditionalTooltipInfo = (
    barId: string | undefined,
    payload: unknown,
  ): JSX.Element[] | null => {
    const keys = barKeys.find(bKeys => bKeys.some(key => key === barId));
    const info = (
      payload as { dataKey: string; value: number; payload: DataProps }[]
    ).find(el => el.dataKey === barId);

    if (!info || !keys) {
      return null;
    }

    return keys.map(key => (
      <StyledTooltipText key={key}>
        {key} Value: {numeral(info.payload[key]).format('0,0')}
      </StyledTooltipText>
    ));
  };
  return (
    <BarChart
      chartProps={{ barGap: 4 }}
      data={data}
      height={
        108 +
        (26 * (barKeys.length - 1) + 2 * (barKeys.length - 1)) +
        (data.length - 1) * (38 + 26 * (barKeys.length - 1))
      }
      subLabelWidth={maxSubLabelWidth}
      tooltipBarId={tooltipBarId || barIdHovered}
      {...barChartProps}
      tooltipProps={{
        renderAdditionalInfo: renderAdditionalTooltipInfo,
        ...barChartProps?.tooltipProps,
      }}
    >
      <>
        {barKeys.map((keys, index) => {
          return keys.map((key, i) => {
            return (
              <Bar
                dataKey={key}
                fill={
                  barChartProps?.customizeBarFillColor?.(i, key) ||
                  colors[i] ||
                  DEFAULT_CHART_COLORS[i] ||
                  palette.grey[700]
                }
                isAnimationActive={animate}
                key={`${key}-bar`}
                onAnimationStart={onAnimationStart}
                onMouseLeave={(): void => {
                  if (setTooltipBarId) setTooltipBarId(undefined);
                  setBarIdHovered(undefined);
                }}
                onMouseOver={(): void => {
                  if (barIdHovered !== keys[0]) {
                    if (setTooltipBarId) setTooltipBarId(keys[0]);
                    setBarIdHovered(keys[0]);
                  }
                }}
                stackId={index}
                {...(barProps as Omit<BarProps, 'dataKey' | 'ref'>)}
              >
                <LabelList
                  formatter={(v: number): string => numeral(v).format('0,0')}
                  onMouseLeave={(): void => {
                    if (setTooltipBarId) setTooltipBarId(undefined);
                    setBarIdHovered(undefined);
                  }}
                  onMouseOver={(): void => {
                    if (barIdHovered !== keys[0]) {
                      if (setTooltipBarId) setTooltipBarId(keys[0]);
                      setBarIdHovered(keys[0]);
                    }
                  }}
                  position="insideRight"
                  style={customizeBarText ? customizeBarText(i) : {}}
                  valueAccessor={(
                    bar: BarLabelProps,
                  ): string | number | undefined =>
                    bar.width > 25 ? bar?.tooltipPayload[0]?.value : undefined
                  }
                  {...labelListProps}
                />
                {barKeys.length > 1 && i === 0 ? (
                  <LabelList
                    position="left"
                    valueAccessor={(bar: BarLabelProps): string =>
                      subLabels
                        ? subLabels[index]
                        : bar?.tooltipPayload[0]?.name
                    }
                    {...subLabelProps}
                  />
                ) : undefined}
              </Bar>
            );
          });
        })}
        {children}
      </>
    </BarChart>
  );
};

export default StackedBarChart;
