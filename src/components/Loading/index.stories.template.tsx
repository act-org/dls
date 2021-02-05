import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Loading, LoadingProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<LoadingProps> = args => <Loading {...args} />;
Template.args = {

}

export const argTypes = PlayGround({
  circularProgressProps: {
    size: {},
    thickness: {}
  },
  title: {},
  style: {}
}, Loading)
