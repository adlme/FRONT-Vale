import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  {Redirect} from 'react-router-dom';
import userAPI from '../../services/user-service';
import BackNav from '../../components/BackNav';
import withAuth from '../../components/withAuth';
import Moment from 'react-moment';
import FileUploadComponent from '../../components/FileUploadComponent';



class Onboarding extends Component {
  state = {
    email: '',
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
    loading: true,
    avatarURL: '',
  }

  componentDidMount(){
    userAPI.getUserProfile()
    .then((data) => {
      const interests = data.interests
      interests.forEach((interest)=>{
        if(interest === 'Culture'){
          this.setState({
            Culture:true
          })}
        if(interest === 'Drinks'){
          this.setState({
            Drinks:true
          })}
        if(interest === 'Food'){
          this.setState({
            Food:true
          })}
        if(interest === 'Party'){
          this.setState({
            Party:true
          })}
        if(interest === 'Shopping'){
          this.setState({
            Shopping:true
          })}  
        if(interest === 'Sports'){
          this.setState({
            Sports:true
          })}  
          if(interest === 'Travel'){
            this.setState({
              Travel:true
            })}      
          if(interest === 'Volunteering'){
            this.setState({
              Volunteering:true
            })}    
          if(interest === 'Others'){
            this.setState({
              Others:true
            })}          
          })
      const newBirthdate = new Date (data.birthdate)
      this.setState({email: data.email, name: data.name, description: data.description, gender: data.gender, birthdate: newBirthdate.toLocaleDateString(), phoneNum: data.phoneNum, profilePhoto: data.profilePhoto, loading: false})
    })
    .catch(error => console.log(error))
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
    const {email, name, description, gender, birthdate, phoneNum, profilePhoto, redirect, avatarURL, ...interestsState} = this.state;
    const interests = [];
    for (const key in interestsState) {
      if(interestsState[key] === true){
        interests.push(key)
      }
    }
    userAPI.editProfile({
      email,
      name,
      description,
      gender,
      birthdate,
      interests,
      phoneNum,
      avatarURL,
    })
    .then(() => {
      this.props.updateUserData()
      .then((user) => {
        this.setState({
          redirect: true,
        })
      })
    })
    .catch(error => console.log(error))
  }

  avatarUpload = (url) => {
    this.setState({
      avatarURL: url
    })
  }

  render() {
    const {email, name, description, gender, birthdate, phoneNum, redirect, loading,Culture, Drinks, Food, Party, Shopping, Sports, Travel, Volunteering, Others} = this.state;
    return !loading ? 
        <>
        <BackNav />
        <form className="form editProfile" onSubmit={this.handleSubmit}>

          <label htmlFor="email" className="inp">
              <input type="email" className="email" name="email" id="email" placeholder="&nbsp;" required onChange={this.handleOnChange} value={email}/>
              <span className="label">Email</span>
          </label>

          <label htmlFor="name" className="inp">
              <input type="text" name="name" id="name" placeholder="&nbsp;" required  onChange={this.handleOnChange} value={name}/>
              <span className="label">Name</span>
          </label>

          <label htmlFor="description" className="inp">
              <input type="text" name="description" id="description" placeholder="&nbsp;" required  onChange={this.handleOnChange} value={description}/>
              <span className="label">Description</span>
          </label>

          <div className="two-cols">
            <div className="col">
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender" onChange={this.handleOnChange} value={gender}>
                <option value='' disabled={true} >Choose gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="birthdate">Birthdate</label>
              {/* <Moment format="DD/MM/YYYY"> */}
               <input type="date" name="birthdate" id="birthdate" required  onChange={this.handleOnChange} value={birthdate}/>
              {/* </Moment> */}
              <p>{birthdate}</p>
            </div>
          </div>

          <label htmlFor="interests">Interests</label>
          <div className="interests">
            <input type="checkbox" name="Culture" checked={Culture} onChange={this.handleOnChange} /><span>Culture</span>
            <input type="checkbox" name="Drinks" checked={Drinks} onChange={this.handleOnChange}  /><span>Drinks</span>
            <input type="checkbox" name="Food" checked={Food} onChange={this.handleOnChange}  /><span>Food</span><br/>
            <input type="checkbox" name="Party" checked={Party} onChange={this.handleOnChange}  /><span>Party</span>
            <input type="checkbox" name="Shopping" checked={Shopping} onChange={this.handleOnChange}  /><span>Shopping</span>
            <input type="checkbox" name="Sports" checked={Sports} onChange={this.handleOnChange}  /><span>Sports</span><br />
            <input type="checkbox" name="Travel" checked={Travel} onChange={this.handleOnChange}  /><span>Travel</span>
            <input type="checkbox" name="Volunteering" checked={Volunteering} onChange={this.handleOnChange}  /><span>Volunteering</span>
            <input type="checkbox" name="Others" checked={Others} onChange={this.handleOnChange} /><span>Others</span>
          </div>

          <label htmlFor="phoneNum" className="inp">
            <input type="text" name="phoneNum" id="phoneNum" placeholder="&nbsp;" required onChange={this.handleOnChange} value={phoneNum} />
            <span className="label">Phone number</span>
          </label>
          <FileUploadComponent url={this.avatarUpload}/>

          {/* <label htmlFor="profile-photo">Profile picture</label>
            <input className="profile-photo" type="file" name="photo" id="profile-photo" /> */}
          <button className = "btn btn-signup" type="submit" id="save">Save</button>
        </form>
        {redirect ? <Redirect to="/plans"/> : null}
        </>
          : null
    }}
export default withAuth(Onboarding);