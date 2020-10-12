// Imports
import axios from 'axios' // Axios is a more developer friendly way of making/handling http requests <---
import { query, mutation } from 'gql-query-builder' // a helper function to generate graphQL queries using JSON <---
import cookie from 'js-cookie' // "A simple lightweight javascript API for handling cookies"

// App Imports
import { routeApi } from '../../../setup/routes' // imports routeAPI from setup/routes/index.js which evaluates to 'localhost:8000' (stored in .env) <---

// Actions Types
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST' // exports action type for login-request <---
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE' // exports action type for login-response <---
export const SET_USER = 'AUTH/SET_USER' // exports action type for set-user <---
export const LOGOUT = 'AUTH/LOGOUT' // exports action type for logout <---

// Actions

// Set a user after login or using localStorage token
export function setUser(token, user) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  return { type: SET_USER, user }
}

// Login a user using credentials
export function login(userCredentials, isLoading = true) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: 'userLogin',
      variables: userCredentials,
      fields: ['user {name, email, role}', 'token']
    }))
      .then(response => {
        let error = ''

        if (response.data.errors && response.data.errors.length > 0) {
          error = response.data.errors[0].message
        } else if (response.data.data.userLogin.token !== '') {
          const token = response.data.data.userLogin.token
          const user = response.data.data.userLogin.user

          dispatch(setUser(token, user))

          loginSetUserLocalStorageAndCookie(token, user)
        }

        dispatch({
          type: LOGIN_RESPONSE,
          error
        })
      })
      .catch(error => {
        dispatch({
          type: LOGIN_RESPONSE,
          error: 'Please try again'
        })
      })
  }
}

// Set user token and info in localStorage and cookie
export function loginSetUserLocalStorageAndCookie(token, user) {
  // Update token
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(user))

  // Set cookie for SSR
  cookie.set('auth', { token, user }, { path: '/' })
}

// Register a user
export function register(userDetails) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'userSignup',
      variables: userDetails,
      fields: ['id', 'name', 'email']
    }))
  }
}

// Log out user and remove token from localStorage
export function logout() { // Like explained above, this calls a method that removes entries in localStorage for 'token' & 'user' and removes 'auth' from cookies as well as creating the LOGOUT action. <--
  return dispatch => {
    logoutUnsetUserLocalStorageAndCookie()

    dispatch({ // This is an action that is dispatched to the reducer in ./state.js that sets error, isLoading, isAuthenticated, and details (all contents of 'user' state) to falsey values. <--
      type: LOGOUT
    })
  }
}

// Unset user token and info in localStorage and cookie
export function logoutUnsetUserLocalStorageAndCookie() {
  // Remove token
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')

  // Remove cookie
  cookie.remove('auth')
}

// Get user gender
export function getGenders() {
  return dispatch => {
    return axios.post(routeApi, query({
      operation: 'userGenders',
      fields: ['id', 'name']
    }))
  }
}
