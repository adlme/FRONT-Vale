import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import userAPI from '../../services/user-service';
import Moment from 'react-moment';
import Nav from '../../components/Nav';
import LowNav from '../../components/LowNav';

class JoinedPlans extends Component {
  state = {
    plans: {plans: []},
    loading: true,
  }

  componentDidMount(){
    userAPI.getJoinedPlans()
    .then(plans => this.setState({plans,loading: false,}),
    
    )

    .catch(error => console.log(error))
  }

  render() {
  console.log('this are the joined plans',this.state.plans.plans)
    return (
      <div>
        <Nav />
        <section className="plans-wrapper">
          <h1>Joined Plans</h1>
          <section className="plans-list"> 
            {this.state.plans.plans.length > 0 ? 
            !this.state.loading && this.state.plans.plans.map((plan) => {
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
              })
              : <h2 id="no-plans">No plans yet...</h2>
              }
            
            </section>
        </section>
        <LowNav/>
      </div>
    )
  }
}

export default JoinedPlans;