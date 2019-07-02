import React from "react";

import Input from "./Input";
export default class Form extends React.Component {

	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.inputs = this.props.fields.map((object, index) => {
			return <Input key={index} name={object.name} type={object.type} placeholder={object.placeholder} onChange={this.handleInputChange} required={object.required} />;
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
			<form onSubmit={(event) => {
				event.preventDefault(); // stop form submission
				this.props.onSubmit(this.state)
			}}>
	   			<h1> {this.props.title} </h1>
	   			<h2> {this.props.info} </h2>
		  		{this.inputs}
		  		<button type="submit"> Submit form </button>
      		</form>
		);
	}
}