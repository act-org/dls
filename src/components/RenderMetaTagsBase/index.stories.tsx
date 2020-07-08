/**
 * @prettier
 */

import * as React from 'react';

import RenderMetaTagsBase from '.';

export const Base = (): React.ReactElement<any> => <RenderMetaTagsBase />;

export default {
  component: RenderMetaTagsBase,
  parameters: {
    info: {
      text: 'This is the base variant of the RenderMetaTags component.',
    },
  },
  title: 'Utilities/RenderMetaTags',
};
