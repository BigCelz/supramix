import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Header = () => {
  const {totalItems} = useCart();
  return (
    <Navbar expand="md py-3" className="fixed-top navbar bg-light" style={{ zIndex : 1000 }}>
      <Container>
        <Link to= "/"  className="router-link">
        <Navbar.Brand href="#home" className="navbrand">
          Supramix
        </Navbar.Brand>
        </Link>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-list">
            <Link to="/" className="router-link">
              <Nav.Link href="#home" className="navlink">
                Home
              </Nav.Link>
            </Link>
            <Link to="/cart" className="router-link shop-cart-link">
              <Nav.Link href="#link">
                <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
            </Link>
            <span className="span">{totalItems}</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
