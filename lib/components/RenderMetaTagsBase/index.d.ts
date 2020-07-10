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
declare const RenderMetaTagsBase: React.FC<Props>;
export default RenderMetaTagsBase;
//# sourceMappingURL=index.d.ts.map