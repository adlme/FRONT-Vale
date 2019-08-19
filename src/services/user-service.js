import axios from 'axios';

class UserService {
  constructor() {
    this.userAPI = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  getUserProfile() {
    return this.userAPI.get('/user/profile')
      .then(({ data }) => data);
  }

  getCreatedPlans() {
    return this.userAPI.get('/user/created-plans')
      .then(({ data }) => data);
  }

  getJoinedPlans() {
    return this.userAPI.get('/user/joined-plans')
      .then(({ data }) => data);
  }

  onboarding(user) {
    return this.userAPI.put('/user/onboarding', user)
      .then(({ data }) => data);
  }
  editProfile(user) {
    return this.userAPI.put('/user/profile/edit', user)
      .then(({ data }) => data);
  }
}

const userAPI = new UserService();

export default userAPI