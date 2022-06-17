import React from 'react';
import { Button, Form, Col, Row} from 'react-bootstrap';
import { withRouter, Redirect } from 'react-router';
import { Login as LoginAction } from '../Actions/Action.js';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValid: false, username: "", password: "", authenticated: (!this.props.authState) ? '' : this.props.authState.isAuthenticated };
  }
  onFnf = () => {
    alert("This functionality is yet to be implemented.")
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      'username': this.state.username,
      'password': this.state.password
    };
    this.props.login(user);

  }
  
  componentDidMount() {
    if (!this.state.isValid) {
      document.body.style.background = "url('/Images/bg2.jpg') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
    }
  }

  render() {
     return (
     <div>
        {this.props.authState ?  <Redirect to="/purchasedItems" /> : 
      <div className="form-layout">
        <div className={"panel-heading"}>
          <div className="panel-heading-left">
            <h3>Sign up now</h3>
            <p>Get access to your orders and chat for support.</p>
          </div>
          <div className="panel-heading-right">
            <span className="glyphicon glyphicon-pencil"></span>
          </div>
        </div>
        <div id="divLogin" className={"bgImage panel-body"}>
          <Form horizontal="true" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formHorizontalUsername">
              <Col sm={12}>
                <Form.Control size="lg" value={this.state.username} name="username"
                  className="input-lg" onChange={this.handleUsernameChange} ref="username" type="text" placeholder="Enter Username" />
              </Col>
            </Form.Group>

            <Form.Group controlId="formHorizontalPassword">
              <Col sm={12}>
                <Form.Control size="lg" value={this.state.password} name="password"
                  className="input-lg" onChange={this.handlePasswordChange} ref="password" type="password" placeholder="Password" />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={4}>
                <Button className="ml1" variant="success" size="md" type="submit">
                  Sign in
                </Button>
              </Col>
              <Col sm={8}>
                <Button className="ml2" variant="link" size="sm" onClick={this.onFnf}>
                  Terms and Conditions
              </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
        </div> }
     </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {
    authState: state.login.isAuthed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(LoginAction(data))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
