/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core';

export interface LinkProps extends MuiLinkProps {
  /**
   * Alias of href
   */
  to?: string;
}

/**
 * # Link Component
 *
 * The Link component allows you to easily customize anchor elements with your theme colors and typography styles.
 * Accessibility (WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#link)
 *
 * When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use specific descriptions.
 *
 * + For the best user experience, links should stand out from the text on the page.
 * + If a link doesn't have a meaningful href, it should be rendered using a button element.
 * @param props
 */
export function Link({
  to,
  href,
  ...props
}: LinkProps): React.ReactElement<LinkProps> {
  return <MuiLink href={to || href} {...props} />;
}

Link.defaultProps = {
  color: 'primary',
  underline: 'hover',
} as LinkProps;
