/* eslint-disable sort-keys */
/**
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import {InputLabel, InputLabelProps} from '.';
import { PlayGround } from '../../helpers/argBlocks';


interface DocProps extends InputLabelProps 
{ 
    /**
     * The default text for the label
     */
    text: string 
};

export const Template: Story<DocProps> = ({ text, ...args }) => (
  <InputLabel {...args}>{text}</InputLabel>
);

export const argTypes: Record<string, any> = PlayGround({
    text: {},
    color: {},
    disabled: {},
    error: {},
    margin: {},
    required: {}
}, InputLabel);
