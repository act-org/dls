/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { Playground } from '~/helpers/playground';

import ThemeProvider, { ThemeProviderProps } from '.';

/**
 * There are a few supported themes of the DLS. These themes have the applied
 * styling for the variants. If neither of these completely solve your needs,
 * you can implement a custom Material UI theme. This should be the last resort
 * as expanding the theme to support all use cases would be the preference.
 */
export default {
  args: {
    theme: 'ENCOURA',
  },
  argTypes: Playground({}, ThemeProvider),
  component: ThemeProvider,
  tags: ['autodocs'],
  title: 'Utilities/ThemeProvider',
} as Meta<ThemeProviderProps>;

export const Preview: StoryObj<ThemeProviderProps> = {};
