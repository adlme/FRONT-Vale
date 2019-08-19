import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import withAuth from '../components/withAuth';

class BackNav extends Component {

  state = {
    isOpen: false 
  }

  render() {  
    return (
        <>
        <nav className="nav-bar">
          <div className="grid-container">
            
              <div className="back-nav-wrapper">
                  <Link to="/plans">
                    <span>&times;</span>
                  </Link>
              </div>

            <div className="vale-icon-wrapper">
              <Link to="/plans">
                  <img className="vale-icon" src={require("../images/logo/color/logo-205x80.png")} alt="vale-icon"/>
              </Link>
            </div>
          </div>
        </nav>
      </>   
      )
  }
}

export default withAuth(withRouter(BackNav));