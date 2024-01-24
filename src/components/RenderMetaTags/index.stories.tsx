/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { StoryObj, Meta } from '@storybook/react';

import { Playground } from '~/helpers/playground';

import RenderMetaTags, { RenderMetaTagsProps } from '.';

export default {
  args: {},
  argTypes: Playground(
    {
      description: {},
      imageUrl: {},
      keywords: {},
      noIndex: {},
      title: {},
    },
    RenderMetaTags,
  ),
  component: RenderMetaTags,
  tags: ['autodocs'],
  title: 'Utilities/RenderMetaTags',
} as Meta<RenderMetaTagsProps>;

export const Preview: StoryObj<RenderMetaTagsProps> = {};
