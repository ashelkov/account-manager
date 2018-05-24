import React from 'react';
// styles
import classnames from 'classnames/bind';
import styles from './TextInput.mod.css';

const cn = classnames.bind(styles);

const TextInput = ({ type = 'text', className, ...rest }) => (
  <input type={type} className={cn('text-input', className)} {...rest} />
);

export default TextInput;
