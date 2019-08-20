import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import usersAPI from '../../services/users-service';
import Moment from 'react-moment';
import BackNav from '../../components/BackNav';

class UsersDetail extends Component {
  state = {
    user: {},
    loading: true,
  }

  componentDidMount(){
    usersAPI.getOneUser(this.props.match.params.id)
    .then((user) => {
      this.setState({user, loading: false,})
    })
    .catch(error => console.log(error))
  }

  render() {
    const {user} = this.state
    console.log('user info',user)
    return (
    <>
    <BackNav />
    <div className="users-wrapper" id="users-detail">
        <div className="card-grid-users">
        <h3 className="user-name">{user.name}</h3>
          <img className="avatar users-image" src={user.image} alt='user'/>
          <p id="user-description">{`" ${user.description} "`}</p>
          <Moment diff={user.birthdate} unit="years">
            2019-04-19T12:59-0500
          </Moment>
          <p id="user-proximity">at 3,3 kms</p>        
        </div>
    <div className="form-buttons" id="signup">
      <button className="btn btn-signup">Chat</button>
    </div>
    </div>
    </>
    )}
}

export default UsersDetail;