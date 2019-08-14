import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Welcome from './pages/Auth/Welcome';
import Plans from './pages/Plans/Plans';
import Create from './pages/Plans/Create';
import AuthProvider from './contexts/auth-context';
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <main id="site-main">
              <Switch>
                <AnonRoute path="/welcome" component={Welcome} />
                <AnonRoute path="/signup" component={Signup} />
                <AnonRoute path="/login" component={Login} />
                <PrivateRoute exact path="/plans" component={Plans} />
                <PrivateRoute path="/plans/create" component={Create} />
                <Route component={NotFound} />
              </Switch>
          </main>
        </Router>
      </AuthProvider>
    )
  }
}

export default App;
