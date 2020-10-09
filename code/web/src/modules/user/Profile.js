// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//* https://react-redux.js.org/api/connect
import { Helmet } from 'react-helmet'
//Helmet takes plain HTML tags and outputs plain HTML tags.
//* https://github.com/nfl/react-helmet#readme
import { Link } from 'react-router-dom'

// UI Imports
//* npm run storybook in web directory to see storybook gui 
//* all the ui is built there per storybooks docs good reference 
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'

import { logout } from './api/actions'
// *removes user token from local storage and changes to no user logged in display

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    {/* https://storybook.js.org/docs/react/get-started/introduction

    Grid system from Storybook.js had to do a bit of research on how these ui components are build but once I was able to figuer it out was fairly easy to view storybook gui npm run storybook in terminal all dependencies have been updated
    */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
        {/* Need to add link to form page to be able to edit user details add photo as well as update display if to display more user details storybook has some input setup already in the storybook we may be able to utilize.
        */}
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        {/* Links to user subscriptions page */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        {/* Logs user out */}
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State

/*
*profileState === MSTP
*state
!  user {
!    details { 
*      email: "user@crate.com", 
*      name: "The User",
*      role: "USER"
!    }
*    error: "",
*    isAuthenticated: true,
*    isLoading: false
!  }
*/

function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
// connections to store currently only user is being passed into from the store.state 


/*
* This file is going to be where we branch from depending on how we decide to move forward as a group we will be updating user profile here and adding way to add/update to the user data.
*/

/*
todo  Add additional user data per spec to user data server
? do we need to add user gender M/F/Rather not to say?
* https://mod4.turing.io/projects/crate/crate.html 
todo Add edit link/button to controlled form to update user additional data
* Look into building storys with storybook
? Is the story already made in the ui folders?
todo Add user photo/img/avatar
* look in admin section how they updated photos in :
* code/web/src/modules/admin/product/CreateOrEdit.js 
todo Display user extened data to profile page
? How do we want this to be displayed?
* Idea: Personal user info page or display
* Idea: Current page
! Wire frame out this display of user data
*/
