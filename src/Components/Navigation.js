import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Logout } from '../Actions/Action';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import { connect } from 'react-redux';

class Navigation extends React.Component {
  onLogout = (event) => {
    event.preventDefault()
    this.props.logout()
    this.props.history.push('/');
  }
  onFnf = () => {
    alert("This functionality is yet to be implemented.");
  }
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" style={{ "height": "75px" }}>
            <Navbar.Brand href="/purchasedItems" style={{"marginTop":'10px'}}>
              <img height="55px" alt="csp1" src={process.env.PUBLIC_URL + '/images/csp1.png'} />
            </Navbar.Brand>
            <Navbar.Toggle />
       
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem>
                <button className="logout" onClick={(event)=>this.onLogout(event)}>Logout</button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
};
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(Logout())
  }
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigation));

