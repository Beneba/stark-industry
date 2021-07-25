import React, { Component } from "react";
import { Form, Button,Row} from "react-bootstrap";



class AddUserForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      firstName: "",
      lastName: " ",
      phoneNumber : "",
      homeAddress: " ",
      jobRole: "",
      salary: "",
      id: ""

    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [ e.target.name ] : e.target.value,
    })
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      firstName: "",
      lastName: " ",
      phoneNumber : "",
      homeAddress: " ",
      jobRole: "",
      salary: "",
      id: ""
    })
  }
  render() {
    return (
      <>
    
     <Row className = "g-2" responsive >
       <h3 > Stark Industry Employee Form</h3>
     <Form onSubmit ={this.handleSubmit} >
        <Form.Group className="mb-1" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" 
          name="lastName"
          onChange={this.handleChange}
          value={this.state.lastName}
          required
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" name="phoneNumber"
            onChange={this.handleChange}
            value ={this.state.phoneNumber}  
            required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicHomeAddress">
          <Form.Label>Home Address</Form.Label>
          <Form.Control type="text" placeholder="Home Address" 
          name="homeAddress"
          onChange={this.handleChange}
          value={this.state.homeAddress} 
          required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicJobRole">
          <Form.Label>Job Role</Form.Label>
          <Form.Control type="text" placeholder="Job Role" 
          name="jobRole"
          onChange={this.handleChange}
          value={this.state.jobRole} 
          required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSalary">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="number" placeholder="Salary" 
          name="salary"
          onChange={this.handleChange}
          value={this.state.salary}
           required/>
        </Form.Group>

        <Button variant="primary" size ="lg" type="submit" onSubmit = {this.handleSubmit} >
          Submit
        </Button>
      </Form>
    
     </Row>
     </>
    );
  }
}

export default AddUserForm;
