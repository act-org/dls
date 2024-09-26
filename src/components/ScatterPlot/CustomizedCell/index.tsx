/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useTheme } from '@mui/material/styles';
import React from 'react';
import { CellProps } from 'recharts';

import { ScatterPlotData } from '~/types';

import { calculateRadius } from '../processing';
import { IGroupDataPoint } from '../types';

const OPACITY_NOT_HIGHLIGHTED = 0.2;

export type CustomizedScatterCellProps = CellProps & {
  color?: string;
  groupSize?: number;
  label?: string;
  members?: IGroupDataPoint[];
  selectedPoint?: ScatterPlotData;
};

const CustomizedCell: React.FC<CustomizedScatterCellProps> = ({
  color,
  cx,
  cy,
  groupSize,
  height,
  label,
  members,
  selectedPoint,
  width,
}) => {
  const { palette } = useTheme();

  function getIsSelected(): boolean {
    if (selectedPoint) {
      if (selectedPoint.label === label) {
        return true;
      }
      return !!members?.find(el => el.label === selectedPoint.label);
    }
    return false;
  }

  return (
    <g
      cursor="pointer"
      data-chart-x={cx}
      data-chart-y={cy}
      opacity={!selectedPoint || getIsSelected() ? 1 : OPACITY_NOT_HIGHLIGHTED}
    >
      <circle
        cx={cx}
        cy={cy}
        fill={color || palette.grey[500]}
        height={height}
        r={calculateRadius(groupSize)}
        stroke={palette.common.black}
        width={width}
      />
      {(groupSize || 0) > 1 && (
        <text
          fill="white"
          fontSize={16}
          x={(cx as number) - 4}
          y={(cy as number) + 4}
        >
          {groupSize}
        </text>
      )}
    </g>
  );
};

export default CustomizedCell;
