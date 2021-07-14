/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { flow } from 'lodash';
import { Story } from '@storybook/react/types-6-0';

import { Playground } from '~/helpers/playground';

import { withSession } from '.';

const TemplateComponent: Story = ({ session }) => {
  return (
    <>
      <div>session: {session}</div>
      <button
        onClick={(): void => {
          sessionStorage.removeItem('session');
        }}
      >
        clear session
      </button>
    </>
  );
};

export const Template = flow(withSession)(TemplateComponent);

export const argTypes = Playground({}, withSession);
