import { ClickAwayListener, PaperProps, PopperProps as MuiPopperProps } from '@mui/material';
import * as React from 'react';

import { StyledPopper, StyledPaper, StyledDivider } from './styles';

export interface PopperComponentProps {
  bodyElement: React.ReactNode;
  footerElement?: React.ReactNode;
  headerElement?: React.ReactNode;
  paperProps?: Partial<PaperProps>;
  shouldRenderFooterDivider?: boolean;
  shouldRenderHeaderDivider?: boolean;
}

export interface PopperProps extends PopperComponentProps {
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

// PopperComponent is separted from Popper for isolated testing purposes
export const PopperComponent = React.forwardRef<HTMLDivElement, PopperComponentProps>(({
  bodyElement,
  footerElement,
  headerElement,
  paperProps,
  shouldRenderFooterDivider,
  shouldRenderHeaderDivider,
}, ref) => (<StyledPaper elevation={3} ref={ref} {...paperProps}>
  {headerElement}

  {shouldRenderHeaderDivider && <StyledDivider dividerType="header" />}

  {bodyElement}

  {shouldRenderFooterDivider && <StyledDivider dividerType="footer" />}

  {footerElement}
</StyledPaper>))
PopperComponent.displayName = 'PopperComponent'

export const Popper: React.FC<PopperProps> = (props: PopperProps): React.ReactElement<PopperProps> => {
  const {
    anchorElement,
    maxHeight,
    minWidth,
    onClose,
    popperProps,
    popperWidth,
    popperYTranslate,
    zIndex,
  } = props;
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
        <PopperComponent {...props} />
      </ClickAwayListener>
    </StyledPopper>
  );
};

PopperComponent.defaultProps = {
  footerElement: undefined,
  headerElement: undefined,
  paperProps: undefined,
  shouldRenderFooterDivider: undefined,
  shouldRenderHeaderDivider: undefined,
}

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
