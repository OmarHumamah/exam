import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/Login';
import Home from './components/Home'
import FavFruit from './components/FavFruit'
import axios from 'axios'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fruitArr: [],
      favFruitArr: []
    }
  }

  componentDidMount=()=>{
    axios
    .get('http://localhost:3001/getfruit')
    .then(result=>{
      this.setState({fruitArr: result.data})
    })
    .catch(err=>{console.log(err);})

  }

  getFav = (fObj) =>{
    
    const { user, isAuthenticated } = this.props.auth0;
    let email = user.email;
    axios
    .post(`http://localhost:3001/getFav?email=${email}`, fObj)
    .then(result=>{
      this.setState({
        favFruitArr : result.data 
      })
    })
    .catch(err=>{console.log(err);})
  }

  ruderFav =()=> {
    const { user, isAuthenticated } = this.props.auth0;
    let email = user.email;
    axios
    .get(`http://localhost:3001/ruderfav?email=${email}`)
    .then(result=>{
      this.setState({
        favFruitArr : result.data 
      })
    })
    .catch(err=>{console.log(err);})
  }

  delete = (id)=>{
    console.log(id);
    const { user, isAuthenticated } = this.props.auth0;
    let email = user.email;
    axios
    .delete(`http://localhost:3001/deletefruit/${id}?email=${email}`)
    .then(result=>{
      this.setState({
        favFruitArr : result.data 
      })
    })
    .catch(err=>{console.log(err);})
  }  

  update= (fObj, id)=>{
    console.log(fObj, id);
    console.log( id);
    const { user, isAuthenticated } = this.props.auth0;
    let email = user.email;
    axios
    .put(`http://localhost:3001/updatefruit/${id}?email=${email}`, fObj)
    .then(result=>{
      this.setState({
        favFruitArr : result.data 
      })
    })
    .catch(err=>{console.log(err);})
  }

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                {isAuthenticated? <Home getFav={this.getFav} fruitArr={this.state.fruitArr}/>: <Login/>}
                {/* TODO: if the user is logged in, render the `Home` component, if they are not, render the `Login` component */}
              </Route>
              <Route exact path="/favFruit">
                {isAuthenticated && <FavFruit update={this.update} delete={this.delete} ruder={this.ruderFav} favArr={this.state.favFruitArr}/>}
                {/* TODO: if the user is logged in, render the `FavFruit` component, if they are not, render the `Login` component */}
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
