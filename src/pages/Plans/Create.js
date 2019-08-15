import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  {Redirect} from 'react-router-dom';
import plansAPI from '../../services/plan-service';


class CreatePlan extends Component {
  state = {
    title: '',
    description: '',
    date: '',
    category: 'null',
    // location: {
    //   type: "Point",
    //   coordinates: [
    //       0,
    //       0
    //   ]
    // },
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
    plansAPI.addOnePlan({
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
      <>
        <div className="form-with-title-wrapper">
        <h1>Create your plan</h1>
        <form className = "form" onSubmit={this.handleSubmit}>
          
          <label htmlFor="title" className="inp">
            <input type="text" name="title" id="title" onChange={this.handleOnChange} value={title} minLength="8" placeholder="&nbsp;" required />
            <span className="label">Title</span>
          </label>
  
        <label htmlFor="description" className="inp">
          <input type="text" name="description" id="description" onChange={this.handleOnChange} value={description} minLength="8" placeholder="&nbsp;" required />
          <span className="label">Description</span>
        </label>
  
        <label htmlFor="date" className="inp">
            <span className="label">Date</span>
            <input className="date-input" type="datetime-local" name="date" id="date" onChange={this.handleOnChange} value={date} placeholder="&nbsp;" required />
        </label>
  
  
        <label htmlFor="category">
        <span>Category</span>
          <select name="category" onChange={this.handleOnChange} value={category} >
            <option value="null">- - Select one category - -</option>
            <option value="Culture">Culture</option>
            <option value="Drinks">Drinks</option>
            <option value="Food">Food</option>
            <option value="Party">Party</option>
            <option value="Shopping">Shopping</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Others">Others</option>
          </select>
        </label>
     
        <div className="form-buttons">
          <Link to="/plans" type="submit" className="cancel-btn">Back</Link>
          <button type="submit" className="submit-btn">Create</button>
        </div>
        </form>
        {redirect ? <Redirect to="/plans"/> : null}
        </div>
      </>
    )}
  }

export default CreatePlan
