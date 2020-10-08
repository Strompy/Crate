// App Imports for components that represent pages on app
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'

// User routes object 
//each property in object has a key of the route name and a value with holds the path of that route and the component it should display 
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  //for the following 2 route properties, auth is true, meaning these are "private" pages that can only be viewed when logged in 
  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  }
}
