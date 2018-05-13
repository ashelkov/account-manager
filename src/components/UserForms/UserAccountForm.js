import React from 'react';
// components
import { Field, reduxForm } from 'redux-form';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
// styles
import classnames from 'classnames/bind';
import styles from './UserAccountForm.mod.css';

const cn = classnames.bind(styles);

const UserAccountForm = ({
  handleSubmit,
  errors,
  pristine,
  reset,
  submitting
}) => {
  return (
    <form onSubmit={handleSubmit} className={cn('form')}>
      <div className={cn('flex-row')}>
        <div className={cn('column')}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
            expedita officia. Doloremque ea, esse, eum, expedita facere illo
            laudantium libero magnam minima numquam officiis soluta veritatis.
            Alias delectus perspiciatis quos.
          </p>
        </div>

        <div className={cn('column')}>
          <div className={cn('field-row')}>
            <label>Username</label>
            <Field
              name="username"
              component={Input}
              type="text"
              placeholder="Username"
            />
            <p className={cn('field-error')}>{errors && errors.username}</p>
          </div>
          <div className={cn('field-row')}>
            <label>Password</label>
            <Field
              name="password"
              component={Input}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={cn('field-row')}>
            <label>Repeat Password</label>
            <Field
              name="passwordRepeat"
              component={Input}
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
  form: 'user-account-form'
})(UserAccountForm);
