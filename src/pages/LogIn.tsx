import React, { useState } from "react";
import { Col, Row,Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import login from "../images/login-image.jpg";
import * as Yup from 'yup';
import {ErrorMessage, useFormik} from "formik"
import { loginUser ,authUser} from "../utilities/api";
const LogIn = () => {
  const [user , setUser] = useState({})
  const [token , setToken] = useState({})
  // setToken(user.data?.token)
  console.log(user);

  const getUser = async (dat:any)=> {
    const userInfo = await loginUser(dat);
    
    setUser(userInfo)
    await authUser(token)
  } 
  const formik = useFormik(  {
    initialValues: {

      email: "",
      password:"",
    },
    onSubmit: (values) => {
      
      getUser(values)
       formik.resetForm();
    },
    validationSchema: Yup.object({
      email: Yup.string().required().min(5).max(80, "limit passed"),
      password: Yup.string().required().min(8).max(50, "limit passed"),
    }),
  })
  return (
    <>
      <Row className="mx-0  " md={2} lg={2} style={{ height: "100vh" }}>
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
          <Form className="w-50" onSubmit={formik.handleSubmit}>
          <Form.Group as={Col} md="12" controlId="validationFormikEmail2">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      // aria-describedby="inputGroupPrepend"
                      name="email"
                      value={formik.values.email}
                      size='lg'
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.email && !formik.errors.email}

                      onChange={formik.handleChange}
                      isInvalid={formik.touched.email && !!formik.errors.email}
                      />
                    <Form.Control.Feedback type="invalid" tooltip>
                    {formik.touched.email && formik.errors.email }
                    </Form.Control.Feedback>
                    <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>

                  </InputGroup>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormik103"
                  className="position-relative"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    name="password"
                    onBlur={formik.handleBlur}

                    size='lg'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    isValid={formik.touched.password && !formik.errors.password}
                    isInvalid={formik.touched.password && !!formik.errors.password}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                  {formik.touched.password && formik.errors.password }
                  </Form.Control.Feedback>
                  <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>

                </Form.Group>
            <Button
              variant="dark"
              type="submit"
              style={{
                backgroundColor: "#464646",
                color: "white",
                width: "100%",
              }}
              className="mt-5"
            >
              Sign in
            </Button>
            <Form.Group className="mb-3 text-center" controlId="formBasicCheckbox">
              Don't have an Account,
              <Link to="/signup">sign up</Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LogIn;
