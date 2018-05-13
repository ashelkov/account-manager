import React from 'react';
// styles
import classnames from 'classnames/bind';
import styles from './Spinner.mod.css';

const cn = classnames.bind(styles);

const Spinner = ({ scale = 1, color = '#333' }) => (
  <div className={cn('spinner')} style={{ transform: `scale(${scale})` }}>
    <div className={cn('bounce1')} style={{ backgroundColor: color }} />
    <div className={cn('bounce2')} style={{ backgroundColor: color }} />
    <div className={cn('bounce3')} style={{ backgroundColor: color }} />
  </div>
);

export default Spinner;
