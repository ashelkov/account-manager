import React from 'react';
// styles
import classnames from 'classnames/bind';
import styles from './Button.mod.css';

const cn = classnames.bind(styles);

const Button = ({ primary, secondary, hollow, children, ...restProps }) => (
  <button
    className={cn('button', {
      primary,
      secondary,
      hollow
    })}
    {...restProps}
  >
    {children}
  </button>
);

export default Button;
