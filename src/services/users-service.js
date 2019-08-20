import axios from 'axios';

class UsersService {
  constructor() {
    this.usersAPI = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  getAllUsers() {
    return this.usersAPI.get('/users')
      .then(({ data }) => data);
  }

  getOneUser(userID) {
    return this.usersAPI.get(`/users/${userID}`)
      .then(({ data }) => data);
  }
}

const usersAPI = new UsersService();

export default usersAPI