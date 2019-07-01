import React from "react";
import LoginInput from './LoginInput';
import {Redirect} from "react-router-dom";

export default class LoginForm extends React.Component {
	
	constructor(props) {
    super(props);
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.state = {
		name : null,
		password : null,
		redirect : false,
		};
	}
	
	handleInputChange(event) {
		 let input = event.target.name;
		 this.setState({
			[input]: event.target.value,
		});
		console.log(event.target.name);
	}
	
	handleSubmit(event) {
		event.preventDefault();
		 this.setState({
			redirect: true,
		});
	}
  
   render() {
	  if(this.state.redirect) {
		  return <Redirect to="/" />
	  }
    return (
      <form onSubmit={this.handleSubmit}>
		<LoginInput name="user" type="text" placeholder="Username" onChange={this.handleInputChange} />
        <LoginInput name="password" type="text" placeholder="Password" onChange={this.handleInputChange} />
		<button type="submit"> Submit your login </button>
      </form>      
    );
  }
}

