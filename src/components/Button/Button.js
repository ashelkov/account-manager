import React from 'react';
// components
import Spinner from '../Spinner/Spinner';
// styles
import classnames from 'classnames/bind';
import styles from './Button.mod.css';

const cn = classnames.bind(styles);

const Button = ({
  primary,
  secondary,
  hollow,
  children,
  loading,
  ...restProps
}) => (
  <button
    className={cn('button', {
      primary,
      secondary,
      hollow
    })}
    {...restProps}
  >
    {loading ? <Spinner color="white" scale={0.6} /> : children}
  </button>
);

export default Button;
