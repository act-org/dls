/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

export interface RenderMetaTagsProps {
  description?: string;
  imageUrl?: string;
  keywords?: string[];
  noIndex?: boolean;
  title?: string;
  Wrapper?: (children: React.ReactElement<any>[]) => React.ReactElement<any>;
}

export const RenderMetaTags: React.FC<RenderMetaTagsProps> = ({
  description,
  imageUrl,
  keywords,
  noIndex,
  title,
  Wrapper,
}: RenderMetaTagsProps): any => {
  const children: React.ReactElement<any>[] = [];

  if (description) {
    // Search Engines
    children.push(
      <meta content={description} key="description" name="description" />,
    );
    // Facebook Open Graph
    children.push(
      <meta
        content={description}
        key="og:description"
        property="og:description"
      />,
    );
    // Twitter Cards
    children.push(
      <meta
        content={description}
        key="twitter:text:description"
        name="twitter:text:description"
      />,
    );
  }

  if (imageUrl) {
    // Facebook Open Graph
    children.push(
      <meta content={imageUrl} key="og:image" property="og:image" />,
    );
    // Twitter Cards
    children.push(
      <meta content={imageUrl} key="twitter:image" name="twitter:image" />,
    );
  }

  if (keywords) {
    // Search Engines
    children.push(
      <meta content={keywords.toString()} key="keywords" name="keywords" />,
    );
  }

  if (title) {
    // Browser Tab, Search Engines
    children.push(
      <title itemProp="name" key="title" lang="en">
        {title}
      </title>,
    );
    // Facebook Open Graph
    children.push(<meta content={title} key="og:title" property="og:title" />);
    // Twitter Cards
    children.push(
      <meta content={title} key="twitter:title" name="twitter:title" />,
    );
  }

  if (noIndex) {
    // Robots
    children.push(<meta content="noindex,follow" key="robots" name="robots" />);
  }

  if (Wrapper) {
    return Wrapper(children);
  }

  return children;
};

export default RenderMetaTags;
