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
            {/* <div className="search-icon-wrapper">
                  <img className="search-icon" src="../images/search-icon-gray.png" alt="search-icon"/>
            </div> */}
            <div className="contacts-icon-wrapper">
              {this.props.match.path.includes('/plans') ? 
                <Link to="/users">
                  {/* <p className="mode">Users</p> */}
                  <img className="vale-icon" src={require("../images/users.png")} alt="users-icon"/>
                </Link>
              :
                <Link to="/plans">
                  {/* <p className="mode">Plans</p> */}
                  <img className="vale-icon" src={require("../images/plans-green.png")} alt="plans-icon"/>
                </Link>  
              }
            </div>
          </div>
        </nav>

        <div id="sideBar" className={`sidebar ${ isOpen ? "sidebar-open" : "sidebar-close"}`}>
          <div className="sidebar-container">
          <button className="closebtn" onClick={this.toggleSidebar}>&times;</button>
          {this.props.user.name ?
          <>
            <img className="avatar" src={this.props.user.image} alt="User-avatar" />
            <h2 id="username-profile">{this.props.user.name}</h2>
            <Link to="/user/profile">Profile</Link>
            <Link to="/user/created-plans">Created plans</Link>
            <Link to="/user/joined-plans">Joined plans</Link>
            <Link to="#0" id="chats">
              Chats
              <img src={require("../images/3-green.png")} alt="messages" id="unread-messages"/>       
            </Link>
            <button id="logout-btn" onClick={()=>{this.props.logout(); this.props.history.push("/welcome")}}>Log Out</button>
          </>
          :
          <>
              <img className="avatar" src={require("../images/default-avatar.png")} alt="default-avatar"/>
              <p id="email-profile">{this.props.user.email}</p>
              {/* <p>Please sign up or log in!</p> */}
              <Link to="/user/onboarding">Profile</Link>
              <Link to="/user/onboarding">Created plans</Link>
              <Link to="/user/onboarding">Joined Plans</Link>
              <Link to="#0">Chats</Link>
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