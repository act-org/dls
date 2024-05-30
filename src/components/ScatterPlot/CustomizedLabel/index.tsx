/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Tooltip } from '@mui/material';
import React from 'react';
import { LabelProps } from 'recharts';

import { ScatterPlotData } from '~/types';

import { StyledLabel } from './styles';

export type CustomizedLabelProps = LabelProps & {
  isBlockingOnHovers?: boolean;
  selectedPoint?: ScatterPlotData;
  shouldHideLabel?: Record<string, boolean>;
};

export function calculateLabelWidth(label: string): number {
  return Math.min(Math.max(label.length * 9, 10), 100);
}

export const Y_LABEL_MARGIN = 30;
export const MIN_LABEL_WIDTH = 40;

export const CustomizedLabel: React.FC<CustomizedLabelProps> = ({
  fill,
  isBlockingOnHovers,
  selectedPoint,
  shouldHideLabel = {},
  value,
  x,
  y,
}): React.ReactElement<CustomizedLabelProps> | null => {
  let opacity = 1;
  const isThisSelectedPoint =
    String(value) === selectedPoint?.label ||
    String(value)
      .split(', ')
      .find(el => el === selectedPoint?.label);
  if (selectedPoint && !isThisSelectedPoint) {
    opacity = 0.2;
  }

  const charAmount = String(value)?.length || 0;

  if (shouldHideLabel[value as string] && !isThisSelectedPoint) {
    return null;
  }
  return (
    <foreignObject
      height={30}
      requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
      textAnchor="middle"
      width={calculateLabelWidth(String(value))}
      x={(x as number) - Math.min((charAmount / 2) * 4, MIN_LABEL_WIDTH)}
      y={(y as number) - Y_LABEL_MARGIN}
    >
      {isBlockingOnHovers ? (
        <StyledLabel fill={fill} opacity={opacity}>
          {value}
        </StyledLabel>
      ) : (
        <Tooltip sx={{ userSelect: 'none' }} title={value || ''}>
          <StyledLabel fill={fill} opacity={opacity}>
            {value}
          </StyledLabel>
        </Tooltip>
      )}
    </foreignObject>
  );
};

export default CustomizedLabel;
