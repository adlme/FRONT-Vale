import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Welcome from './pages/Auth/Welcome';
import Plans from './pages/Plans/Plans';
import Users from './pages/Users/Users';
import Onboarding from './pages/User/Onboarding';
import PlanDetail from './pages/Plans/PlanDetail';
import Create from './pages/Plans/Create';
import Categories from './pages/Plans/Categories';
import MapComponent from './components/MapComponent';
import Category from './pages/Plans/Category';
import AuthProvider from './contexts/auth-context';
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import OnboardedRoute from './components/OnboardedRoute';
import NotFound from './components/NotFound';
import CreatedPlans from './pages/User/CreatedPlans'
import JoinedPlans from './pages/User/JoinedPlans'
import Profile from './pages/User/Profile'
import ProfileEdit from './pages/User/ProfileEdit'
import UsersDetail from './pages/Users/UsersDetail';
import FileUploadComponent from './components/FileUploadComponent';
import Chat from './components/Chat/Chat';

import './App.css';

// Firebase config

import firebase from "firebase";
 
const config = {
  apiKey: "AIzaSyDaQ6kmgJ7rq932eNT6iXDzje2ISL8mJXs",
  authDomain: "vale-app-eabd3.firebaseapp.com",
  storageBucket: "gs://vale-app-eabd3.appspot.com/"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <main id="site-main">
              <Switch>
                <AnonRoute path="/welcome" component={Welcome} />
                <AnonRoute path="/signup" component={Signup} />
                <AnonRoute  path="/login" component={Login} />
                <PrivateRoute exact path="/user/onboarding" component={Onboarding} />
                <OnboardedRoute exact path="/user/created-plans" component={CreatedPlans} />
                <PrivateRoute exact path="/" render={() => {
                  return <Redirect to='/plans' />
                }} />
                <PrivateRoute path="/plans/map" component={MapComponent} />
                <PrivateRoute exact path="/plans" component={Plans} />
                <PrivateRoute exact path="/users" component={Users} />
                <PrivateRoute exact path="/users/:id" component={UsersDetail} />
                <OnboardedRoute exact path="/chat" component={Chat} />
                <OnboardedRoute exact path="/plans/create" component={Create} />
                <OnboardedRoute exact path="/user/joined-plans" component={JoinedPlans} />
                <OnboardedRoute exact path="/user/profile" component={Profile} /> 
                <OnboardedRoute exact path="/user/profile/edit" component={ProfileEdit} />   
                <PrivateRoute exact path="/plans/categories" component={Categories} />
                <PrivateRoute exact path="/plans/category/:id" component={Category} />
                <PrivateRoute path="/plans/:id" component={PlanDetail} />
                <PrivateRoute path="/upload" component={FileUploadComponent} />
                <Route component={NotFound} />
              </Switch>
          </main>
        </Router>
      </AuthProvider>
    )
  }
}

export default App;
