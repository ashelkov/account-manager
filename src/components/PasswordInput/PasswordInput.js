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
    const {
      input,
      label,
      meta: { touched, error },
      className
    } = this.props;
    const { showPassword } = this.state;

    return (
      <div
        className={cn('input-field', className, {
          'has-error': touched && error
        })}
      >
        <label>{label}</label>
        <div className={cn('input-wrapper')}>
          <input
            {...input}
            placeholder={label}
            type={showPassword ? 'text' : 'password'}
          />
          <i
            className={`far fa-${showPassword ? 'eye-slash' : 'eye'}`}
            onClick={this.togglePassword}
          />
        </div>
        {touched && error && <div className={cn('field-error')}>{error}</div>}
      </div>
    );
  }
}

export default PasswordInput;
