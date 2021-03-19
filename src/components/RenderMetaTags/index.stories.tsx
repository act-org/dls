/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import RenderMetaTags, { Props } from '.';

export const : Story<Props> = args => <RenderMetaTags {...args} />;

export default {
  component: RenderMetaTags,
  parameters: {
    info: {
      text: 'This is the base variant of the RenderMetaTags component.',
    },
  },
  title: 'Utilities/RenderMetaTags',
} as Meta<Props>;
