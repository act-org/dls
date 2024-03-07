import { Meta, StoryObj } from '@storybook/react';
import { CloudDownload } from 'mdi-material-ui';

import { Playground } from '~/helpers/playground';

import DropdownButtonBase, { DropdownButtonBaseProps } from '.';

export default {
  args: {
    buttonProps: {
      fullWidth: false,
    },
    value: 'Default value',
  },
  argTypes: Playground(
    {},
    DropdownButtonBase,
  ),
  component: DropdownButtonBase,
  tags: ['autodocs'],
  title: 'Atoms / DropdownButtonBase',
} as Meta<DropdownButtonBaseProps>;

export const Default: StoryObj<DropdownButtonBaseProps> = {
  args: {},
};

export const SingeValueSelected: StoryObj<DropdownButtonBaseProps> = {
  args: {
    buttonProps: {
      fullWidth: false,
    },
    value: 'CALIFORNIA (CA)',
  },
};

export const ElementTitle: StoryObj<DropdownButtonBaseProps> = {
  args: {
    buttonProps: {
      fullWidth: false,
    },
    value: (
      <>
        <CloudDownload /> Press Me
      </>
    ),
  },
};

export const LongTitle: StoryObj<DropdownButtonBaseProps> = {
  args: {
    buttonProps: {
      fullWidth: false,
    },
    value:
      'qwertyuiopasdfghjklzxcvbnm_qwertyuiopasdfghjklzxcvbnm_qwertyuiopasdfghjklzxcvbnm_qwertyuiopasdfghjklzxcvbnm_qwertyuiopasdfghjklzxcvbnm_qwertyuiopasdfghjklzxcvbnm_qwertyuiopasdfghjklzxcvbnm_qwertyuiopasdfghjklzxcvbnm_qwertyuiopasdfghjklzxcvbnm_qwertyu',
  },
};

export const EditableButtonProps: StoryObj<DropdownButtonBaseProps> = {
  args: {
    buttonProps: {
      fullWidth: false,
      sx: { backgroundColor: 'black !important', border: 'none', color: 'white' },
    },
    value: (
      <>
        <CloudDownload /> Press Me
      </>
    ),
  },
};
