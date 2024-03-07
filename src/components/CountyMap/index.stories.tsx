/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Meta, StoryObj } from '@storybook/react';

import { Playground } from '~/helpers/playground';

import { defaultData, defaultProcessDataFn } from './mocks';

import { CountyMap, CountyMapProps } from '.';

export default {
  args: {
    data: defaultData,
    geoJSONPath: '/maps/counties.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
  argTypes: Playground({}, CountyMap),
  component: CountyMap,
  tags: ['autodocs'],
  title: 'Molecules / Maps / CountyMap',
} as Meta<CountyMapProps>;

export const Default: StoryObj<CountyMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: '/maps/counties.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
};

export const SelectedCounty: StoryObj<CountyMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: '/maps/counties.json',
    processDataFn: defaultProcessDataFn,
    selectedCounty: ['36103'],
  },
};

export const MultipleSelectedCounties: StoryObj<CountyMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: '/maps/counties.json',
    processDataFn: defaultProcessDataFn,
    selectedCounty: ['36103', '09001', '36027', '25025'],
  },
};
