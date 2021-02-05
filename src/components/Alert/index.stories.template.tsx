import * as React from 'react';
import {Alert, AlertProps, AlertTitle} from '.';
import { Story } from '@storybook/react/types-6-0';
import { PlayGround } from '../../helpers/argBlocks';

interface DocProps extends AlertProps {
    title: string;
    text: string;
}

export const Template: Story<DocProps> = ({title, text, ...args}) => (
<Alert {...args}>
    {title && <AlertTitle>{title}</AlertTitle>}
    {text}
</Alert>);

export const argTypes = PlayGround({
    closeText: {},
    severity: {},
    title: {},
    text: {},
    variant: {},
    onClose: { action: 'close' }
}, Alert)