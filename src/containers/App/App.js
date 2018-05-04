import React from 'react';
// routes
import Users from '../Users/Users';
import UserCreate from '../UserCreate/UsersCreate';
// components
import { Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from '../../components/NavigationHeader/NavigationHeader';

const App = () => (
  <div>
    <AppHeader />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/create-user" component={UserCreate} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
