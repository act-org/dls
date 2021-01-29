import { Story } from '@storybook/react/types-6-0';
import {Button, ButtonProps} from '.';
import Plus from '../../icons/Plus';
import { PlayGround } from '../../helpers/argBlocks';

interface StoryProps extends ButtonProps {
    text: string;
}

export const argTypes = PlayGround({ 
    color: {},
    variant: {},
    text: {},
    disabled: {},
    type: {},
    size: {},
    fullWidth: {},
}, Button);

export const Template: Story<StoryProps> = ({text, ...args}) => {
    return (<Button {...args}>{text}</Button>)

};

const Icon = <Plus />
export const IconTemplate: Story<StoryProps> = ({text, ...args}) => <Button endIcon={Icon} {...args}>{text}</Button>;