import React from "react";

import LoginInput from "./LoginInput";
export default class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			name: null,
			password: null,
		};

		this.inputs = this.props.fields.map((object, index) => {
			return <LoginInput key={index} name={object.name} type={object.type} placeholder={object.placeholder} onChange={this.handleInputChange} required={object.required} />;
		});

	}

	handleInputChange(event) {
		let input = event.target.name;
		this.setState({
			[input]: event.target.value,
		});
		console.log(event.target.name);
	}


	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
	   			<h1> {this.props.title} </h1>
	   			<h2> {this.props.info} </h2>
		  		{this.inputs}
		  		<button type="submit"> Submit form </button>
      		</form>
		);
	}
}