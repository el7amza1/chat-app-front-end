import React from "react";
import { Col, Row,Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import login from "../images/login-image.jpg";

const LogIn = () => {
  return (
    <>
      <Row className="mx-0  " md={2} lg={2} style={{ height: "96.2vh" }}>
        <Col
          xs={6}
          md={6}
          lg={6}
          style={{
            backgroundImage: `url(${login})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
          }}
        ></Col>
        <Col
          xs={6}
          md={6}
          lg={6}
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#eeeeee" }}
        >
          <Form className="w-50">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#464646",
                color: "white",
                width: "100%",
              }}
            >
              Sign in
            </Button>
            <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
              Don't have an Account,
              <Link to="/">sign up</Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LogIn;
