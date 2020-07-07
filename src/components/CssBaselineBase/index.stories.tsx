/**
 * @prettier
 */

import * as React from 'react';

import CssBaselineBase from '.';

export const Base = (): React.ReactElement<any> => (
  <CssBaselineBase>CSS Baseline</CssBaselineBase>
);

export default {
  component: CssBaselineBase,
  parameters: {
    info: {
      text: 'This is the base variant of the CssBaseline component.',
    },
  },
  title: 'Atoms/CssBaseline',
};
