/**
 * @prettier
 */

import * as React from 'react';

import IconButtonBase, {
  Props as IconButtonBaseProps,
} from '~/components/IconButtonBase';

export type Props = IconButtonBaseProps;

const IconButtonPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <IconButtonBase color="primary" {...props} />;

export default IconButtonPrimary;
