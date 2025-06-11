/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Meta, StoryObj } from '@storybook/react-webpack5';
import {
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  Marker,
} from 'react-map-gl/mapbox';

import { Playground } from '~/helpers/playground';

import { defaultData } from './mocks';

import { Map, MapProps } from '.';

export default {
  args: {
    data: defaultData,
    mapboxAccessToken: process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN,
    sourceId: 'default',
  },
  argTypes: Playground({}, Map),
  component: Map,
  tags: ['autodocs'],
  title: 'Molecules / Maps / Map',
} as Meta<MapProps>;

export const WithMapProps: StoryObj<MapProps> = {
  args: {
    data: defaultData,
    initialViewState: { latitude: 32.3182, longitude: -86.9023, zoom: 5.5 },
    mapStyle: 'mapbox://styles/mapbox/streets-v9',
    sourceId: 'mapProps',
    style: { height: 600, width: 800 },
  },
};

export const WithNavigationControlProps: StoryObj<MapProps> = {
  args: {
    data: defaultData,
    navigationControlProps: {
      position: 'top-right',
      showCompass: false,
      visualizePitch: true,
    },
    sourceId: 'controlProps',
  },
};

export const WithOtherControls: StoryObj<MapProps> = {
  args: {
    children: (
      <>
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <ScaleControl />
      </>
    ),
    data: defaultData,
    sourceId: 'otherControls',
  },
};

export const WithChildrenAndNoData: StoryObj<MapProps> = {
  args: {
    children: <Marker color="red" latitude={37.8} longitude={-122.4} />,
    sourceId: 'children',
  },
};
