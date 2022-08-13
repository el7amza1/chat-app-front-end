import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { useFormik } from "formik"
import * as Yup from 'yup';
import { useState } from 'react';
import { signUp } from "../utilities/api";
import { Link } from "react-router-dom";
const SignUp = () => {
  
  const sendUser = async (data:any)=>{
    await signUp(data)

  }

  const formik = useFormik({
      initialValues: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
      },
      onSubmit: (values) => {
          console.log(values);
          sendUser(values)
          formik.resetForm();
      },
      validationSchema: Yup.object({
          firstName: Yup.string().required().min(2, "last name last be more than char").max(20, "limit passed"),
          lastName: Yup.string().required().min(2, "last name last be more than char").max(20, "limit passed"),
          email: Yup.string().required().min(5).max(80, "limit passed"),
          password: Yup.string().required().min(8).max(50, "limit passed"),
      }),
  })
  return (
    <div>
      <Row md={2} lg={2} style={{ height: "100vh" }} className="m-0">
        <Col md={6} lg={6} className='bg-signup-img'>
          {/* <div ></div> */}
        </Col>
        <Col md={6} lg={6}
          className='bg-form d-flex justify-content-center align-items-center' >
              <Form className='w-50' noValidate onSubmit={formik.handleSubmit}>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormik101"
                  className="position-relative"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    isValid={formik.touched.firstName && !formik.errors.firstName}
                    placeholder="First Name"
                    isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                    size="lg"

                  />
                  <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {formik.touched.firstName && formik.errors.firstName }
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationFormik102"
                  className="position-relative"              >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    size='lg'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.lastName && !formik.errors.lastName}
                    placeholder="Last Name"
                    isInvalid={formik.touched.lastName && !!formik.errors.lastName}

                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                  {formik.touched.lastName && formik.errors.firstName}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </Form.Group>
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
                <Button className='bg-button w-100 mt-5' type="submit" size='lg'
                >SIGN UP</Button>
                <div className="text-center">
                have an Account,
              <Link to="/login">Login</Link>
                </div>
              </Form>

        </Col>
      </Row>
    </div>
  )
}

export default SignUp
