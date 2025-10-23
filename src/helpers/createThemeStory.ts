/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryObj } from '@storybook/react-webpack5';

import { THEMES } from '~/styles';

// Mapping function for better theme display names
const getThemeDisplayName = (theme: string): string => {
  const nameMap: Record<string, string> = {
    [THEMES.ENCOURA]: 'Encoura',
    [THEMES.ENCOURA_CLASSIC]: 'Encoura Classic',
    [THEMES.ENCOURAGE]: 'Encourage',
    [THEMES.ENCOURAGE_E4E]: 'Encourage E4E',
  };
  return nameMap[theme] || theme;
};

interface ICreateThemeStoryOptions<T> {
  args?: T;
  render?: (args: T) => React.ReactElement;
  name?: string;
  parameters?: Record<string, any>;
}

/**
 * Creates a theme-specific story for Storybook
 * @param theme The theme name to apply
 * @param options Story configuration options
 * @returns A StoryObj configured for the specified theme
 */
export const createThemeStory = <T = any>(theme: string, options: ICreateThemeStoryOptions<T> = {}): StoryObj<T> => {
  const story: any = {
    args: options.args || {},
    name: options.name || getThemeDisplayName(theme),
    parameters: {
      globals: { theme },
      ...options.parameters,
    },
  };

  if (options.render) {
    story.render = options.render;
  }

  return story as StoryObj<T>;
};

export default createThemeStory;
