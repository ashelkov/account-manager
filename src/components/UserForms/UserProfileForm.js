import React from 'react';
// components
import { reduxForm } from 'redux-form';
import FormField from '../FormField/FormField';
import TextInput from '../TextInput/TextInput';
import Datepicker from '../Datepicker/Datepicker';
import Button from '../Button/Button';
// styles
import classnames from 'classnames/bind';
import styles from './UserProfileForm.mod.css';

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
          <FormField
            name="firstName"
            component={TextInput}
            type="text"
            placeholder="First name"
            label="First Name"
            isRequired
          />
          <FormField
            name="lastName"
            component={TextInput}
            type="text"
            placeholder="Last name"
            label="Last Name"
            isRequired
          />
          <FormField
            name="birthdate"
            component={props => <Datepicker {...props} />}
            label="Birth date"
            isRequired
          />
        </div>

        <div className="col-sm-6 col-xs-12">
          <FormField
            name="email"
            component={TextInput}
            type="email"
            placeholder="Email"
            label="Email"
            isRequired
          />
          <FormField
            name="address"
            component={TextInput}
            type="text"
            placeholder="Enter your address..."
            label="Address"
            isRequired
          />
        </div>
      </div>

      <div className={cn('button-row')}>
        <Button type="button" onClick={reset}>
          Back
        </Button>
        <Button
          primary
          type="submit"
          disabled={pristine || submitting}
          loading={submitting}
        >
          <span>Next</span>
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'user-profile-form'
})(UserProfileForm);
