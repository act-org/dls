/**
 * @prettier
 */
import * as React from 'react';
import { Props as ActionButtonProps } from './ActionButton';
export interface Props {
    action?: ActionButtonProps;
    description?: any;
    flexibleHeight?: boolean;
    Icon?: React.FC<any> | React.ComponentClass<any>;
    maxWidth?: string | number;
    style?: React.CSSProperties;
    title?: any;
}
declare const EmptyState: React.FC<Props>;
export default EmptyState;
//# sourceMappingURL=index.d.ts.map