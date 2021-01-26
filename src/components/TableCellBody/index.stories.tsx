import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TableCellBody, { Props } from '.';

interface StoryProps extends Props {
  text: string;
}

export const Body: Story<StoryProps> = ({text, ...args}) => (
  <TableCellBody {...args}>{text}</TableCellBody>
);
Body.args = {
  text: 'Table Cell'
}

export default {
  component: TableCellBody,
  parameters: {
  },
  title: 'Atoms/TableCell',
} as Meta<StoryProps>;
