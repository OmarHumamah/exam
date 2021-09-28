import React from 'react';
import { Form, Button, Modal, Col } from "react-bootstrap";


class UpdateForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
        image: '',
        price:''
    };
  }

  componentDidMount = ()=> {
      console.log(this.props.obj);
      this.setState({
        name: this.props.obj.name,
        image: this.props.obj.image,
        price:this.props.obj.price
      })
  }

  render() {
    return <>
    <Modal show={this.props.show} onHide={()=>{this.props.close()}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>name</Form.Label>
    <Form.Control onChange={e=> this.setState({name: e.target.value})} defaultValue={this.state.name} type="text" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Img URL</Form.Label>
    <Form.Control onChange={e=> this.setState({image: e.target.value})} defaultValue={this.state.image} type="text" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>price</Form.Label>
    <Form.Control onChange={e=> this.setState({price: e.target.value})} defaultValue={this.state.price} type="text" placeholder="name@example.com" />
  </Form.Group>
</Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{this.props.close()}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.props.update(this.state, this.props.obj._id);this.props.close()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>;
  }

  
}

export default UpdateForm;
