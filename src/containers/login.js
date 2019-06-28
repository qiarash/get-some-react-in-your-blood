import React from "react";
import Input from "../components/Input";
// import Submit from "../components/Submit";
// import { BrowserRouter as Link, Router } from "react-router-dom";

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
      <form>
        <Input type={"USERNAME"} value="" onChange={this.onChange1} />
        <Input type={"PASSWORD"} value="" onChange={this.onChange2} />
        <li>
          {/* <Router>
            <Link to="/">
              <Submit onClick={this.submit} value="Login" />
            </Link>
          </Router> */}
        </li>
      </form>
    );
  }
}

export default LoginPage;
