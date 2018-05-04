import React from 'react';
// styles
import classnames from 'classnames/bind';
import styles from './UsersListRow.mod.css';

const cn = classnames.bind(styles);

const UsersListRow = ({ user }) => (
  <div className={cn('row-container')}>
    <div className={cn('name', 'column')}>{user.name}</div>
    <div className={cn('email', 'column')}>{user.email}</div>
    <div className={cn('company', 'column')}>{user.company}</div>
    <div className={cn('phone', 'column')}>{user.phone}</div>
    <div className={cn('location', 'column')}>
      {[user.city, user.country].join(', ')}
    </div>
    <div className={cn('last-updated', 'column')}>just now</div>
  </div>
);

export default UsersListRow;
