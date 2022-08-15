import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import { getToken } from "../redux/reducers/authslice";
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  
  const clearLocalStorage=  ()=>{
    dispatch(getToken("")) 
    console.log(token);
    
    localStorage.removeItem("token") 
    navigate("/login" ,{replace:true})
  }
  
  const token = useAppSelector(state=> state.token.token)
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
        {  token !== "" ?  <Button onClick={()=>clearLocalStorage()}>log out</Button> : ""

  }
      </Container>
    </Navbar>
  );
};

export default Header;
