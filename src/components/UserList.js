import React from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User";

const UserList = (props) => {
  return (
    <Container resposive>
      <Row>
        {props.usersData.map((user, id) => {
          return (
            <User
              userInfo={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
      <br></br>
    </Container>
  );
};
export default UserList;
