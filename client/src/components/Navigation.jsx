import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
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
          <Link to="/"><img className="navLogo" src="/assets/logo.png" alt="airbnb" onClick={this.props.goHome}></img></Link>
          <span className="navSearch">
            {this.props.searched ? <Search search={this.props.search}/> : null}
          </span>
          <Nav className="navButton">
            <NavItem>
              <Link to="/bookings" onClick={this.props.goToTrips}>Trips</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

/*

<Link to="/bookings"><button>button</button></Link>
<a className="navButton" href="/bookings">Trips</a>
*/