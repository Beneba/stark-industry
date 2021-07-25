import React from "react";
import {Card,Button } from 'react-bootstrap';


const User = (props) => {
    
    return (
      <>
    
      <Card className = "User" style={{  marginTop: "50px", width: "18rem", marginLeft: "30px" }}>
        <Card.Body>          
            <Card.Title> Staff Details</Card.Title>
          <Card.Text>
              <p> First Name: <b>{props.userInfo.firstName}</b></p>
              <p> Last Name:<b>{props.userInfo.lastName} </b></p>
              <p>Phone Number:<b> {props.userInfo.phoneNumber}</b></p>
              <p>Home Address: {props.userInfo.homeAddress}</p>
              <p>Job Role: <b> {props.userInfo.jobRole} </b></p>
              <p>Salary: <b>Ghc {props.userInfo.salary}</b></p>
        
          </Card.Text>
          <Card.Link href="#"><Button variant="primary" size ="sm"> Edit</Button></Card.Link>
          <Card.Link href="#"><Button variant="danger" size ="sm"> Delete</Button></Card.Link>
        </Card.Body>
      </Card>
    </>
    );
    
  }

export default User;
