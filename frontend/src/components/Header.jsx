import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import React from "react";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>FunShop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;