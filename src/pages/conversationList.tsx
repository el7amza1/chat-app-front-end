import React, { useState, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import User1 from "../images/users/user1.jpg";
import { UserType } from "../types";
import { getUsers } from "../utilities/api";

const ConversationList = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  console.log(users);

  let token = localStorage.getItem("token");

  const getAllUsers = async () => {
    const res = await getUsers(token as string);
    if (res?.status === 200) {
      setUsers(res.data.users);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <div className="bg-chat-img"></div>
      <div
        style={{ overflow: "auto", height: "90vh", scrollbarWidth: "none" }}
        className="mt-5 "
      >
        {users?.map((user) => (
          <Row
            key={user.id}
            md="2"
            lg="2"
            className="bg-card d-flex px-4 py-1 my-3  "
          >
            <Col
              lg="4"
              md="4"
              style={{ backgroundImage: `url(${User1})` }}
              className="bg-users m-auto"
            ></Col>
            <Col lg="8" md="8" className="m-auto">
              <Link to="/chat">
                <h3>{user.firstName}</h3>
                <p style={{ fontSize: "20px" }}>{user.message}</p>
              </Link>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
