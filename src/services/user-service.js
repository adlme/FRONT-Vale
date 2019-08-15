import axios from 'axios';

class UserService {
  constructor() {
    this.plansAPI = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  getAllPlans() {
    return this.plansAPI.get('/user/created-plans')
      .then(({ data }) => data);
  }

}

const userAPI = new UserService();

export default userAPI