import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" fixed="top" style={{width:"100%"}}>
      <Container>
        <Navbar.Brand href="#home">IBRAHIM & EL-HAMZA App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
