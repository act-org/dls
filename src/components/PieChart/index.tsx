/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

/* eslint-disable react/no-array-index-key */

import { Grid, TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import numeral from 'numeral';
import React, { useMemo } from 'react';
import {
  Cell,
  Pie,
  PieProps,
  PieChart as RechartsPieChart,
  Legend,
  LegendProps,
  Tooltip,
  TooltipProps,
  ResponsiveContainer,
  ResponsiveContainerProps,
  Label,
} from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

import { VariantType } from '~/types';

import InnerPieComponent from './InnerPieComponent';
import { PieLegend } from './PieLegend';
import { StyledGridTitle, StyledGridBody, StyledTypography } from './styles';
import {
  CustomLegendComponentType,
  HighlightComponentType,
  PieDataProps as TypesPieDatProps,
} from './types';

type TitleProps = TypographyProps & {
  title: string;
};
export type PieDataProps = TypesPieDatProps;

export interface PieChartProps {
  children?: React.ReactElement<unknown>;
  CustomLegendIcon?: CustomLegendComponentType;
  data: Array<TypesPieDatProps>;
  height?: number;
  legendProps?: LegendProps;
  pieChartProps?: CategoricalChartProps;
  pieProps?: Partial<PieProps>;
  responsiveContainerProps?: ResponsiveContainerProps;
  titleProps?: Partial<TitleProps>;
  tooltipProps?: TooltipProps<ValueType, NameType>;
  variant?: VariantType;
  width?: number | string;
  HighlightComponent?: HighlightComponentType;
}

export const DEFAULT_PIE_GAP_ANGLE = 1;
export const DEFAULT_PIE_MIN_ANGLE = 1;

/**
 * # PieChart
 * The existence of HighlightComponent will automatically push the Legend from inside the PieChart
 */
export const PieChart: React.FC<PieChartProps> = ({
  children,
  data,
  height,
  legendProps,
  pieChartProps,
  pieProps,
  responsiveContainerProps,
  titleProps,
  tooltipProps,
  variant,
  width,
  HighlightComponent,
  CustomLegendIcon,
}: PieChartProps): React.ReactElement<PieChartProps> => {
  const { customColors, palette, spacing, typography }: any = useTheme();
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const pieTotalValue = useMemo(
    () => data.reduce((acc, { value }) => acc + value, 0),
    [data],
  );

  const hasHighlight = !!HighlightComponent;

  const mouseEnter = (_: unknown, hoveredIndex: number): void => {
    setActiveIndex(hoveredIndex);
  };

  const resetMouseEnter = (): void => {
    setActiveIndex(null);
  };

  return (
    <Grid container direction="column" item spacing={2} xs={12}>
      {titleProps && (
        <StyledGridTitle item xs>
          <StyledTypography
            align="center"
            hasHighlight={hasHighlight}
            variant="body2"
            variantSize={variant}
            {...titleProps}
            className={clsx(titleProps.className && titleProps.className)}
          >
            {titleProps.title}
          </StyledTypography>
        </StyledGridTitle>
      )}

      <StyledGridBody item xs>
        <ResponsiveContainer
          debounce={50}
          height={height || (variant ? 300 : 350)}
          width={width || '100%'}
          {...responsiveContainerProps}
        >
          <RechartsPieChart
            margin={{
              bottom: parseInt(String(spacing(1)), 10),
              left: parseInt(String(spacing(1)), 10),
              right: parseInt(String(spacing(1)), 10),
              top: parseInt(String(spacing(1)), 10),
            }}
            style={{ fontFamily: typography.fontFamily, position: 'absolute' }}
            {...pieChartProps}
          >
            <Pie
              data={data}
              dataKey="value"
              innerRadius="80%"
              minAngle={DEFAULT_PIE_MIN_ANGLE}
              onMouseEnter={mouseEnter}
              onMouseLeave={resetMouseEnter}
              outerRadius="100%"
              paddingAngle={DEFAULT_PIE_GAP_ANGLE}
              {...(pieProps as Omit<PieProps, 'dataKey' | 'ref'>)}
            >
              {data.map(({ color }, i) => (
                <Cell
                  fill={
                    color ||
                    clsx(
                      i === 0 && customColors?.chart?.tertiary?.first,
                      i === 1 && customColors?.chart?.tertiary?.second,
                      i === 2 && customColors?.chart?.tertiary?.third,
                      i === 3 && customColors?.chart?.tertiary?.fourth,
                      i === 4 && customColors?.chart?.tertiary?.fifth,
                      i === 5 && customColors?.chart?.tertiary?.sixth,
                      i > 5 && palette.grey[700],
                    )
                  }
                  fillOpacity={
                    activeIndex === null || activeIndex === i ? 1 : 0.4
                  }
                  key={`cell-${i}`}
                />
              ))}
              {activeIndex !== null && HighlightComponent ? (
                <Label
                  content={
                    <InnerPieComponent
                      HighlightComponent={HighlightComponent}
                      payload={data[activeIndex]}
                      pieTotalValue={pieTotalValue}
                    />
                  }
                  position="center"
                />
              ) : null}
            </Pie>

            <Legend
              align={data.length > 4 || hasHighlight ? 'right' : 'center'}
              content={
                <PieLegend
                  CustomLegendIcon={CustomLegendIcon}
                  pieTotalValue={pieTotalValue}
                  showAsSquare={
                    legendProps?.align === 'right' && data.length > 3
                  }
                />
              }
              layout="vertical"
              onMouseEnter={mouseEnter}
              onMouseLeave={resetMouseEnter}
              verticalAlign={data.length > 6 ? 'top' : 'middle'}
              {...(legendProps as Legend)}
            />

            <Tooltip
              formatter={(v: ValueType): string => numeral(v).format('0,0')}
              itemStyle={{ color: palette.secondary.dark }}
              labelStyle={{ color: palette.secondary.dark }}
              wrapperStyle={{ outline: 'none' }}
              {...tooltipProps}
            />

            {children}
          </RechartsPieChart>
        </ResponsiveContainer>
      </StyledGridBody>
    </Grid>
  );
};

PieChart.defaultProps = {
  children: undefined,
  CustomLegendIcon: undefined,
  height: undefined,
  HighlightComponent: undefined,
  legendProps: undefined,
  pieChartProps: undefined,
  pieProps: undefined,
  responsiveContainerProps: undefined,
  titleProps: undefined,
  tooltipProps: undefined,
  variant: undefined,
  width: undefined,
};

export default PieChart;