/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { LabelProps } from 'recharts';
import { PolarViewBox } from 'recharts/types/util/types';

import { HighlightComponentType, PieDataProps } from '../types';

interface InnerPieComponentProps extends LabelProps {
  HighlightComponent: HighlightComponentType;
  payload: PieDataProps;
  pieTotalValue: number;
}

const InnerPieComponent: React.FC<InnerPieComponentProps> = ({
  HighlightComponent,
  payload,
  pieTotalValue,
  viewBox: wrongTypeViewBox,
}) => {
  if (!wrongTypeViewBox) {
    return null;
  }
  // viewBox is plugged in automatically by recharts, but the typing is all wrong, so I have to recast it again
  const viewBox = wrongTypeViewBox as Required<PolarViewBox>;

  const verticeLength = Math.sqrt(2) * viewBox.innerRadius - 3;

  return (
    <g>
      <foreignObject
        height={verticeLength}
        textAnchor="middle"
        width={verticeLength}
        x={viewBox.cx - verticeLength / 2}
        y={viewBox.cy - verticeLength / 2}
      >
        <HighlightComponent
          availableViewBoxDimension={verticeLength}
          payload={payload}
          pieTotalValue={pieTotalValue}
        />
      </foreignObject>
    </g>
  );
};

export default InnerPieComponent;
