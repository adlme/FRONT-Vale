import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import  withAuth from '../components/withAuth'

class Sidebar extends Component {

  state = {
    isOpen: false 
  }

  toggleSidebar = (e) => {
    this.setState({ isOpen: !this.state.isOpen})
  }

  render() {
    
    
    const { isOpen } = this.state;
    console.log("isOpen", isOpen);

    return (
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
              <img className="avatar" src="../images/default-avatar.png" alt="default-avatar"/>
              <p id="email-profile">{this.props.user.email}</p>
              {/* <p>Please sign up or log in!</p> */}
              <Link to="/user/onboarding">My profile</Link>
              <Link to="/user/onboarding">My plans</Link>
              <Link to="/user/onboarding">Attending</Link>
              <button id="logout-btn" onClick={()=>{this.props.logout(); this.props.history.push("/welcome")}}>Log Out</button>
          </>     
          }
          </div>
        </div>
    )
  }
}

export default withAuth(Sidebar)