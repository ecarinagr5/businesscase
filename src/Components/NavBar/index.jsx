import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

//Style
import './style.css';


const NavBar = (props) => {

      return (
              <div className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Business Case | Carina González</Link>
                <div>
                  <div className="d-flex">
                    <NavLink className="btn btn-dark mr-2" to="/" exact>
                        User Search
                    </NavLink>
                    <NavLink className="btn btn-dark mr-2" to="/Repository" exact>
                        Repository Search
                    </NavLink>
                  </div>
                </div>

              </div>
          )
  }

export default withRouter(NavBar)
