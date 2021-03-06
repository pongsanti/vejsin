// @flow

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { addTodo } from './actions/todo';

const HelloWorld = () => {
  const action = addTodo('2');
  return (
    <div>
      <Navbar className="header-nav-primary">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" className="header-nav-logo">CNMS</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      <h1>{action.type}</h1>
      <h1>{action.text}</h1>
    </div>
  );
};

export default HelloWorld;
