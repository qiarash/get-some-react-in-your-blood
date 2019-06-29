import React from "react";
import LoginInput from './LoginInput';
import {Redirect} from "react-router-dom";

export default class LoginForm extends React.Component {
	
	constructor(props) {
    super(props);
	this.handleUsernameChange = this.handleUsernameChange.bind(this);
	this.handlePasswordChange = this.handlePasswordChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.state = {
		name : null,
		password : null,
		redirect : false,
		};
	}
	
	handleUsernameChange(event) {
		 const username = event.target.value;
		 this.setState(state => ({
			username: this.username,
		}));
		console.log("got username event");
	}
	
	handlePasswordChange(event) {
		const password = event.target.value;
		this.setState(state => ({
			password: this.password,
		}));
	}
	
	handleSubmit(event) {
		event.preventDefault();
		 this.setState(state => ({
			redirect: true,
		}));
	}
  
   render() {
	  if(this.state.redirect) {
		  return <Redirect to="/" />
	  }
    return (
      <form onSubmit={this.handleSubmit}>
		<LoginInput type="text" placeholder="Username" onChange={this.handleUsernameChange} />
        <LoginInput type="text" placeholder="Password" onChange={this.handlePasswordChange} />
		<button type="submit"> Submit your login </button>
      </form>      
    );
  }
}

