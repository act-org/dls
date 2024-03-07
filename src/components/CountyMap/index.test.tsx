/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { standard } from '~/helpers/test';

import { defaultData } from './mocks';

import { CountyMap } from '.';

describe('CountyMap', () => {
  const processDataFn = jest.fn();
  const Component = (
    <CountyMap
      data={defaultData}
      geoJSONPath="/resources/counties.json"
      mapboxAccessToken=""
      processDataFn={processDataFn}
    />
  );
  standard(Component);
});
