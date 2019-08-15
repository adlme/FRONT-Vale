import React from 'react'
import { Link } from 'react-router-dom';


function Welcome() {
  return (
    <>
    <div className="slider">
      <div className="slides">
        <div className="slide" id="slide-1">
          <div className="align-center-vertical">
            <img className="logo-intro" src="../images/logo/color/logo-820x320.png" alt=""/>
            <div>
              <p className="subtitle">Find your next</p>
              <p className="main-title">best friend</p>
            </div>
            <img className="friends" src="../images/intro/friendship.png" alt=""/>
          </div>
        </div>

        <div className="slide" id="slide-2">
          <div className="align-center-vertical">
            <div className="feature">
              <img className="chat-img" src="../images/intro/chat.png" alt=""/>
              <p className="feature-description-1"><b><font color="green">Chat with people like you.</font></b> Find a new friend in a secure and easy way!</p>
            </div>
            <div className="feature">
              <p className="feature-description-2"><b><font color="green">Create or join plans of your interest.</font></b> Parachute out of an airplane with a new friend!</p>
              <img className="chat-img" src="../images/intro/parachute.png" alt=""/>
            </div>
            <div className="feature">
              <img className="chat-img" src="../images/intro/money-bag.png" alt=""/>
              <p className="feature-description-3"><b><font color="green">Win real money!</font></b>  Up to 10% of what you spend on affiliated places</p>
            </div>
          </div>
        </div>


        <div className="slide" id="slide-cta">
          <div className="form-buttons">
            <Link className="btn btn-signup" to="/signup">Signup</Link>
            <Link className = "btn btn-login" to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="jumpers">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-cta"></a>
      </div>
    </div>
    </>
  )
}

export default Welcome
