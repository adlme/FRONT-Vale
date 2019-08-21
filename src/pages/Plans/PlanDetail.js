import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import plansAPI from '../../services/plan-service';
import Moment from 'react-moment';
import BackNav from '../../components/BackNav';

class Plan extends Component {
  state = {
    plan: {},
    planOwner: '',
    planJoinedUsers: [],
    plansWithCounter: {},
    user: {},
    isJoined: false,
    isOwner: false,
    loading: true,
  }

  componentDidMount(){
    plansAPI.getOnePlan(this.props.match.params.id)
    .then((data) => {
      // console.log(data)
      this.setState({plan: data.plan, planOwner: data.planOwner, planJoinedUsers: data.planJoinedUsers ,plansWithCounter: data.plansWithCounter, user: data.fullUser, isJoined: data.isJoined, isOwner: data.isOwner, loading: false,})
    })
    .catch(error => console.log(error))
  }

  handleSubmitVale = (event) => {
    event.preventDefault();
    plansAPI.valePlan(this.props.match.params.id)
    .then(({data}) => {
      this.setState({ plan: data.plan, isJoined: true
      })
    })
    .catch(error => console.log(error))
  }

  handleSubmitLeave = (event) => {
 
    event.preventDefault();
    plansAPI.leavePlan(this.props.match.params.id)
    .then(({data}) => {
      this.setState({ plan: data.plan, isJoined: false
      })
    })
    .catch(error => console.log(error))
  }

  handleSubmitDelete = (event) => {

    event.preventDefault();
    plansAPI.leavePlan(this.props.match.params.id)
    .then(({data}) => {
      this.setState({ plan: data.plan, isOwner: false
      })
    })
    .catch(error => console.log(error))
  }


  render() {
    const {plan, plansWithCounter, planOwner, planJoinedUsers} = this.state
    console.log(planOwner)
    return (
    <>
    <BackNav />
    
    <div className="form-wrapper" id="plan-detail">
      <div className="plan-detail-owner-info">
        <Link to={`/users/${planOwner._id}`}>
          <img className="avatar users-image" id="plan-detail-owner-avatar" src={planOwner.image} alt="user"/>
        </Link>
        <Link to={`/users/${planOwner._id}`}>
        <p id="name">{planOwner.name}</p>
        </Link>
      </div>

      <div className="card-grid" id="plan-detail">
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

        {this.state.loading ? null : 
            <div className="plan-detail-joiner-info">
           { planJoinedUsers.map(joiner => (  
             <Link to={`/users/${joiner._id}`}>
                <img className="avatar users-image" id="plan-detail-joiner-avatar" src={joiner.image} alt="user"/>
             </Link>
            )) }
            </div>
        }

    </div>

      {this.state.user.status==='created' ? 
          <form>
            <div className="form-buttons" id="signup">

              <button className="btn btn-signup" type="submit">
                              <Link to='/user/onboarding'>      
                Vale!
                              </Link>

                </button>
            </div>
          </form>   
      :
        
        !plan.isOwner ? 
        (!this.state.isJoined ?
          <form onSubmit={this.handleSubmitVale}>
            <div className="form-buttons" id="signup">
              <button className="btn btn-signup" type="submit">Vale!</button>
            </div>
          </form>   
          :
          <form onSubmit={this.handleSubmitLeave}>
            <div className="form-buttons" id="signup">
              <button className="btn btn-signup" type="submit">Leave</button>
            </div>
          </form> 
        ):
        <form onSubmit={this.handleSubmitDelete}>
          <div className="form-buttons" id="signup">
            <button className="delete btn btn-signup" type="submit">Delete</button>
            </div>
          </form> 
        }
    </div>
    </>
    )}
}

export default Plan;