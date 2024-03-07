import { Button } from '@mui/material';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import React from 'react';

import { Playground } from '~/helpers/playground';

import Popper, { PopperProps } from '.';

type StorybookPopperProps = Omit<PopperProps, 'anchorElement' | 'onClose'>;

const Template: StoryFn<StorybookPopperProps> = (props: StorybookPopperProps) => {
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


export default {
  args: {
      buttonProps: {
        fullWidth: false,
      },
      value: 'Default value',
    },
  argTypes: Playground(
    {},
    Popper,
  ),
  component: Template,
  tags: ['autodocs'],
  title: 'Atoms / Popper',
} as Meta<PopperProps>;

export const Default: StoryObj<PopperProps> = {
  args: {
    bodyElement: <div>Test Body Element</div>,
  },
};

export const WithHeaderElement: StoryObj<PopperProps> = {
  args: {
    bodyElement: <div>Test Body Element</div>,
    headerElement: <div>Test Header Element</div>,
  }
};
export const WithFooterElement: StoryObj<PopperProps> = {
  args: {
    bodyElement: <div>Test Body Element</div>,
    footerElement: <div>Test Footer Element</div>,
    headerElement: <div>Test Header Element</div>,
  }
};
export const WithHeaderDivider: StoryObj<PopperProps> = {
  args: {
    bodyElement: <div>Test Body Element</div>,
    footerElement: <div>Test Footer Element</div>,
    headerElement: <div>Test Header Element</div>,
    shouldRenderHeaderDivider: true,
  }
};
export const WithFooterDivider: StoryObj<PopperProps> = {
  args: {
    bodyElement: <div>Test Body Element</div>,
    footerElement: <div>Test Footer Element</div>,
    headerElement: <div>Test Header Element</div>,
    shouldRenderFooterDivider: true,
    shouldRenderHeaderDivider: true,
  }
};
