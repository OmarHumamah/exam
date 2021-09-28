import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import UpdateForm from "./UpdateForm";

class FavFruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      obj: {},
    };
  }

  componentDidMount = () => {
    this.props.ruder();
  };

  close =()=>{
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <>
        <h1>My Favorite Fruits</h1>
        <Row>
          {this.props.favArr.map((f) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={f.image} />
                  <Card.Body>
                    <Card.Title>{f.name}</Card.Title>
                    <Card.Text>price: {f.price}</Card.Text>
                    <Button
                      onClick={() => {
                        this.props.delete(f._id);
                      }}
                      variant="primary"
                    >
                      delete
                    </Button>
                    <Button
                      onClick={() => {
                        this.setState({
                          show: true,
                          obj: f
                        })
                      }}
                      variant="primary"
                    >
                      Update
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        {this.state.show &&  <UpdateForm update={this.props.update} close={this.close} show={this.state.show} obj={this.state.obj} />}
       
      </>
    );
  }
}

export default FavFruit;
