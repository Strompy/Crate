// Imports for being able to use a React component, propTypes, connect to connect the component to the Redux store, Helmet which allows you to add a head tag to the UI, and Link to create a Router Link
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports for re-usable "template" components that can be used (from Storybook), as well as colors and header styles
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports for route object and logout function, which will serve as a mapDispatchToProps fn
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component that gets displayed on Profile page
//Parent App component renders Profile component if route matches '/user/profile'
const Profile = (props) => (
  <div>
    {/* SEO: title tag that React Helmet lets us determine with JSX */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title grey bar */}
    {/* Grid & Grid Cell are styling containers that can be re-used */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    {/* Grid that displays user name, email, & buttons based on user prop from store; This will be where we add in addtl info for profile img, user desc, email address, shipping address */}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        {/* Button is linked to the subscription page */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        {/* On click, this button triggers the logout function, which dispatches action to store to reset user details to null isAuthenticated to false etc.  */}
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties: user from store & logout function are required
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State: user information is grabbed from store to be used as prop
function profileState(state) {
  return {
    user: state.user
  }
}

//This connects Profile component to the store and allows logout to dispatch action to update store
export default connect(profileState, { logout })(Profile)
