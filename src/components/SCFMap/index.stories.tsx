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

import { SCFMap, SCFMapProps } from '.';

export default {
  args: {
    data: defaultData,
    geoJSONPath: '/maps/scf.json',
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    processDataFn: defaultProcessDataFn,
  },
  argTypes: Playground({}, SCFMap),
  component: SCFMap,
  tags: ['autodocs'],
  title: 'Molecules / Maps / SCFMap',
} as Meta<SCFMapProps>;

export const Default: StoryObj<SCFMapProps> = {};

export const CustomColor: StoryObj<SCFMapProps> = {
  args: {
    mapProps: {
      color: '#FF0000',
    },
  },
};

export const SelectedSCF: StoryObj<SCFMapProps> = {
  args: {
    data: defaultData,
    geoJSONPath: '/maps/scf.json',
    processDataFn: defaultProcessDataFn,
    selectedSCF: ['157'],
  },
};
