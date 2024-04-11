import React from 'react';

import Link from 'next/link';

interface Props {
  url: string;
  text: string;
  color: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
}

const ButtonLink = ({ url, text, color, leftIcon, rightIcon }: Props): React.JSX.Element => (
  <Link className={`button ${color}`} href={`/${url}`}>
    {leftIcon !== null && <span className='material-symbols-outlined left-icon'>{leftIcon}</span>}
    {text}
    {rightIcon !== null && (
      <span className='material-symbols-outlined right-icon'>{rightIcon}</span>
    )}
  </Link>
);

export default ButtonLink;
