import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import plansAPI from '../../services/plan-service';
import Moment from 'react-moment';
import Nav from '../../components/Nav';
import LowNav from '../../components/LowNav';


class Plans extends Component {
  state = {
    plans: [],
    loading: true,
    searchOpen: false,
  }

  searchPlan = (event) => {
    this.setState({
      loading: true
    })
    plansAPI.searchPlans(event.target.value)
    .then(data => {
      this.setState({plans: data.plansWithCounter.reverse(), loading: false})
    })
  }

  toggleSearch = (e) => {
    this.setState({ searchOpen: !this.state.searchOpen})
  }

  componentDidMount(){
    plansAPI.getAllPlans()
    .then(data => {
      this.setState({plans: data.plans.reverse(), loading: false})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Nav />
        <section className="plans-wrapper">
          <h1>Plans</h1>
          <section className="plans-list"> 
            <input className={`search-bar ${ this.state.searchOpen ? "search-bar-open" : "search-bar-close"}`} type="text" onChange={this.searchPlan} />
            <div className="search-icon-wrapper">
                  <img onClick={this.toggleSearch}  className="search-icon" src="../images/search-icon-radio.png" alt="search-icon"/>
            </div>
            {!this.state.loading && this.state.plans.map((plan) => {
              return <div key={plan._id} className={`card ${plan.category}`}>
                      <Link to={`/plans/${plan._id}`}>
                        <div className="card-grid">
                          <h3 className="title">{plan.title}</h3>
                          <p className="description">{plan.description}</p>
                          <p className="date">
                          <Moment format="D MMM" style={{paddingRight: 10}}>
                              {plan.date}
                          </Moment>
                          <Moment format="hh:mm">
                              {plan.date}
                          </Moment>
                          </p>
                          <p className="category">{plan.category}</p>
                          <p className="attendees">&#128101; {plan.counter}</p>
                        </div>
                      </Link>
                    </div>              
              })}   
            </section>
        </section>
        <LowNav/>
      </div>
    )
  }
}

export default Plans;