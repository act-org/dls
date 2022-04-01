/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

;

import { standard } from '~/helpers/test';

import { AppBarNavigation } from '.';

describe('AppBarNavigation', () => {
  const Component = (
    <AppBarNavigation
      AppBarProps={{ position: 'static' }}
      navigationItems={[
        { isActive: true, LinkProps: { to: '#' }, title: 'Home' },
        { isActive: false, LinkProps: { to: '#' }, title: 'Other Page' },
      ]}
      RenderLogoProps={{
        alt: 'ACT',
        LinkProps: { to: 'https://act-et.org' },
        src: 'https://i.imgur.com/P0gtzO0.png',
      }}
    />
  );
  standard(Component);
});
