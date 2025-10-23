/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IconButton, PopperProps, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';
import min from 'lodash/min';
import ChevronLeft from 'mdi-material-ui/ChevronLeft';
import ChevronRight from 'mdi-material-ui/ChevronRight';
import PageFirst from 'mdi-material-ui/PageFirst';
import PageLast from 'mdi-material-ui/PageLast';
import { CSSProperties, FC, ReactElement, useRef, useState } from 'react';
import { FixedSizeList } from 'react-window';

import { StyledContainer, StyledMenuItem, StyledTextField } from './styles';

export interface TablePaginationActionsProps {
  count: number;
  disabled?: boolean;
  noun?: string;
  onPageChange: (event: any, page: number) => void;
  page: number;
  PopperProps?: Partial<PopperProps>;
  rowsPerPage: number;
  style?: CSSProperties;
  tooltipPlacement?:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start';
  variant?: 'inverted';
}

export const TablePaginationActions: FC<TablePaginationActionsProps> = ({
  count,
  disabled = false,
  noun = 'Page',
  onPageChange,
  page: zeroBasedPage,
  PopperProps: PP,
  rowsPerPage,
  style,
  tooltipPlacement,
  variant,
}: TablePaginationActionsProps): ReactElement<unknown> => {
  const [open, setOpen] = useState(false);

  const listEl = useRef(null);

  const numberOfPages = Math.ceil(count / rowsPerPage);

  const htmlColor = variant === 'inverted' ? grey[200] : undefined;
  const htmlColorDisabled = variant === 'inverted' ? grey[700] : undefined;

  const disableFirst = disabled || zeroBasedPage === 0;
  const disablePrevious = disabled || zeroBasedPage === 0;
  const disableNext =
    disabled || zeroBasedPage >= Math.ceil(count / rowsPerPage) - 1;
  const disableLast =
    disabled || zeroBasedPage >= Math.ceil(count / rowsPerPage) - 1;

  return (
    <StyledContainer style={style}>
      <Tooltip
        arrow
        placement={tooltipPlacement}
        PopperProps={PP}
        title={`First ${noun}`}
      >
        <span>
          <IconButton
            aria-label={`First ${noun}`}
            disabled={disableFirst}
            onClick={(event): void => onPageChange(event, 0)}
            size="large"
          >
            <PageFirst
              fontSize="small"
              htmlColor={disableFirst ? htmlColorDisabled : htmlColor}
            />
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip
        arrow
        placement={tooltipPlacement}
        PopperProps={PP}
        title={`Previous ${noun}`}
      >
        <span>
          <IconButton
            aria-label={`Previous ${noun}`}
            disabled={disablePrevious}
            onClick={(event): void => onPageChange(event, zeroBasedPage - 1)}
            size="large"
          >
            <ChevronLeft
              fontSize="small"
              htmlColor={disablePrevious ? htmlColorDisabled : htmlColor}
            />
          </IconButton>
        </span>
      </Tooltip>

      <div>
        <StyledTextField
          disabled={disabled}
          select
          SelectProps={{
            MenuProps: PP as any,
            onClose: (): void => {
              setOpen(false);
            },
            onOpen: (): void => {
              setOpen(true);
              setTimeout((): void => {
                if (listEl) {
                  (listEl as any).current.scrollToItem(
                    Number(zeroBasedPage),
                    'center',
                  );
                }
              }, 10);
            },
            open,
            // eslint-disable-next-line react/display-name
            renderValue: (value): ReactElement<unknown> => (
              <span>{`${noun} ${Number(value) + 1}`}</span>
            ),
            SelectDisplayProps: {
              'aria-label': 'Select',
            },
          }}
          value={zeroBasedPage}
        >
          <FixedSizeList
            height={min([46 * numberOfPages, 300]) as number}
            itemCount={numberOfPages}
            itemSize={46}
            ref={listEl}
            width={`${noun} ${numberOfPages}`.length * 14}
          >
            {({ index, style: menuItemStyle }): ReactElement<unknown> => (
              // eslint-disable-next-line react/no-array-index-key
              <StyledMenuItem
                isSelected={zeroBasedPage === index}
                key={index}
                onMouseDown={(event): void => {
                  onPageChange(event, index);
                  setOpen(false);
                }}
                style={menuItemStyle}
                value={index}
              >
                {`${noun} ${index + 1}`}
              </StyledMenuItem>
            )}
          </FixedSizeList>
        </StyledTextField>
      </div>

      <Tooltip
        arrow
        placement={tooltipPlacement}
        PopperProps={PP}
        title={`Next ${noun}`}
      >
        <span>
          <IconButton
            aria-label={`Next ${noun}`}
            disabled={disableNext}
            onClick={(event): void => onPageChange(event, zeroBasedPage + 1)}
            size="large"
          >
            <ChevronRight
              fontSize="small"
              htmlColor={disableNext ? htmlColorDisabled : htmlColor}
            />
          </IconButton>
        </span>
      </Tooltip>

      <Tooltip
        arrow
        placement={tooltipPlacement}
        PopperProps={PP}
        title={`Last ${noun}`}
      >
        <span>
          <IconButton
            aria-label={`Last ${noun}`}
            disabled={disableLast}
            onClick={(event): void => {
              onPageChange(
                event,
                Math.max(0, Math.ceil(count / rowsPerPage) - 1),
              );
            }}
            size="large"
          >
            <PageLast
              fontSize="small"
              htmlColor={disableLast ? htmlColorDisabled : htmlColor}
            />
          </IconButton>
        </span>
      </Tooltip>
    </StyledContainer>
  );
};

export default TablePaginationActions;
