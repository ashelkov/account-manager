import React from 'react';
// components
import { Field, reduxForm } from 'redux-form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
// styles
import classnames from 'classnames/bind';
import styles from './UserProfileForm.mod.css';
import PasswordInput from '../PasswordInput/PasswordInput';

const cn = classnames.bind(styles);

const UserProfileForm = ({
  handleSubmit,
  errors,
  pristine,
  reset,
  submitting
}) => {
  return (
    <form onSubmit={handleSubmit} className={cn('form')}>
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
            expedita officia. Doloremque ea, esse, eum, expedita facere illo
            laudantium libero magnam minima numquam officiis soluta veritatis.
            Alias delectus perspiciatis quos.
          </p>
        </div>

        <div className="col-sm-6 col-xs-12">
          <div className={cn('field-row')}>
            <label>Username</label>
            <Field
              name="username"
              component={Input}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className={cn('field-row')}>
            <label>Password</label>
            <Field
              name="password"
              component={PasswordInput}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={cn('field-row')}>
            <label>Repeat Password</label>
            <Field
              name="passwordRepeat"
              component={PasswordInput}
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>

      <div className={cn('button-row')}>
        <Button type="button" onClick={reset}>
          Reset
        </Button>
        <Button primary type="submit" disabled={pristine || submitting}>
          {submitting ? (
            <Spinner color="white" scale={0.6} />
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'user-profile-form'
})(UserProfileForm);
