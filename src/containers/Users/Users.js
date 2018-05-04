import React from 'react';
// components
import UsersListRow from './components/UsersListRow';
// data
import users from './users.json';

const Users = () => (
  <div>
    <h2>Users List</h2>
    {users.map((user, index) => <UsersListRow user={user} key={index} />)}
  </div>
);

export default Users;
