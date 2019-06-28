import React from "react";
import Input from "../components/Input";
import Submit from "../components/Submit";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.onChange1 = this.onChange1.bind(this);
    this.onChange2 = this.onChange2.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange1(event) {
    this.setState({ username: event.target.value });
  }

  onChange2(event) {
    this.setState({ password: event.target.value });
  }

  submit() {
    console.log(this.state.username);
    console.log(this.state.password);
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <p>Please enter your login credentials</p>
        <form>
          <div>
            <Input type={"USERNAME"} value="" onChange={this.onChange1} />
          </div>
          <div>
            <Input type={"PASSWORD"} value="" onChange={this.onChange2} />
          </div>
          <Link to="/">
            <Submit onClick={this.submit} value="Login" />
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;
