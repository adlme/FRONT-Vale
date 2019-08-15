import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import plansAPI from '../../services/plan-service';
import Nav from '../../components/Nav';
import LowNav from '../../components/LowNav';

class Categories extends Component {
  state = {
    categories: [],
    loading: true,
  }

  componentDidMount(){
    plansAPI.getAllCategories()
    .then(categories => this.setState({categories,loading: false,}))
    .catch(error => console.log(error))
  }

  render() {
    
    return (
      <div>
        <Nav />
          <section className="plans-wrapper">
            <h1>Categories</h1>
              <section className="plans-list" id="categories">
                {!this.state.loading && this.state.categories.map((category) => {
                  return <Link key={category._id} to={`/plans/category/${category.category}`} >
                            <div className="card">
                              <h3>{category.category}</h3>
                              <p>{category.length}</p>
                            </div>
                          </Link>
                          })}
              </section>
            </section>     
        <LowNav/>
      </div>
    )
  }
}

export default Categories;