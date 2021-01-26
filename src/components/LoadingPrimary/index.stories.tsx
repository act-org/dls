import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LoadingPrimary, { Props } from '.';

export const Primary: Story<Props> = args => <LoadingPrimary {...args} />;
Primary.args = {
  circularProgressProps: {
    size: 24,
    thickness: 4.5,
  },
  title: 'Loading...'
}
export default {
  component: LoadingPrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the Loading component.',
    },
  },
  title: 'Molecules/Loading',
} as Meta<Props>;
