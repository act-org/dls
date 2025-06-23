/**
 * Copyright (c) Encoura, LLC and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { standard } from '~/helpers/test';

import { defaultData } from './mocks';

import { SCFMap } from '.';

describe('SCFMap', () => {
  const Component = (
    <SCFMap
      data={defaultData}
      geoJSONPath="maps/scf.json"
      mapboxAccessToken=""
    />
  );
  standard(Component);
});
