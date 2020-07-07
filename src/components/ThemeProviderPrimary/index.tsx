/**
 * @prettier
 */

import * as React from 'react';

import theme from '~/styles/theme';
import ThemeProviderBase, {
  Props as ThemeProviderBaseProps,
} from '~/components/ThemeProviderBase';

export type Props = Omit<ThemeProviderBaseProps, 'theme'>;

const ThemeProviderPrimary: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ThemeProviderBase theme={theme} {...props} />;

export default ThemeProviderPrimary;
