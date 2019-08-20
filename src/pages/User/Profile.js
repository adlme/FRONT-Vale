import React,  { Component } from 'react';
import {Link} from 'react-router-dom';
import userAPI from '../../services/user-service';
import Moment from 'react-moment';
import BackNav from '../../components/BackNav';

class CreatedPlans extends Component {
  state = {
    user: {},
    loading: true,
  }

  componentDidMount(){
    userAPI.getUserProfile()
    .then((data) => {
      this.setState({user: data ,loading: false})
    })
    .catch(error => console.log(error))
  }

  render() {
    const {user} = this.state
    return (
      <div>
        <BackNav />
        <div class="form viewProfile">
          <img class="avatar" src={user.image} alt="User"/>
          <div class="profile-info">
            <label for="name">Name</label>
            <p>{user.name}</p>

            <label for="gender">Description</label>
            <p>{user.description}</p>

            <label for="gender">Gender</label>
            <p>{user.gender}</p>

            <label for="birthdate">Birthdate</label>
            <p>
              <Moment format="DD/MM/YYYY">
                {user.birthdate}
              </Moment>    
            </p>
            <label for="interests">Interests</label>
            <p>
            {!this.state.loading ? user.interests.map((interest) => {
              return `${interest} `
            }) : null} 
            </p>
            <label for="phoneNum">Phone number</label>
            <p>{user.phoneNum}</p>

          </div>
        <div class="form-buttons" id="profile">
          <Link to="/user/profile/edit" type="submit" class="btn btn-signup">Edit</Link>
        </div>
      </div>          
      </div>
    )
  }
}

export default CreatedPlans;