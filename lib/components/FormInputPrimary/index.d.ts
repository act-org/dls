/**
 * @prettier
 */
import * as React from 'react';
import { Props as InputLabelPrimaryProps } from '~/components/InputLabelPrimary';
import { Props as InputPrimaryProps } from '~/components/InputPrimary';
export interface Props {
    disabled?: boolean;
    errorMessage?: string;
    inputProps?: InputPrimaryProps;
    labelProps?: InputLabelPrimaryProps;
    required?: boolean;
}
declare const FormInputPrimary: React.FC<Props>;
export default FormInputPrimary;
//# sourceMappingURL=index.d.ts.map