import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import usersAPI from '../../services/users-service';
import Moment from 'react-moment';
import Nav from '../../components/Nav';
import LowNav from '../../components/LowNav';


class Users extends Component {
  state = {
    users: [],
    loading: true,
  }

  componentDidMount(){
    usersAPI.getAllUsers()
    .then(data => {
      this.setState({users: data, loading: false})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="users-wrapper">
          <h1>Users</h1>
          <section className="users-list"> 
            {!this.state.loading && this.state.users.map((user) => {
              return <div className="card" key={user._id}>
                      <Link to={`/users/${user._id}`}>
                        <div className="card-grid-users">
                          <h3 className="user-name">{user.name}</h3>
                          <img className="avatar users-image" src={user.image} alt='user'/>
                          <p id="user-description">{user.description}</p>
                          <Moment diff={user.birthdate} unit="years">
                            2019-04-19T12:59-0500
                          </Moment>
                          <p id="user-proximity">at 3,3 kms</p>
                        </div>
                      </Link>
                    </div>              
              })}   
            </section>
        </section>
      </div>
    )
  }
}

export default Users;