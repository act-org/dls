import { Button } from '@mui/material';
import { StoryFn } from '@storybook/react';
import * as React from 'react';

import { Playground } from '~/helpers/playground';

import Popper, { PopperProps } from '.';

type StorybookPopperProps = Omit<PopperProps, 'anchorElement' | 'onClose'>;

export const Template: StoryFn<StorybookPopperProps> = (props: StorybookPopperProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [popperWidth, setPopperWidth] = React.useState<number>();
  const [popperYTranslate, setPopperYTranslate] = React.useState<number>();

  return (
    <>
      <Button
        color="primary"
        onClick={(event: React.MouseEvent<HTMLElement>): void => {
          const { currentTarget } = event;
          setAnchorEl(currentTarget);

          setPopperWidth(currentTarget.clientWidth - 7);
          setPopperYTranslate(-currentTarget.clientHeight - 5);
        }}
        variant="contained"
      >
        Click to see popper
      </Button>

      <Popper
        anchorElement={anchorEl}
        onClose={(): void => {
          setAnchorEl(null);
        }}
        popperWidth={popperWidth}
        popperYTranslate={popperYTranslate}
        {...props}
      />
    </>
  );
};

export const argTypes = Playground(
  {
    bodyElement: {},
    headerElement: {},
    popperWidth: { type: 'number' },
    popperYTranslate: { type: 'number' },
    shouldRenderFooterDivider: { type: 'boolean' },
    shouldRenderHeaderDivider: { type: 'boolean' },
  },
  Popper,
);
