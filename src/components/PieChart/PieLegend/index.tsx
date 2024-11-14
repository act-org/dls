/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/no-array-index-key */

import numeral from 'numeral';
import * as React from 'react';
import { LegendProps } from 'recharts';
import { Payload } from 'recharts/types/component/DefaultLegendContent';

import { CustomLegendComponentType, PieDataProps } from '../types';

import {
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  StyledPaper,
  StyledUl,
} from './styles';

export interface PayloadProps {
  color: string | undefined;
  payload: {
    value: number;
  };
  value: string;
}

export interface PieLegendProps extends Partial<LegendProps> {
  chartHeight?: number;
  chartLegendTextFontSize?: number | string;
  chartLegendTextFontSizeSmall?: number | string; // Used when the chartWidth & chartHeight is less than 350 px
  chartWidth?: number;
  CustomLegendIcon?: CustomLegendComponentType;
  formatValue?: (
    value: number,
    totalValue: number,
  ) => JSX.Element | string | null;
  pieTotalValue: number;
  showAsSquare?: boolean;
}

export const PieLegend: React.FC<PieLegendProps> = (
  props: PieLegendProps,
): React.ReactElement<PieLegendProps> => {
  const {
    CustomLegendIcon,
    chartHeight,
    chartLegendTextFontSize,
    chartLegendTextFontSizeSmall,
    chartWidth,
    formatValue,
    onMouseEnter,
    onMouseLeave,
    payload,
    pieTotalValue,
    showAsSquare,
  } = props;

  const handleMouseEnter = (
    element: Payload,
    index: number,
    e: React.MouseEvent<Element, MouseEvent>,
  ): void => {
    onMouseEnter?.(element, index, e);
  };
  return (
    <StyledUl numberOfItems={payload?.length || 0}>
      {payload?.map((element, i) => {
        const { value, color, payload: entryPayload } = element;
        return (
          <StyledListItem
            chartWidth={chartWidth}
            key={`item-${i}`}
            onMouseEnter={
              onMouseEnter
                ? (e): void => handleMouseEnter(element, i, e)
                : undefined
            }
            onMouseLeave={
              onMouseLeave
                ? (e): void => onMouseLeave(element, i, e)
                : undefined
            }
          >
            <StyledListItemIcon>
              {CustomLegendIcon ? (
                <CustomLegendIcon
                  chartWidth={chartWidth}
                  color={color}
                  index={i}
                  optionsLength={payload?.length}
                  payload={entryPayload as Partial<PieDataProps>}
                  showAsSquare={showAsSquare}
                />
              ) : (
                <StyledPaper
                  chartWidth={chartWidth}
                  elevation={0}
                  index={i}
                  optionsLength={payload?.length}
                  showAsSquare={showAsSquare}
                  style={color ? { backgroundColor: color } : undefined}
                />
              )}
            </StyledListItemIcon>
            {entryPayload && (
              <StyledListItemText
                chartHeight={chartHeight}
                chartLegendTextFontSize={chartLegendTextFontSize}
                chartLegendTextFontSizeSmall={chartLegendTextFontSizeSmall}
                chartWidth={chartWidth}
                primary={value}
                secondary={
                  formatValue
                    ? formatValue(entryPayload.value as number, pieTotalValue)
                    : `${numeral(entryPayload.value).format('0,0')} [${(Number.isNaN(
                        entryPayload.value / pieTotalValue,
                      )
                        ? 0
                        : (entryPayload.value / pieTotalValue) * 100
                      ).toFixed(1)}%]`
                }
              />
            )}
          </StyledListItem>
        );
      })}
    </StyledUl>
  );
};

export default PieLegend;
