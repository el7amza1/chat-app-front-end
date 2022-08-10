import { useState } from "react";
import {
  Button,
  InputGroup,
  Modal,
  Form,
  Row,
  Col,
  Container,
} from "react-bootstrap";

const ChatPage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        className="bg-chat-img"
        variant="primary"
        onClick={() => setShow(true)}
      >
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        // size="lg"
      >
        <Modal.Body style={{ backgroundColor: "#eeeeee" }}>
          <Row xs={1} md={2} lg={2} className="d-flex justify-content-start">
            <Col
              md={8}
              className="ms-5 my-2"
              style={{ backgroundColor: "white" }}
            >
              <p className="fs-6 fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                accusantium asperiores iste harum saepe praesentium id!
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={2} className="d-flex justify-content-end">
            <Col
              md={8}
              className="me-5 my-2"
              style={{ backgroundColor: "white" }}
            >
              <p className="fs-6 fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                accusantium asperiores iste harum saepe praesentium id!
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={2} className="d-flex justify-content-start">
            <Col
              md={8}
              className="ms-5 my-2"
              style={{ backgroundColor: "white" }}
            >
              <p className="fs-6 fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                accusantium asperiores iste harum saepe praesentium id!
              </p>
            </Col >
          </Row>
          <Row xs={1} md={2} lg={2} className="d-flex justify-content-end">
            <Col
              md={8}
              className="me-5 my-2"
              style={{ backgroundColor: "white" }}
            >
              <p className="fs-6 fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                illo ipsa quo porro nesciunt, officiis sequi velit? Omnis
                accusantium asperiores iste harum saepe praesentium id!
              </p>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="py-0">
          <InputGroup className="">
            <Form.Control
              placeholder=""
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark" id="button-addon2" className="">
              SEND
            </Button>
          </InputGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChatPage;
