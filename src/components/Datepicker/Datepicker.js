import React from 'react';
// component
import DatePicker from 'react-datepicker';
// utils
import moment from 'moment';
// styles
import classnames from 'classnames/bind';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Datepicker.mod.css';

const cn = classnames.bind(styles);

const Datepicker = ({ value, className, onBlur, ...props }) => (
  <DatePicker
    className={cn('datepicker', className)}
    selected={moment(value || undefined)}
    dateFormat="DD/MM/YYYY"
    {...props}
  />
);

export default Datepicker;
