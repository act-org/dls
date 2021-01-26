/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Account from '~/icons/Account';

import EmptyStatePrimary, { Props } from '.';

const Template: Story<Props> = args => (<EmptyStatePrimary {...args} />)

export const Primary: Story<Props> = Template.bind({});
Primary.args = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Icon: Account,
  title: 'No users yet.',
};

export default {
  component: EmptyStatePrimary,
  parameters: {
    info: {
      text: 'This is the primary variant of the EmptyState component.',
    },
  },
  title: 'Molecules/EmptyState',
} as Meta<Props>;
