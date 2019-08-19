import React, {Component} from 'react'
import {AuthContext} from '../contexts/auth-context.js';

const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return(
        <AuthContext.Consumer>
          {(dataFromProvider) => (
            <Comp  
              user={dataFromProvider.user} 
              isLoggedIn={dataFromProvider.isLoggedIn} 
              login={dataFromProvider.login}
              signup={dataFromProvider.signup}
              logout={dataFromProvider.logout}
              updateUserData={dataFromProvider.updateUserData}
              {...this.props}
            />
          )}
        </AuthContext.Consumer>
      )
    }
  }
}

export default withAuth;