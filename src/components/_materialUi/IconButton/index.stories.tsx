/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import PencilCircle from '@actinc/dls/icons/PencilCircle';
import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './internal';

export default {
  component: IconButton,
  title: 'Material UI / IconButton',
  args: {
    color: 'primary',
    size: 'medium',
    children: <PencilCircle />,
  },
  tags: ['autodocs'],
} as Meta<IconButton>;

export const Primary: StoryObj<IconButton> = {};
export const Secondary: StoryObj<IconButton> = { args: { color: 'secondary' } };
export const Disabled: StoryObj<IconButton> = {
  args: { disabled: true },
};
/*

## Default

<Canvas>
  <Story args={{}} name="Default" />
</Canvas>

## Primary

<Canvas>
  <Story
    args={{
      color: 'primary',
    }}
    name="Primary"
  />
</Canvas>

### Disabled

<Canvas>
  <Story
    args={{
      color: 'primary',
      disabled: true,
    }}
    name="Primary: Disabled"
  />
</Canvas>

## Secondary IconButton

<Canvas>
  <Story
    args={{
      color: 'secondary',
    }}
    name="Secondary"
  />
</Canvas>

### Disabled

<Canvas>
  <Story
    args={{
      color: 'secondary',
      disabled: true,
    }}
    name="Secondary: Disabled"
  />
</Canvas>

## IconButton Sizes

### Small

<Canvas>
  <Story
    args={{
      color: 'primary',
      size: 'small',
    }}
    name="Size: Small"
  />
</Canvas>

### Medium

<Canvas>
  <Story
    args={{
      color: 'primary',
      size: 'medium',
    }}
    name="Size: Medium"
  />
</Canvas>

## Playground

<Canvas isColumn>
  <Story
    args={{
      color: 'primary',
      disabled: false,
      edge: false,
      size: 'medium',
    }}
    name="Playground"
  />
</Canvas>

<ArgsTable story="Playground" />

*/
