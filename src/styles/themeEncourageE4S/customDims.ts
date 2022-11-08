import deepmerge from 'deepmerge';

import baseTheme from './baseTheme';

export const customDims = deepmerge(baseTheme.customDims, {
  heights: {
    header: 60,
  },
  widths: {
    listItemIcon: 40,
  },
});

export default customDims;
