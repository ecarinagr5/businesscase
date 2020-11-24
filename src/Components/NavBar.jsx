import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {

  constructor(props) {
    super(props); 
    this.state = {
        location:'/'
    }
  
  }

  render() {
      return (
              <div className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">IPC Carina Gonzalez</Link>
                <div>
                  <div className="d-flex">
                    <NavLink className="btn btn-dark mr-2" to="/" exact>
                        Inicio
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/detalle" exact>
                        Detalle
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/admin" exact>
                        Admin
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/login" exact>
                        Login
                    </NavLink>
                  </div>
                </div>

              </div>
          )
  }
}

export default NavBar;
