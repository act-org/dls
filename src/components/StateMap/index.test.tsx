/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { defaultData, defaultProcessDataFn } from './mocks';

import { StateMap } from '.';

describe('StateMap', () => {
  const Component = (
    <StateMap
      data={defaultData}
      geoJSONPath="maps/states.json"
      mapboxAccessToken=""
      processDataFn={defaultProcessDataFn}
    />
  );
  standard(Component);
});
