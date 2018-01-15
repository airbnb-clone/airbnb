import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Search from './Search.jsx';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="nav">
        <Navbar color="faded" light>
          <NavbarBrand href="/"><img className="navLogo" src="/assets/logo.png" alt="airbnb" onClick={this.props.goHome}></img></NavbarBrand>
          {this.props.searched ? <div className="navSearch"><Search search={this.props.search}/></div> : null}
          <Nav>
            <NavItem>
              <a className="navButton" href="#">Saved</a>
            </NavItem>
            <NavItem>
              <a className="navButton" href="#">Trips</a>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}