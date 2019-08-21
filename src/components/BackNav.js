import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import withAuth from '../components/withAuth';

class BackNav extends Component {

  state = {
    isOpen: false 
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {  
    return (
        <>
        <nav className="nav-bar">
          <div className="grid-container" id="back-nav">
            
              <div className="back-nav-wrapper">
                <img onClick={this.goBack} className="back-icon" src={require("../images/back-icon-green.png")} alt="vale-icon"/>
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