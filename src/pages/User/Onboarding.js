import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  {Redirect} from 'react-router-dom';
import userAPI from '../../services/user-service';
import BackNav from '../../components/BackNav';
import withAuth from '../../components/withAuth';


class Onboarding extends Component {
  state = {
    name: '',
    description: '',
    gender: '',
    birthdate: '',
    Culture: false,
    Drinks: false,
    Food: false,
    Party: false,
    Shopping: false,
    Sports: false,
    Travel: false,
    Volunteering: false,
    Others: false,
    phoneNum: '',
    profilePhoto: '',
    redirect: false,
  }

  handleOnChange = (event) => {
    const {name} = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]:value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, gender, birthdate, phoneNum, profilePhoto, redirect, ...interestsState} = this.state;
    const interests = [];
    for (const key in interestsState) {
      if(interestsState[key] === true){
        interests.push(key)
      }
    }
    console.log(interests)
    userAPI.onboarding({
      name,
      gender,
      birthdate,
      interests,
      phoneNum
    })
    .then(() => {
      this.props.updateUserData()
      .then((user) => {
        console.log(user)
        this.setState({
          redirect: true,
        })
      })
    })
    .catch(error => console.log(error))
  }
  render() {
    const {name, description, gender, birthdate, phoneNum, redirect} = this.state;
    return (
        <>
        <BackNav />
        <form className="form editProfile" onSubmit={this.handleSubmit}>

          <h1 id="more-details">Just a few more details and you will be ready to go!</h1>

          <label htmlFor="name" className="inp">
              <input type="text" name="name" id="name" placeholder="&nbsp;" required  onChange={this.handleOnChange} value={name}/>
              <span className="label">Name</span>
          </label>
          <label htmlFor="description" className="inp">
              <input type="text" name="description" id="name" placeholder="&nbsp;" required  onChange={this.handleOnChange} value={description}/>
              <span className="label">Description</span>
          </label>

          <div className="two-cols">
            <div className="col">
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender" onChange={this.handleOnChange} value={gender} defaultValue=''>
                <option value='' disabled={true} >Choose gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="birthdate">Birthdate</label>
              <input type="date" name="birthdate" id="birthdate" required  onChange={this.handleOnChange} value={birthdate}/>
            </div>
          </div>


          <label htmlFor="interests">Interests</label>
          <div className="interests">
            <input type="checkbox" name="Culture"  onChange={this.handleOnChange} /><span>Culture</span>
            <input type="checkbox" name="Drinks" onChange={this.handleOnChange}  /><span>Drinks</span>
            <input type="checkbox" name="Food"  onChange={this.handleOnChange}  /><span>Food</span><br/>
            <input type="checkbox" name="Party" onChange={this.handleOnChange}  /><span>Party</span>
            <input type="checkbox" name="Shopping" onChange={this.handleOnChange}  /><span>Shopping</span>
            <input type="checkbox" name="Sports" onChange={this.handleOnChange}  /><span>Sports</span><br />
            <input type="checkbox" name="Travel" onChange={this.handleOnChange}  /><span>Travel</span>
            <input type="checkbox" name="Volunteering" onChange={this.handleOnChange}  /><span>Volunteering</span>
            <input type="checkbox" name="Others" onChange={this.handleOnChange} /><span>Others</span>
          </div>

          <label htmlFor="phoneNum" className="inp">
            <input type="text" name="phoneNum" id="phoneNum" placeholder="&nbsp;" required onChange={this.handleOnChange} value={phoneNum} />
            <span className="label">Phone number</span>
          </label>

          {/* <label htmlFor="profile-photo">Profile picture</label>
            <input className="profile-photo" type="file" name="photo" id="profile-photo" /> */}
          <button className = "form-btn" type="submit">Save Profile</button>
        </form>
        {redirect ? <Redirect to="/plans"/> : null}
      </>
    )}}
export default withAuth(Onboarding);
