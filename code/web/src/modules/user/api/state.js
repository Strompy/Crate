// App Imports for helper function to check if object is empty, as well as all relevant actions that could be dispatched to reducer 
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State relating to user data on app load; details is an object with name, email & role properties 
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// Reducer relating to the "user" state in Redux store 
export default (state = userInitialState, action) => {
  switch (action.type) {
    //if action type is SET_USER, a new copy of user state is returned that updates user details with the user object passed in
    //It also checks if user object is empty & if not, isAuthenticated becomes true 
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    //if action type is LOGIN_REQUEST, error property is reset to null & isLoading is set to true 
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    //if action type is LOGIN_RESPONSE, error property is set to whatever is specified in action & isLoading is updated to false
    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    //if action type is LOGOUT, all user data is reset to null/false
    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    //if action type does not match the above or isn't passed in, state stays the same
    default:
      return state
  }
}