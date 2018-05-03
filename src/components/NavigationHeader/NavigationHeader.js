import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationHeader.css';

const NavigationHeader = () => (
  <header className="nav-header">
    <div className="nav-header-inner">
      <div className="nav-brand">
        <div className="nav-title">
          Account
          <span className="semibold">Manager</span>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>
      </div>
    </div>
  </header>
);

export default NavigationHeader;
