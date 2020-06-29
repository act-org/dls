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
}

const RenderMetaTagsBase: React.FC<Props> = ({
  description,
  imageUrl,
  keywords,
  noIndex,
  title,
}: Props): React.ReactElement<Props> => (
  <>
    {/* Descriptions */}
    {description && (
      <>
        {/* Search Engines */}
        <meta content={description} name="description" />

        {/* Facebook Open Graph */}
        <meta content={description} property="og:description" />

        {/* Twitter Cards */}
        <meta content={description} name="twitter:text:description" />
      </>
    )}

    {/* Images */}
    {imageUrl && (
      <>
        {/* Facebook Open Graph */}
        <meta content={imageUrl} property="og:image" />

        <meta content={imageUrl} name="twitter:image" />
      </>
    )}

    {/* Keywords */}
    {keywords && (
      <>
        {/* Search Engines */}
        <meta content={keywords.toString()} name="keywords" />
      </>
    )}

    {/* Titles */}
    {title && (
      <>
        {/* Browser Tab, Search Engines */}
        <title itemProp="name" lang="en">
          {title}
        </title>

        {/* Facebook Open Graph */}
        <meta content={title} property="og:title" />

        {/* Twitter Cards */}
        <meta content={title} name="twitter:title" />
      </>
    )}

    {/* Utility Pages */}
    {noIndex && <meta content="noindex,follow" name="robots" />}
  </>
);

export default RenderMetaTagsBase;
