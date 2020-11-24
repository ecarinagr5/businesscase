
import React, { Component } from 'react';
import { Route, Router } from 'react-router';
// Redux
import { connect } from 'react-redux';

//Views
import Home from './Views/Home';
import Detalle from './Views/Detalle';
import Login from './Views/Login';
import Admin from './Views/Admin'

//Components
import NavBar from './Components/NavBar';

 

//Style
import './App.css';


class App extends Component {

  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <Router  history={ this.props.history }>
        <div>
            <NavBar />
            <Route exact path="/" component={ Home } />
            <Route exact path="/detalle" component={ Detalle } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/admin" component={ Admin } />
        </div>
      </Router>
    )
  }
}

export default connect()(App);

