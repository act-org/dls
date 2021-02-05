/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import {FormSelect, FormSelectProps} from '.';
import { PlayGround } from '../../helpers/argBlocks';
import { get } from 'lodash';

export const Template: Story<FormSelectProps> = (args) => {
  return (<FormSelect
    {...args} />);
};
export const argTypes = PlayGround({
  disabled: {},
  id: {},
  options: {},
  placeholder: {},
  placeholderIsDisabled: {},
  required: {},
}, FormSelect);
