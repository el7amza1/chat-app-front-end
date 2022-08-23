import { useState } from "react";
import {
  Button,
  InputGroup,
  Form,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatPage = () => {
  return (
    <>
      <div className="bg-chat-img"></div>
      <Container>
        <ScrollToBottom className="chat-style card example-1 scrollbar-ripe-malinka">
          <Container className="px-5 py-2 mt-5">
            <Row xs={1} md={2} lg={2} className="d-flex justify-content-end">
              <Col
                md={7}
                lg="7"
                className=" my-2"
                style={{ backgroundColor: "white" }}
              >
                <p className="fs-6 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                  accusantium asperiores iste harum saepe praesentium id!
                </p>
                <span style={{ float: "right" }}>7:02pm</span>
              </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="d-flex justify-content-start">
              <Col
                md={7}
                lg="7"
                className="my-2"
                style={{ backgroundColor: "white" }}
              >
                <p className="fs-6 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                  accusantium asperiores iste harum saepe praesentium id!
                </p>
                <span style={{ float: "right" }}>7:02pm</span>
              </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="d-flex justify-content-end">
              <Col
                md={7}
                lg="7"
                className=" my-2"
                style={{ backgroundColor: "white" }}
              >
                <p className="fs-6 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                  accusantium asperiores iste harum saepe praesentium id!
                </p>
                <span style={{ float: "right" }}>7:02pm</span>
              </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="d-flex justify-content-start">
              <Col
                md={7}
                lg="7"
                className=" my-2"
                style={{ backgroundColor: "white" }}
              >
                <p className="fs-6 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                  accusantium asperiores iste harum saepe praesentium id!
                </p>
                <span style={{ float: "right" }}>7:02pm</span>
              </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="d-flex justify-content-end">
              <Col
                md={7}
                lg="7"
                className=" my-2"
                style={{ backgroundColor: "white" }}
              >
                <p className="fs-6 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                  accusantium asperiores iste harum saepe praesentium id!
                </p>
                <span style={{ float: "right" }}>7:02pm</span>
              </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="d-flex justify-content-start">
              <Col
                md={7}
                lg="7"
                className=" my-2"
                style={{ backgroundColor: "white" }}
              >
                <p className="fs-6 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                  accusantium asperiores iste harum saepe praesentium id!
                </p>
                <span style={{ float: "right" }}>7:02pm</span>
              </Col>
            </Row>
            <Row xs={1} md={2} lg={2} className="d-flex justify-content-end ">
              <Col
                md={7}
                lg="7"
                className=" my-2"
                style={{ backgroundColor: "white" }}
              >
                <p className="fs-6 fw-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                  accusantium asperiores iste harum saepe praesentium id!
                </p>
                <span style={{ float: "right" }}>7:02pm</span>
              </Col>
            </Row>
          </Container>
          <div className="py-0 sticky-bottom">
            <InputGroup className="">
              <Form.Control
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="dark" id="button-addon2" className="rounded-0">
                SEND
              </Button>
            </InputGroup>
          </div>
        </ScrollToBottom>
      </Container>
    </>
  );
};

export default ChatPage;
