import React, { Component } from 'react';
// components
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import UserAccountTab from './components/UserAccountTab';
// styles
import classnames from 'classnames/bind';
import styles from './UsersCreate.mod.css';

const cn = classnames.bind(styles);

class UserCreate extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>User Create</h2>
        <div className={cn('nav-tabs')}>
          <NavLink to="/create-user/account">1. Account</NavLink>
          <NavLink to="/create-user/profile">2. Profile</NavLink>
          <NavLink to="/create-user/contacts">3. Contacts</NavLink>
          <NavLink to="/create-user/capabilities">4. Capabilities</NavLink>
        </div>
        <div className={cn('tab-content')}>
          <Switch>
            <Route path="/create-user/account" component={UserAccountTab} />
            <Route
              path="/create-user/profile"
              render={() => <DummyTab title="Profile Tab" />}
            />
            <Route
              path="/create-user/contacts"
              render={() => <DummyTab title="Contacts Tab" />}
            />
            <Route
              path="/create-user/capabilities"
              render={() => <DummyTab title="Capabilities Tab" />}
            />
            <Redirect to="/create-user/account" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default UserCreate;

const DummyTab = ({ title }) => (
  <div>
    <h2>{title}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur
      debitis dolorum, fugit iure nam officia quis. Aspernatur debitis dolores,
      incidunt molestiae officia officiis placeat repudiandae veniam? Eos, nemo,
      nihil?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
      assumenda atque, debitis dolorem eaque eos minima nam neque non
      perspiciatis quas quia ratione repudiandae rerum tempora tempore,
      temporibus! Cum, iure.
    </p>
  </div>
);
