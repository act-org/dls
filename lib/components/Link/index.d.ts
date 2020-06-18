/**
 * @prettier
 */
import * as React from 'react';
export interface Props {
    children?: React.ReactNode;
    download?: string | boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    style?: React.CSSProperties;
    target?: string;
    to: string;
    variant?: 'text';
}
declare const Link: React.FC<Props>;
export default Link;
//# sourceMappingURL=index.d.ts.map