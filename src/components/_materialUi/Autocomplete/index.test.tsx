/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { Autocomplete, TextField } from '@mui/material';
import { ReactElement } from 'react';

import { standard } from '@actinc/dls/helpers/test';

import { topFilms } from './internal';

describe('Autocomplete', () => {
  const Component = (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={topFilms}
      renderInput={(params): ReactElement<unknown> => (
        <TextField {...params} label="Movie" />
      )}
      sx={{ width: 300 }}
    />
  );

  standard(Component);
});
