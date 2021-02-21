
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Views
import Home from './Views/Home';
import Detalle from './Views/Detalle';
//Components
import NavBar from './Components/NavBar/index';
//Style
import './App.css';


function App() {


  return (
      <Router>
        <div>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/Repository" component={ Detalle } />
            </Switch>
        </div>
      </Router>
    )
  }

export default App;

