import React from 'react';
// components
import UserAccountForm from '../../../components/UserForms/UserAccountForm';
// utils
import { SubmissionError } from 'redux-form';
import { sleep } from '../../../utils/utils';

function submit(values) {
  console.log('submit', values);

  return sleep(1000).then(() => {
    throw new SubmissionError({
      username: 'user does not exist',
      password: 'is required',
      passwordRepeat: 'passwords not match'
    });
  });
}

const UserAccountTab = () => {
  return <UserAccountForm onSubmit={submit} />;
};

export default UserAccountTab;
