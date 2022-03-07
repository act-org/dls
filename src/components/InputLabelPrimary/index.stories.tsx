/**
 * @prettier
 */

import * as React from 'react';

import InputLabelPrimary from '.';

export const Preview = (): React.ReactElement<unknown> => (
  <InputLabelPrimary
    color="primary"
    disabled={false}
    error={false}
    required={false}
    style={{
      width: 300,
    }}
  >
    Input Label
  </InputLabelPrimary>
);

export default {
  component: InputLabelPrimary,
  parameters: {
    info: {
      text: 'This is a custom InputLabel component.',
    },
  },
  title: 'Deprecated/Atoms/InputLabelPrimary',
};
