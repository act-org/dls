/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import clsx from 'clsx';
import { FixedSizeList } from 'react-window';
import { grey } from '@material-ui/core/colors';
import {
  IconButton,
  MenuItem,
  PopperProps,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { min } from 'lodash';

import { ChevronLeft, ChevronRight, PageFirst, PageLast } from '~/icons';

import useStyles from './styles';

export interface TablePaginationActionsProps {
  count: number;
  disabled?: boolean;
  noun?: string;
  onPageChange: (event: any, page: number) => void;
  page: number;
  PopperProps?: Partial<PopperProps>;
  rowsPerPage: number;
  style?: React.CSSProperties;
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

export const TablePaginationActions: React.FC<TablePaginationActionsProps> = ({
  count,
  disabled,
  noun,
  onPageChange,
  page: zeroBasedPage,
  PopperProps: PP,
  rowsPerPage,
  style,
  tooltipPlacement,
  variant,
}: TablePaginationActionsProps): React.ReactElement<any> => {
  const [open, setOpen] = React.useState(false);

  const listEl = React.useRef(null);

  const classes = useStyles();

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
    <div className={classes.container} style={style}>
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
          >
            <ChevronLeft
              fontSize="small"
              htmlColor={disablePrevious ? htmlColorDisabled : htmlColor}
            />
          </IconButton>
        </span>
      </Tooltip>

      <div>
        <TextField
          classes={{
            root: classes.textFieldRoot,
          }}
          disabled={disabled}
          InputProps={{
            classes: {
              root: classes.inputRoot,
            },
            disableUnderline: true,
          }}
          select
          SelectProps={{
            classes: {
              icon: variant === 'inverted' ? classes.selectIconRoot : undefined,
              select: clsx(
                classes.selectSelect,
                variant === 'inverted' && classes.selectSelectInverted,
              ),
            },
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
            renderValue: (value): React.ReactElement<any> => (
              <span>{`${noun} ${Number(value) + 1}`}</span>
            ),
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
            {({ index, style: menuItemStyle }): React.ReactElement<any> => (
              // eslint-disable-next-line react/no-array-index-key
              <MenuItem
                classes={{
                  root: clsx(
                    zeroBasedPage === index && classes.menuItemRootSelected,
                  ),
                }}
                key={index}
                onMouseDown={(event): void => {
                  onPageChange(event, index);
                  setOpen(false);
                }}
                style={menuItemStyle}
                value={index}
              >
                {`${noun} ${index + 1}`}
              </MenuItem>
            )}
          </FixedSizeList>
        </TextField>
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
          >
            <PageLast
              fontSize="small"
              htmlColor={disableLast ? htmlColorDisabled : htmlColor}
            />
          </IconButton>
        </span>
      </Tooltip>
    </div>
  );
};

TablePaginationActions.defaultProps = {
  disabled: false,
  noun: 'Page',
  PopperProps: undefined,
  style: undefined,
  tooltipPlacement: undefined,
  variant: undefined,
};

export default TablePaginationActions;