import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import EditUser from "./EditUser";

const User = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <EditUser userInfo={props.userInfo} editUser={props.editUser} closeModal ={handleClose} />
        </Modal.Body>
      </Modal>

      <Card
        className="User"
        style={{ marginTop: "50px", width: "18rem", marginLeft: "30px" }}
      >
        <Card.Body>
          <Card.Title> Staff Details</Card.Title>
          <Card.Text>
            <p>
              {" "}
              First Name: <b>{props.userInfo.firstName}</b>
            </p>
            <p>
              {" "}
              Last Name: <b>{props.userInfo.lastName}</b>
            </p>
            <p>
              Phone Number: <b>{props.userInfo.phoneNumber}</b>
            </p>
            <p>
              Home Address: <b>{props.userInfo.homeAddress}</b>
            </p>
            <p>
              Job Role: <b>{props.userInfo.jobRole}</b>
            </p>
            <p>
              Salary: <b>Ghc{props.userInfo.salary}</b>
            </p>
          </Card.Text>
          <Card.Link href="#">
            <Button variant="primary" size="sm" onClick={handleShow}>
              {" "}
              Edit
            </Button>
          </Card.Link>
          <Card.Link href="#">
            <Button variant="danger" size="sm" onClick={handleDelete}>
              {" "}
              Delete
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default User;
