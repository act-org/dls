/**
 * @prettier
 */

import * as React from 'react';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  download?: string | boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  target?: string;
  to: string;
}

const LinkBase: React.FC<Props> = ({
  children,
  className,
  download,
  onClick,
  style,
  target,
  to,
  ...props
}: Props): React.ReactElement<Props> => (
  <a
    className={className}
    download={download}
    href={to}
    onClick={onClick}
    style={style}
    target={target}
    {...props}
  >
    {children || null}
  </a>
);

export default LinkBase;
