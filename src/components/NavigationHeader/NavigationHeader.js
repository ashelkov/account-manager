import React from 'react';
// components
import { Link } from 'react-router-dom';
// styles
import classnames from 'classnames/bind';
import styles from './NavigationHeader.mod.css';

const cn = classnames.bind(styles);

const NavigationHeader = () => (
  <header className={cn('header')}>
    <div className={cn('inner-content')}>
      <div className={cn('brand')}>
        <div className={cn('title')}>
          Account
          <span className="semibold">Manager</span>
        </div>
      </div>
      <div className={cn('nav-links')}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>
      </div>
    </div>
  </header>
);

export default NavigationHeader;
