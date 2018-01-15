import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Search from './Search.jsx';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggleNavbar() {
    this.setState({collapsed: !this.state.collapsed});
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="ml">
          <NavbarBrand href="/">Airbnb Logo</NavbarBrand>
          
          <Nav className="ml-auto" >
            <NavItem>
              <NavLink href="#">Saved</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Trips</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
