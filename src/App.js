import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import UserList from "./components/UserList";

import "./App.css";
import AddUserForm from "./components/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        // {
        //   fuName: "Olalekan",
        //   lastName: "Hussein",
        //   phoneNumber: "233245059484",
        //   homeAddress: "Accra",
        //   jobRole: "IT Support",
        //   salary: "Ghc 1000.00",
        //   id: "124tvf",
        // },
        // {
        //   firstName: "Bless",
        //   lastName: "Afetsi",
        //   phoneNumber: "0249175700",
        //   homeAddress: "Accra",
        //   jobRole: "Student",
        //   salary: "Ghc 1000.00",
        //   id: "fbth234t",
        // },
        // {
        //   firstName: "Mensah",
        //   lastName: "Bright",
        //   phoneNumber: "233245059484",
        //   homeAddress: "Accra",
        //   jobRole: "Senior Support",
        //   salary: "Ghc 250.00",
        //   id: "bbbn89",
        // },
      ],
    };
  }
  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <Container fluid responsive>
        <Row>
          <Card style={{ marginLeft: "350px", width: '40rem'  }}>
            <Col 
              className="addUserForm"
              
              center
            >
              <AddUserForm addUser={this.addNewUser} />
            </Col>
          </Card>
        </Row>
       
        <Row>
        <Card>
          <Col className ="UserList"  md= "12" center>
            <UserList usersData={this.state.users} />
          </Col>
          </Card>
          </Row>
      </Container>
    );
  }
}

export default App;
