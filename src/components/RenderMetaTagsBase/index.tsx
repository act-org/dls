/**
 * @prettier
 */

import * as React from 'react';

export interface Props {
  description?: string;
  imageUrl?: string;
  keywords?: string[];
  noIndex?: boolean;
  title?: string;
  Wrapper?: (children: React.ReactElement<any>[]) => React.ReactElement<any>;
}

const RenderMetaTagsBase: React.FC<Props> = ({
  description,
  imageUrl,
  keywords,
  noIndex,
  title,
  Wrapper,
}: Props): any => {
  const children: React.ReactElement<any>[] = [];

  if (description) {
    // Search Engines
    children.push(<meta content={description} name="description" />);
    // Facebook Open Graph
    children.push(<meta content={description} property="og:description" />);
    // Twitter Cards
    children.push(
      <meta content={description} name="twitter:text:description" />,
    );
  }

  if (imageUrl) {
    // Facebook Open Graph
    children.push(<meta content={imageUrl} property="og:image" />);
    // Twitter Cards
    children.push(<meta content={imageUrl} name="twitter:image" />);
  }

  if (keywords) {
    // Search Engines
    children.push(<meta content={keywords.toString()} name="keywords" />);
  }

  if (title) {
    // Browser Tab, Search Engines
    children.push(
      <title itemProp="name" lang="en">
        {title}
      </title>,
    );
    // Facebook Open Graph
    children.push(<meta content={title} property="og:title" />);
    // Twitter Cards
    children.push(<meta content={title} name="twitter:title" />);
  }

  if (noIndex) {
    // Robots
    children.push(<meta content="noindex,follow" name="robots" />);
  }

  if (Wrapper) {
    return Wrapper(children);
  }

  return children;
};

export default RenderMetaTagsBase;
