import React from 'react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <a href="/" style={{ "paddingLeft": "15px" }}><img alt="csp1" width="auto" height="75px" src="/images/csp1.png" /></a>
        </div>
        <div className="jumbotron" style={{ "opacity": "0.85" }}>
          <div className="container">
            <h1>Customer Service Portal</h1>
            <p>Your one point contact for issues related to the purchased products.</p>
          </div>
        </div>
        <div className="container" id="wrap">
          <div className={"row bgClass"} style={{ "marginTop": "15px", "marginBottom": "45px" }}>
            <div className={"col-lg-5 offset-lg-7"}>
              <Login history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm;
