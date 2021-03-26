/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { standard } from '../../helpers/test';
import { noop } from 'lodash';
import FormInputPrimary from '../FormInput';
import FormInputGroupsPrimary from '.';

describe('FormInputGroupsPrimary', () => {
  const Component = (
    <FormInputGroupsPrimary
      groups={[
        [
          {
            formInput: (
              <FormInputPrimary
                inputProps={{
                  onChange: noop,
                  placeholder: 'Input 1',
                  type: 'text',
                  value: 'value1',
                }}
                labelProps={{
                  children: 'Input 1',
                }}
                required
              />
            ),
            key: 'INPUT_1',
          },
          {
            formInput: (
              <FormInputPrimary
                inputProps={{
                  onChange: noop,
                  placeholder: 'Input 2',
                  type: 'password',
                  value: 'value2',
                }}
                labelProps={{
                  children: 'Input 2',
                }}
                required
              />
            ),
            key: 'INPUT_2',
          },
        ],
        [
          {
            formInput: (
              <FormInputPrimary
                inputProps={{
                  onChange: noop,
                  placeholder: 'Input 3',
                  type: 'text',
                  value: 'value3',
                }}
                labelProps={{
                  children: 'Input 3',
                }}
              />
            ),
            key: 'INPUT_3',
          },
        ],
      ]}
    />
  );
  standard(Component);
});
