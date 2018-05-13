import React from 'react';
// styles
import classnames from 'classnames/bind';
import styles from './Input.mod.css';

const cn = classnames.bind(styles);

const Input = ({ input, label, type, meta: { touched, error }, className }) => (
  <div
    className={cn('input-field', className, { 'has-error': touched && error })}
  >
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <div className={cn('field-error')}>{error}</div>}
    </div>
  </div>
);

export default Input;
