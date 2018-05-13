import React from 'react';
// components
import UserProfileForm from '../../../components/UserForms/UserProfileForm';
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

const UserProfileTab = () => {
  return <UserProfileForm onSubmit={submit} />;
};

export default UserProfileTab;
