import React from 'react';
import LoginForm from '../components/LoginForm';
export default class LoginPage extends React.Component {
	
  
  render() {
    return (
	  <div>
	  <h1> Hello, this is the login page, woo. </h1> 
      <LoginForm />
	  </div>
    );
  }
}