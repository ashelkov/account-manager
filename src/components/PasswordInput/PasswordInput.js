import React, { Component } from 'react';
// styles
import classnames from 'classnames/bind';
import styles from './PasswordInput.mod.css';

const cn = classnames.bind(styles);

class PasswordInput extends Component {
  state = {
    showPassword: false
  };

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { showPassword } = this.state;

    return (
      <div className={cn('password-input')}>
        <input {...this.props} type={showPassword ? 'text' : 'password'} />
        <i
          className={`far fa-${showPassword ? 'eye-slash' : 'eye'}`}
          onClick={this.togglePassword}
        />
      </div>
    );
  }
}

export default PasswordInput;
