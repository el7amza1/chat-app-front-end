import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const clearLocalStorage= ()=>{
    localStorage.removeItem("token") 
    navigate("/home", { replace: true })
  
  }
  return (
    <Navbar bg="light" fixed="top" style={{width:"100%"}}>
      <Container>
        <Navbar.Brand  >IBRAHIM & EL-HAMZA App
        </Navbar.Brand>
        <ul className="d-flex list-none">
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/chat" > chat</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/signup">signUp</Link>
          </li>
        </ul>
        {  token  !== "" ?  <Button onClick={clearLocalStorage}>log out</Button> : "" }
      </Container>
    </Navbar>
  );
};

export default Header;
