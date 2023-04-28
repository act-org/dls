/* eslint-disable react/no-danger */
/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Playground } from '@actinc/dls/helpers/playground';

import { RichTextEditor, RichTextEditorProps } from '.';

/**
 * This is the bundled version of the rich text editor.  It has by default all of the open source plugins loaded, so it will be a relatively hefty
 * addition to any bundle (that's just TinyMCE).
 *
 */
export default {
  args: {},
  argTypes: Playground({}, RichTextEditor),
  component: RichTextEditor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  title: 'Organisms / RichTextEditor',
} as Meta<RichTextEditorProps>;

/**
 * Simple TinyMCE Rich text editor.  This version has some of the events wired up for the actions panel.
 */
export const Preview: StoryObj<RichTextEditorProps> = {
  args: {},
  argTypes: {
    onEditorChange: { action: 'onEditorChange' },
  },
};

export const WithText: StoryObj<RichTextEditorProps> = {
  args: {
    init: {
      branding: false,
    },
    initialValue: 'Initial Value',
  },
};

export const Controlled: StoryObj<RichTextEditorProps> = {
  args: {},
  render: (props: RichTextEditorProps) => {
    const [textValue, setTextValue] = useState('Initial Test Value');
    return (
      <>
        <RichTextEditor
          {...props}
          onEditorChange={(newValue): void => {
            setTextValue(newValue);
          }}
          value={textValue}
        />
        <Typography variant="h6">Controlled Output</Typography>
        <div dangerouslySetInnerHTML={{ __html: textValue }} />
      </>
    );
  },
};
