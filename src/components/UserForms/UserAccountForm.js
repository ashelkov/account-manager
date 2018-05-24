import React from 'react';
// components
import { reduxForm } from 'redux-form';
import FormField from '../FormField/FormField';
import TextInput from '../TextInput/TextInput';
import PasswordInput from '../PasswordInput/PasswordInput';
import Button from '../Button/Button';
// styles
import classnames from 'classnames/bind';
import styles from './UserAccountForm.mod.css';

const cn = classnames.bind(styles);

const UserAccountForm = ({ handleSubmit, pristine, reset, submitting }) => {
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
          <FormField
            name="username"
            component={TextInput}
            type="text"
            placeholder="Username"
            label="Username"
            isRequired
          />
          <FormField
            name="password"
            component={props => <PasswordInput {...props} />}
            type="password"
            placeholder="Password"
            label="Password"
            isRequired
          />
          <FormField
            name="passwordRepeat"
            component={props => <PasswordInput {...props} />}
            type="password"
            placeholder="Password"
            label="Repeat Password"
            isRequired
          />
        </div>
      </div>

      <div className={cn('button-row')}>
        <Button type="button" onClick={reset}>
          Reset
        </Button>
        <Button
          primary
          type="submit"
          disabled={pristine || submitting}
          loading={submitting}
        >
          <span>Submit</span>
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'user-account-form'
})(UserAccountForm);
