import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import withAuth from './withAuth';

const OnboardedRoute = (props) => {
  const {isLoggedIn, user, component: Component, ...rest} = props;
  return (
    <>
      {console.log('isloggedIn',isLoggedIn)}
      {console.log('onboarded?',user.status)}
      {isLoggedIn && user.status === 'onboarded' ?  <Route 
        render={(props) => {
          return <Component {...props}/>
        }}
        {...rest}
      
      /> : <Redirect to='/user/onboarding' />}
    </>
   
  );
}
export default withAuth(OnboardedRoute);