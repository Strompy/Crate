// Imports for React and Router elements 
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports for the routes object plus 3 components: 
//Layout, which displays header & conditionally renders a message; 
//NotFound, which is the 404 route component displayed;
//RoutePrivate, which is a component that determines whether the user is logged in to see if the desired page can be displayed; if so, it renders it, if not, it redirects to login page 
import { routes } from '../../setup/routes'
import Layout from '../../modules/common/Layout'
import NotFound from '../../modules/common/NotFound'
import RoutePrivate from '../../modules/auth/RoutePrivate'

//App is parent component rendered in main index file 
//Routes object is mapped over
//For each route, if the route contains 'auth: true' property, a Private Route is rendered, otherwise the public (standard) Route component is rendered
//To determine the path we check if its value is 'function', and if so determine it based on route.path() function; otherwise it just becomes the path string 
const App = () => (
  <Layout>
    <Switch>
      {Object.values(routes).map((route, index) => (
        route.auth
          ? <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}
      
{/* The NotFound component is rendered if none of the paths mapped over are matched  */}
      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App
