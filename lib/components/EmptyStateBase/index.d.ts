/**
 * @prettier
 */
import * as React from 'react';
import { Props as ButtonBaseProps } from '~/components/ButtonBase';
export interface Props {
    Button?: React.FC<ButtonBaseProps>;
    buttonProps?: ButtonBaseProps;
    classes?: {
        descriptionRoot: any;
        descriptionRootWithoutTitle: any;
        iconRoot: any;
        titleGridContainer: any;
        titleGridContainerWithDescription: any;
        titleGridItem: any;
    };
    css?: string;
    description?: any;
    Icon?: React.FC<any> | React.ComponentClass<any>;
    maxWidth?: string | number;
    title?: any;
}
declare const EmptyStateBase: React.FC<Props>;
export default EmptyStateBase;
//# sourceMappingURL=index.d.ts.map