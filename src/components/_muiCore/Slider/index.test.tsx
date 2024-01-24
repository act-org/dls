/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { FormControl, FormLabel, Slider } from '@mui/material';

import { standard } from '~/helpers/test';

describe('Slider', () => {
  const Component = (
    <FormControl>
      <FormLabel id="slider-label">Slider Label</FormLabel>
      <Slider
        aria-labelledby="slider-label"
        color="primary"
        defaultValue={0}
        max={100}
        min={0}
      />
    </FormControl>
  );
  standard(Component);
});
