/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import numeral from 'numeral';
import React from 'react';
import { TooltipProps } from 'recharts';
import { NameType, Payload, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { DataProps } from '../types';

export interface CustomToolTipProps extends TooltipProps<ValueType, NameType> {
  barId?: string;
  data?: DataProps[];
  formatLabel?: (label: unknown, dataKey: unknown, payload?: Payload<ValueType, NameType>[], data?: DataProps[]) => React.ReactElement | string | null;
  formatValue?: (value: unknown, payload?: Payload<ValueType, NameType>[]) => unknown;
  formatValueLabel?: (label: unknown, dataKey: unknown, payload?: Payload<ValueType, NameType>[]) => React.ReactElement | string | null;
  renderAdditionalInfo?: (
    barId: string | undefined,
    payload: Payload<ValueType, NameType>[],
    data?: DataProps[],
    tooltipLabel?: unknown,
  ) => React.ReactElement | React.ReactElement[] | null;
  showValue?: boolean;
  tooltipColor?: string;
  valueLabel?: string;
}

export const CustomTooltip: React.FC<CustomToolTipProps> = (props: CustomToolTipProps): React.ReactElement<CustomToolTipProps> | null => {
  const {
    barId,
    data,
    formatLabel,
    formatValue,
    formatValueLabel,
    label: tooltipLabel,
    payload,
    renderAdditionalInfo,
    showValue = true,
    tooltipColor,
    valueLabel,
  } = props;

  if (payload) {
    let label;
    let values;
    const hoveredBar = payload.find(el => el.dataKey === barId);
    if (hoveredBar) {
      label = formatLabel ? formatLabel(tooltipLabel, hoveredBar.dataKey, payload, data) : `${tooltipLabel || ''} - ${hoveredBar.dataKey}`;
      values = [
        {
          label: formatValueLabel ? formatValueLabel(valueLabel, hoveredBar.dataKey, payload) : valueLabel || 'Value',
          value: formatValue ? formatValue(hoveredBar.value, payload) : numeral(hoveredBar.value).format('0,0'),
        },
      ];
    } else {
      label = (formatLabel ? formatLabel(tooltipLabel, undefined, payload, data) : tooltipLabel) as string;
      values = payload.map(barInfo => ({
        label: formatValueLabel ? formatValueLabel(barInfo.name, undefined, payload) : barInfo.name,
        value: formatValue ? formatValue(barInfo.value, payload) : numeral(barInfo.value).format('0,0'),
      }));
    }
    return (
      <Paper aria-live="assertive" elevation={1} role="status" sx={{ p: 2 }}>
        <Typography sx={{ color: tooltipColor, mb: 0.5 }}>{label}</Typography>

        {showValue &&
          values.map(barInfo => (
            <Typography key={barInfo.label as string}>
              {barInfo.label}: {barInfo.value as string}
            </Typography>
          ))}

        {renderAdditionalInfo && renderAdditionalInfo(barId, payload, data, tooltipLabel)}
      </Paper>
    );
  }

  return null;
};

export default CustomTooltip;
