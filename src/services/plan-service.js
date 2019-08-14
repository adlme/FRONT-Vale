import axios from 'axios';

class PlanService {
  constructor() {
    this.plansAPI = axios.create({
      baseURL: 'http://localhost:4000'
    })
  }

  getAllPlans() {
    return this.plansAPI.get('/plans')
      .then(({ data }) => data);
  }

  
  addOnePlan(newPlan) {
    return this.plansAPI.post('/plans/create-plan', newPlan)
    .then(response => response)
  };
  
  // getOnePlan(planID) {
  //   return this.plans.get(`/plans/${planID}`)
  //     .then(({ data }) => data);
  // }
//   updateOneApp(id, updatedApp) {
//     return this.plans.put(`/apps/${id}/update`, updatedApp)
//     .then(response => response)
//   };

//   deleteOneApp(id) {
//     return this.plans.delete(`/apps/${id}/delete`)
//     .then(response => response);
//   };
}

const plansAPI = new PlanService();

export default plansAPI