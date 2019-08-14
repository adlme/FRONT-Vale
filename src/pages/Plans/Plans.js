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
  }

  componentDidMount(){
    plansAPI.getAllPlans()
    .then(plans => this.setState({plans,loading: false,}))
    .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.plans)
    return (
      <div>
        <Nav />
        <section className="plans-wrapper">
          <h1>Plans</h1>
          <section className="plans-list"> 
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
                          <p className="attendees">&#128101;{plan.counter}</p>
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