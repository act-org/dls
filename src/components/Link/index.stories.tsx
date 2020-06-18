/**
 * @prettier
 */

import * as React from 'react';
// import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs';

import Link from '.';

export const base = (): React.ReactElement<any> => (
  <Link to="https://github.com/nextradata/mmdp/blob/master/src/mmdp-app/app/components/Link/index.tsx">
    Hi
  </Link>
);

export default {
  component: Link,
  parameters: {
    info: {
      text:
        'This is the base button component. It is not intended to be used directly.',
    },
  },
  title: 'Components/Link',
};
