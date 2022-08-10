import { url } from 'inspector'
import React from 'react'
import { Button, Col, Form, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <div>
            <Row md={2} lg={2} style={{ height: "100vh" }}>

                <Col md={6} lg={6} className='bg-signup-img'>
                    {/* <div ></div> */}
                </Col>
                <Col md={6} lg={6} className='bg-form d-flex justify-content-center align-items-center' >
                    <Form className="w-50">
                        <Form.Group className="mb-3" controlId="formBasicFirstname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control size="lg" type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3"  controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control size="lg" type="password" placeholder="Password" />
                        </Form.Group>

                        <Button className='w-100 mt-4 bg-button' size="lg" variant="dark">sign up</Button>
                        <p style={{fontSize:"20px"}}>
                            have an account ,<Link to="/" style={{textDecoration:"none"}}>loge in</Link>
                        </p>
                    </Form>
                </Col>

            </Row>
        </div>
    )
}

export default SignUp
