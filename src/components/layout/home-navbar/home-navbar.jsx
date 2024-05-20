import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import navLogo from "../../../assets/nav-logo.svg";

const HomeNavBar = () => {
  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  const getStartedButton = {
    backgroundColor: '#1DDA63',
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  }
  const NavBarTop = {
    fontSize: '17px',
    borderImage: "linear-gradient(to right, #1DDA63, #666666) 1",
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0'
  };

  return (
    <Navbar expand="lg" variant="dark" className="p-4" style={NavBarTop}>
      <Navbar.Brand><img src={navLogo} alt="navLogo" style={{ height: '50px', width: '130px'}} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#shop" className="me-5" style={navLinkStyle}>Shop</Nav.Link>
          <Nav.Link href="#business" className="me-5" style={navLinkStyle}>For Business & Enterprises</Nav.Link>
          <Nav.Link href="#pricing" className="me-5" style={navLinkStyle}>Pricing</Nav.Link>
          <Nav.Link href="#blog" className="me-5" style={navLinkStyle}>Blog</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Link to="/login" variant="light" style={getStartedButton}>Get your card</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HomeNavBar;
