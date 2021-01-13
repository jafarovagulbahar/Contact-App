import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import './module.css';

export const Header = () => {
  return (
    <Navbar className="navbar">
      <Container>
      <Link to="/">Contact</Link>
        <Nav>
          <NavItem>
            <Link className="btn" to="/add">Create Contact</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
