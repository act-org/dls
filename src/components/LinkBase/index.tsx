/**
 * @prettier
 */

import * as React from 'react';

export interface Props {
  children?: React.ReactNode;
  css?: string;
  download?: string | boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  target?: string;
  to: string;
}

const LinkBase: React.FC<Props> = ({
  children,
  css,
  download,
  onClick,
  style,
  target,
  to,
  ...props
}: Props): React.ReactElement<Props> => (
  <>
    <style jsx>
      {`
        a {
        }
        ${css}
      `}
    </style>

    <a
      download={download}
      href={to}
      onClick={onClick}
      style={style}
      target={target}
      {...props}
    >
      {children || null}
    </a>
  </>
);

export default LinkBase;
