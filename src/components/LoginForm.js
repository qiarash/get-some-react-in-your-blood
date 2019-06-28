import React from "react";
export default class LoginForm extends React.Component {
  render() {
    return (
      <form>
		{this.props.children}
      </form>      
    );
  }
}

