/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '../../helpers/test/render';

import { FormInput } from '.';

describe('FormInputPrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <FormInput
        inputProps={{
          onChange: noop,
          value: 'Value',
        }}
        labelProps={{
          children: 'Label',
          required: true,
        }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
