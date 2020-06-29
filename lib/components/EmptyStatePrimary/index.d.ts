/**
 * @prettier
 */
import * as React from 'react';
import { Props as ButtonPrimaryProps } from '~/components/ButtonPrimary';
export interface Props {
    buttonProps?: ButtonPrimaryProps;
    description?: any;
    Icon?: React.FC<any> | React.ComponentClass<any>;
    style?: React.CSSProperties;
    title?: string | React.ReactElement<any>;
}
declare const EmptyStatePrimary: React.FC<Props>;
export default EmptyStatePrimary;
//# sourceMappingURL=index.d.ts.map