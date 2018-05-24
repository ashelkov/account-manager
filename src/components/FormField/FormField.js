import React from 'react';
// components
import { Field } from 'redux-form';
// styles
import classnames from 'classnames/bind';
import styles from './FormField.mod.css';

const cn = classnames.bind(styles);

const renderField = component => ({
  input,
  label,
  meta: { touched, error },
  className,
  isRequired,
  ...other
}) => (
  <div
    className={cn('input-field', className, { 'has-error': touched && error })}
  >
    <label>
      {label}
      {isRequired && <span className={cn('red')}>*</span>}
    </label>
    <div>
      {component(Object.assign(input, other))}
      {touched && error && <div className={cn('field-error')}>{error}</div>}
    </div>
  </div>
);

const FormField = ({ name, component, label, required, ...props }) => (
  <Field
    name={name}
    component={renderField(component)}
    label={label}
    required={required}
    {...props}
  />
);

export default FormField;
