import React from 'react';
import Form from '../components/Form';
import CustomModal from "../components/CustomModal";
import {
	Redirect
} from "react-router-dom";

export default class LoginPage extends React.Component {


	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.fields = [{
			name: "username",
			type: "text",
			placeholder: "username",
			required: "required"
		}, {
			name: "password",
			type: "text",
			placeholder: "password",
			required: "required" 
		}];
		this.state = {
			redirect: false
		};
	}

	onSubmit(formState) {
		this.setState({
			redirect: true,
		});
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />
		}
		return (
	  <div>
	  	<Form title="This is my login form title!" info="This is my info" fields={this.fields} onSubmit={this.onSubmit} />
	  </div>
	  
		);
	}
}