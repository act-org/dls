/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RenderMetaTagsBase, { Props } from '.';

export const Base: Story<Props> = args => <RenderMetaTagsBase {...args} />;

export default {
  component: RenderMetaTagsBase,
  parameters: {
    info: {
      text: 'This is the base variant of the RenderMetaTags component.',
    },
  },
  title: 'Utilities/RenderMetaTags',
} as Meta<Props>;
