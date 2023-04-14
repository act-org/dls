/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryFn } from '@storybook/react';

import RenderMetaTags, { RenderMetaTagsProps } from '.';

export const Base: StoryFn<RenderMetaTagsProps> = args => (
  <RenderMetaTags {...args} />
);

export default {
  component: RenderMetaTags,
  parameters: {
    info: {
      text: 'This is the base variant of the RenderMetaTags component.',
    },
  },
  title: 'Utilities/RenderMetaTags',
} as Meta<RenderMetaTagsProps>;
