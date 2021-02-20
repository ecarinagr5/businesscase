import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../firebase';
import { withRouter } from 'react-router-dom'

const NavBar = (props) => {

  const cerrarSesion = () => {
      auth.signOut()
          .then(() => {
                props.history.push('/login')
          })
  }
      return (
              <div className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Business Case|Carina González|GITHUB</Link>
                <div>
                  <div className="d-flex">
                    <NavLink className="btn btn-dark mr-2" to="/" exact>
                        User Search
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/Repository" exact>
                        Repository Search
                    </NavLink>
                    {
                      props.firebaseUser !== null ? (
                        <NavLink className="btn btn-dark mr-2" to="/login" exact>
                          Login
                        </NavLink>
                      ) : null
                    }
                    {
                      props.firebaseUser !== null ? (
                        <button 
                          className="btn btn-dark" 
                          onClick={()=> cerrarSesion()}>Cerrar Sesión</button>
                      ) : (
                        <NavLink className="btn btn-dark mr-2" to="/login" exact>
                          Login
                        </NavLink>
                      )
                    }
                  </div>
                </div>

              </div>
          )
  }

export default withRouter(NavBar)
