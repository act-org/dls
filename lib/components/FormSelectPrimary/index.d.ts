/**
 * @prettier
 */
import * as React from 'react';
import { Props as InputLabelPrimaryProps } from '~/components/InputLabelPrimary';
import { Props as SelectPrimaryProps } from '~/components/SelectPrimary';
interface SelectOption {
    label: string | null;
    value: number | string;
}
export interface Props {
    disabled?: boolean;
    labelProps?: InputLabelPrimaryProps;
    options?: SelectOption[];
    placeholder?: string;
    required?: boolean;
    selectProps?: SelectPrimaryProps;
}
declare const FormSelectPrimary: React.FC<Props>;
export default FormSelectPrimary;
//# sourceMappingURL=index.d.ts.map