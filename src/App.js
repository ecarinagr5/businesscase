
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Views
import Home from './Views/Home';
import Detalle from './Views/Detalle';
import Login from './Views/Login';
import Admin from './Views/Admin'
//Components
import NavBar from './Components/NavBar';
//Auth
import {auth} from './firebase';
//Style
import './App.css';


function App() {

  const [ firebaseUser, setFirebaseUser ] = React.useState(false)
  
  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  },[])

  return (
      <Router>
        <div>
            <NavBar firebaseUser={firebaseUser} />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/detalle" component={ Detalle } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/admin" component={ Admin } />
            </Switch>
        </div>
      </Router>
    )
  }

export default App;

