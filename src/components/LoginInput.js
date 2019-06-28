import React from "react";
export default class LoginInput extends React.Component {

  constructor(props) {
	super(props);
	this.state = {
	inputValue: null,
	};
  }
  
  
  updateInput(event) {
	this.state.inputValue = event.target.value;
	console.log(this.state.inputValue);
  }
  
  render() {
    return (
		<input type={this.props.type}  placeholder ={this.props.placeholder} onChange={event => this.updateInput(event)} />
    );
  }
  
  
}
