/**
 * @prettier
 */

import * as React from 'react';

// import styles from './styles';

export interface Props {
  children?: React.ReactNode;
  download?: string | boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  target?: string;
  to: string;
  variant?: 'text';
}

const Link: React.FC<Props> = ({
  children,
  download,
  onClick,
  style,
  target,
  to,
  variant,
  ...props
}: Props): React.ReactElement<Props> => {
  const className = variant === 'text' ? 'textLink' : '';

  return (
    <>
      <style jsx>
        {`
          a {
            color: inherit;
            text-decoration: none;
          }
          a.textLink {
            color: red;
          }
          a.textLink:hover {
            text-decoration: underline;
          }
        `}
      </style>

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
    </>
  );
};

export default Link;
