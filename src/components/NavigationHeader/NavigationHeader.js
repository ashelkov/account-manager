import React from 'react';
// components
import { Link } from 'react-router-dom';
// styles
import classnames from 'classnames/bind';
import styles from './NavigationHeader.mod.css';

const cn = classnames.bind(styles);

const NavigationHeader = () => (
  <header className={cn('header')}>
    <div className={cn('inner-content', 'container')}>
      <div className={cn('brand')}>
        <div className={cn('title')}>
          <Link to="/">
            Account
            <span className="semibold">Manager</span>
          </Link>
        </div>
      </div>
      <div className={cn('nav-links')}>
        <Link to="/">Users</Link>
        <Link to="/create-user">Create</Link>
      </div>
    </div>
  </header>
);

export default NavigationHeader;
