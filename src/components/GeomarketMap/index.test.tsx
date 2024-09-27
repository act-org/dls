/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { defaultData } from './mocks';

import { GeomarketMap } from '.';

describe('GeomarketMap', () => {
  const processDataFn = jest.fn();
  const Component = (
    <GeomarketMap
      data={defaultData}
      geoJSONPath="/resources/us-states.json"
      mapboxAccessToken=""
      processDataFn={processDataFn}
    />
  );
  standard(Component);
});
