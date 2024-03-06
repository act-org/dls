import { ClickAwayListener, PaperProps, PopperProps as MuiPopperProps } from '@mui/material';
import * as React from 'react';

import { StyledPopper, StyledPaper, StyledDivider } from './styles';

export interface PopperProps {
  anchorElement: null | HTMLElement;
  bodyElement: React.ReactNode;
  footerElement?: React.ReactNode;
  headerElement?: React.ReactNode;
  maxHeight?: number;
  minWidth?: number;
  onClose?: () => void;
  paperProps?: Partial<PaperProps>;
  popperProps?: Partial<MuiPopperProps>;
  popperWidth?: number;
  popperYTranslate?: number;
  shouldRenderFooterDivider?: boolean;
  shouldRenderHeaderDivider?: boolean;
  zIndex?: number;
}

export const Popper: React.FC<PopperProps> = ({
  anchorElement,
  bodyElement,
  footerElement,
  headerElement,
  maxHeight,
  minWidth,
  onClose,
  paperProps,
  popperProps,
  popperWidth,
  popperYTranslate,
  shouldRenderFooterDivider = false,
  shouldRenderHeaderDivider = false,
  zIndex,
}: PopperProps): React.ReactElement<PopperProps> => {
  const isOpen = Boolean(anchorElement);

  return (
    <StyledPopper
      anchorEl={anchorElement}
      maxHeight={maxHeight}
      minWidth={minWidth}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [0, popperYTranslate],
          },
        },
      ]}
      open={isOpen}
      placement="bottom-start"
      style={{
        width: popperWidth,
      }}
      zIndex={zIndex}
      {...popperProps}
    >
      <ClickAwayListener
        onClickAway={(): void => {
          if (onClose) {
            onClose();
          }
        }}
      >
        <StyledPaper elevation={3} {...paperProps}>
          {headerElement}

          {shouldRenderHeaderDivider && <StyledDivider dividerType="header" />}

          {bodyElement}

          {shouldRenderFooterDivider && <StyledDivider dividerType="footer" />}

          {footerElement}
        </StyledPaper>
      </ClickAwayListener>
    </StyledPopper>
  );
};

Popper.defaultProps = {
  footerElement: undefined,
  headerElement: undefined,
  maxHeight: undefined,
  minWidth: undefined,
  onClose: undefined,
  paperProps: undefined,
  popperProps: undefined,
  popperWidth: undefined,
  popperYTranslate: undefined,
  shouldRenderFooterDivider: undefined,
  shouldRenderHeaderDivider: undefined,
  zIndex: undefined,
};

export default Popper;
