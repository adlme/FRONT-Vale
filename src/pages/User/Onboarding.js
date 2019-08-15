import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  {Redirect} from 'react-router-dom';
import userAPI from '../../services/user-service';


class Onboarding extends Component {
  state = {
    title: '',
    description: '',
    date: '',
    category: 'null',
    redirect: false,
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]:value,
    })
  }

  handleSubmit = (event) => {
    const {title, description, date, category} = this.state;
    event.preventDefault();
    userAPI.addOnePlan({
      title,
      description,
      date,
      category,
      // location,
    })
    .then(() => {
      this.setState({
        redirect: true,
      })
    })
    .catch(error => console.log(error))
  }
  render() {
    const {title, description, date, category, redirect} = this.state;
    return (
        // <form className="form editProfile" enctype="multipart/form-data">

        //   <h1 id="more-details">Just a few more details and you will be ready to go!</h1>

        //   <label htmlFor="name" className="inp">
        //       <input type="text" name="name" id="name" placeholder="&nbsp;" required />
        //       <span className="label">Name</span>
        //   </label>


        //   <label htmlFor="gender">Gender</label>
        //   <select name="gender" id="gender">
        //     <option value="male">Male</option>
        //     <option value="female">Female</option>
        //     <option value="other">Others</option>
        //   </select>


        //   <label htmlFor="birthdate">Birthdate</label>
        //   <input type="date" name="birthdate" id="birthdate" required />


        //   <label htmlFor="interests">Interests</label>
        //   <div className="interests">
        //     <input type="checkbox" name="interests" value="Culture" /><span>Culture</span>
        //     <input type="checkbox" name="interests" value="Drinks" /><span>Drinks</span>
        //     <input type="checkbox" name="interests" value="Food" /><span>Food</span><br/>
        //     <input type="checkbox" name="interests" value="Party" /><span>Party</span>
        //     <input type="checkbox" name="interests" value="Shopping" /><span>Shopping</span>
        //     <input type="checkbox" name="interests" value="Sports" /><span>Sports</span><br />
        //     <input type="checkbox" name="interests" value="Travel" /><span>Travel</span>
        //     <input type="checkbox" name="interests" value="Volunteering" /><span>Volunteering</span>
        //     <input type="checkbox" name="interests" value="Others"/><span>Others</span>
        //   </div>

        //   <label htmlFor="phoneNum" className="inp">
        //     <input type="text" name="phoneNum" id="phoneNum" placeholder="&nbsp;" required />
        //     <span className="label">Phone number</span>
        //   </label>

        //   <label htmlFor="profile-photo">Profile picture</label>
        //     <input className="profile-photo" type="file" name="photo" id="profile-photo" />
        //   <button className = "form-btn" type="submit">Save Profile</button>
        // </form>

        )}}
export default Onboarding
