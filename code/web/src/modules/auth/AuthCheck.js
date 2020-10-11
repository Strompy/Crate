// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import crate from '../../setup/routes/crate'
import admin from '../../setup/routes/admin'

// Component
const AuthCheck = (props) => (
  props.user.isAuthenticated ? (props.user.details.role === 'ADMIN' ? <Redirect to={admin.dashboard.path}/> : <Redirect to={crate.list.path}/>) : ''
)

// Component Properties
AuthCheck.propTypes = {
  user: PropTypes.object.isRequired
}

// Component State
/*
*state
!   user {
!     details { 
*       email: "user@crate.com", 
*       name: "The User",
*       role: "USER"
!     }
*     error: "",
*     isAuthenticated: true,
*     isLoading: false
!   }
*/
function authCheckState(state) {
  return {
    user: state.user
  }
}

export default connect(authCheckState, {})(AuthCheck)
