import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap'
class Home extends React.Component {

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <Row>
        {this.props.fruitArr.map(f=>{
          return(<Col><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={f.image} />
          <Card.Body>
            <Card.Title>{f.name}</Card.Title>
            <Card.Text>
              price: {f.price}
            </Card.Text>
            <Button onClick={()=>{this.props.getFav(f)}} variant="primary">Add to favorite</Button>
          </Card.Body>
        </Card></Col>) 
        })}</Row>
      </>
    )
  }
}

export default Home;
