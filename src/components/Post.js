import React from "react";
import styled from 'styled-components'



const StyledDiv = styled.div `
text-align:center
`;


export default class Post extends React.Component {

	constructor(props) {
		super(props);
	}



	render() {
		return (
			<StyledDiv>
			<h1> {this.props.subject} </h1>
			<h2> {this.props.post} </h2>
			</StyledDiv>
		);
	}
}