/**
 * @prettier
 */
import * as React from 'react';
import { Props as InputBaseProps } from '~/components/InputBase';
import { Props as InputLabelPrimaryProps } from '~/components/InputLabelPrimary';
export interface Props {
    disabled?: boolean;
    inputProps?: InputBaseProps;
    labelProps?: InputLabelPrimaryProps;
    required?: boolean;
}
declare const FormInputPrimary: React.FC<Props>;
export default FormInputPrimary;
//# sourceMappingURL=index.d.ts.map