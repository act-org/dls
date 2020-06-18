/**
 * @prettier
 */

import * as React from 'react';

import COLORS from '~/constants/colors';
import LinkBase, { Props as LinkBaseProps } from '~/components/LinkBase';

export type Props = LinkBaseProps;

const LinkText: React.FC<Props> = (props: Props): React.ReactElement<any> => (
  <LinkBase
    css={`
      a {
        color: ${COLORS.LINK};
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}
    {...props}
  />
);

export default LinkText;
