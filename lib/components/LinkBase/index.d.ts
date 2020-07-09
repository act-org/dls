/**
 * @prettier
 */
import * as React from 'react';
export interface Props {
    children?: React.ReactNode;
    className?: string;
    download?: string | boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    style?: React.CSSProperties;
    target?: string;
    to: string;
}
declare const LinkBase: React.FC<Props>;
export default LinkBase;
//# sourceMappingURL=index.d.ts.map