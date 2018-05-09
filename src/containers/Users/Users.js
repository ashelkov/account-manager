import React from 'react';
// components
import UsersListRow from './components/UsersListRow';
// styles
import styles from './Users.css';
import classnames from 'classnames';
// data
import users from './users.json';

const cn = classnames.bind(styles);

const Users = () => (
  <div>
    <h2>Users List</h2>
    <div className={cn('users-table')}>
      {users.map((user, index) => <UsersListRow user={user} key={index} />)}
    </div>
  </div>
);

export default Users;
