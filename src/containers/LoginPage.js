import React from 'react';
import LoginInput from '../components/LoginInput';
import LoginForm from '../components/LoginForm';
export default class LoginPage extends React.Component {
  render() {
    return (
      <LoginForm>
		<LoginInput type="text" placeholder="Username" />
        <LoginInput type="text" placeholder="Password" />
      </LoginForm>
    );
  }
}