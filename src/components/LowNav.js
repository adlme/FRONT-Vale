import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LowNav extends Component {
  render() {  
    return (
        <div className="low-nav">
          <div className="secondary-button">
            <Link to="/plans/categories">
              <img className="categories-icon" src="../images/navbar/white/categories-icon-white.png" alt=""/>
            </Link>
          </div>
          <div className="create-button">
            <Link to="/plans/create">
            <img className="create-icon" src="../images/navbar/white/create-icon-white.png" alt=""/>
            </Link>
          </div>
          <div className="secondary-button">
            <Link to="/plans/map">
              <img className="map-icon" src="../images/navbar/white/map-icon-white.png" alt=""/>
            </Link>
          </div>
        </div>
      )
  }
}

export default LowNav;