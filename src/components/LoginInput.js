import React from "react";
export default class LoginInput extends React.Component {

  constructor(props) {
	super(props);
  }
  
  render() {
    return (
		<input name={this.props.name} type={this.props.type}  placeholder ={this.props.placeholder} onChange={this.props.onChange} />
    );
  }
  
  
}
