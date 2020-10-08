// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// App Imports
import userRoutes from '../../setup/routes/user'

// Functional component that determines whether a user is logged in and either displays a Route or Redirects to the login page based on that 

const RoutePrivate = (props) => (
  props.user.isAuthenticated
  //If user is authenticated (logged in), we check if a role prop was passed down
    ? props.role
    //If role prop & it matches the user role, the component specified in props passed down is rendered; if no match, redirect to login page 
        ? props.user.details.role === props.role
          ? <Route {...props} component={props.component}/>
          : <Redirect to={userRoutes.login.path}/>
        //If no role prop, component specified in props passed down is rendered, 
        : <Route {...props} component={props.component}/>
      //if user not authenticated (not logged in), path is redirected to login
    : <Redirect to={userRoutes.login.path}/>
)

// Component Properties; a user object must be passed in as a prop
RoutePrivate.propTypes = {
  user: PropTypes.object.isRequired,
}

// Component State that is mapped from Redux store; user will contain error, isLoading, isAuthenticated, and details properties. Details is an object with name, email & role properties
function routePrivateState(state) {
  return {
    user: state.user
  }
}

//This connects the component to the Redux store 
export default connect(routePrivateState, {})(RoutePrivate);
