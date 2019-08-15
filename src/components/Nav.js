import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import withAuth from '../components/withAuth';

class Nav extends Component {

  state = {
    isOpen: false 
  }

  toggleSidebar = (e) => {
    this.setState({ isOpen: !this.state.isOpen})
  }

  render() {  
    const { isOpen } = this.state;
    return (
        <>
        <nav className="nav-bar">
          <div className="grid-container">
            <div className="burger-wrapper">
                <span onClick={this.toggleSidebar}>&#9776;</span>
            </div>
            <div className="vale-icon-wrapper">
              <Link to="/plans">
                  <img className="vale-icon" src={require("../images/logo/color/logo-205x80.png")} alt="vale-icon"/>
              </Link>
            </div>
          </div>
        </nav>

        <div id="sideBar" className={`sidebar ${ isOpen ? "sidebar-open" : "sidebar-close"}`}>
          <div className="sidebar-container">
          <button className="closebtn" onClick={this.toggleSidebar}>&times;</button>
          {this.props.user.name ?
          <>
            <img className="avatar" src="{{currentUser.image}}" alt="User-avatar" />
            <h2 id="username-profile">{this.props.user.name}</h2>
            <p id="email-profile">{this.props.user.email}</p>
            <Link to="/user/profile">My profile</Link>
            <Link to="/user/created-plans">My plans</Link>
            <Link to="/user/joined-plans">Attending</Link>
            <button id="logout-btn" onClick={()=>{this.props.logout(); this.props.history.push("/welcome")}}>Log Out</button>
          </>
          :
          <>
              <img className="avatar" src={require("../images/default-avatar.png")} alt="default-avatar"/>
              <p id="email-profile">{this.props.user.email}</p>
              {/* <p>Please sign up or log in!</p> */}
              <Link to="/user/onboarding">My profile</Link>
              <Link to="/user/onboarding">My plans</Link>
              <Link to="/user/onboarding">Attending</Link>
              <button id="logout-btn" onClick={()=>{this.props.logout(); this.props.history.push("/welcome/#slide-cta")}}>Log Out</button>
          </>     
        }
      </div>
    </div>
      </>   
      )
  }
}

export default withAuth(withRouter(Nav));