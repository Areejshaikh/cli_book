import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const Button = ({ 
  to, 
  href, 
  variant = 'primary', 
  size = 'default', 
  children, 
  className = '',
  ...props 
}) => {
  const buttonClasses = clsx(
    'button',
    {
      'button--primary': variant === 'primary',
      'button--secondary': variant === 'secondary',
      'button--lg': size === 'large',
      'button--sm': size === 'small',
    },
    className
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={buttonClasses} {...props}>
      {children}
    </a>
  );
};

export default Button;