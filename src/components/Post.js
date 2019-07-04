import React from "react";
export default class Post extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<h1> {this.props.subject} </h1>
			<h2> {this.props.post} </h2>
			</div>
		);
	}
}