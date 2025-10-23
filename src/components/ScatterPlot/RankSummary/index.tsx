/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BoxProps, IconButton, Paper, TableBody, TableCell, TableContainerProps, TableHead, TableRow, Tooltip } from '@mui/material';
import includes from 'lodash/includes';
import kebabCase from 'lodash/kebabCase';
import ChevronLeft from 'mdi-material-ui/ChevronLeft';
import CloseCircleOutline from 'mdi-material-ui/CloseCircleOutline';
import React, { ElementType } from 'react';

import { ScatterPlotData } from '~/types';

import { StyledBox, StyledIconButton, StyledTable, StyledTableCell, StyledTableContainer, StyledTableRow } from './styles';

export interface RankSummaryProps {
  boxContainerProps?: BoxProps;
  data: Array<ScatterPlotData>;
  idSubstring?: string;
  selectedPoint?: ScatterPlotData;
  setSelectedPoint?: (data: ScatterPlotData | undefined) => void;
  setShowSummary?: (value: boolean) => void;
  showSummary?: boolean;
  tableContainerProps?: TableContainerProps;
}

export const RankSummary: React.FC<RankSummaryProps> = ({
  boxContainerProps,
  data,
  idSubstring,
  selectedPoint,
  setSelectedPoint,
  setShowSummary,
  showSummary = true,
  tableContainerProps,
}: RankSummaryProps): React.ReactElement => {
  const ref = React.useRef<HTMLDivElement>(null);

  const stopPropagation = (e: WheelEvent): void => e.stopPropagation();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('wheel', stopPropagation);
    }
    return (): void => {
      if (ref.current) {
        ref.current.removeEventListener('wheel', stopPropagation);
      }
    };
  }, [ref.current]);

  return (
    <StyledBox showSummary={showSummary} {...boxContainerProps} ref={ref}>
      {!showSummary && (
        <Tooltip title="Open Summary">
          <StyledIconButton
            aria-label="open summary"
            color="secondary"
            id={`open-summary-${kebabCase(idSubstring)}`}
            onClick={(): void => {
              if (setShowSummary) setShowSummary(true);
            }}
          >
            <ChevronLeft />
          </StyledIconButton>
        </Tooltip>
      )}

      {showSummary && (
        <StyledTableContainer component={Paper as ElementType} {...tableContainerProps}>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledTableCell size="small">
                  Rank Summary
                  {setShowSummary && (
                    <IconButton
                      aria-label="close summary"
                      color="secondary"
                      id={`close-summary-${kebabCase(idSubstring)}`}
                      onClick={(): void => setShowSummary(false)}
                      sx={{ float: 'right' }}
                    >
                      <CloseCircleOutline />
                    </IconButton>
                  )}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter(d => !!d.label)
                .map((d, i) => {
                  const selectedLabelList = selectedPoint?.label?.split(', ');
                  const isSelected = includes(selectedLabelList, d.label);
                  return (
                    <StyledTableRow
                      key={d.label}
                      onClick={(): void => {
                        if (setSelectedPoint) setSelectedPoint(d);
                      }}
                    >
                      <TableCell sx={{ width: '10px' }}>{i + 1}</TableCell>
                      <TableCell sx={{ opacity: selectedPoint && !isSelected ? 0.2 : 1 }}>{d.label}</TableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      )}
    </StyledBox>
  );
};

export default RankSummary;
