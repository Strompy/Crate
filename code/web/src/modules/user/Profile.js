// Imports
import React from 'react' // allows us to use JSX & react components in this file <---
import PropTypes from 'prop-types' // makes sure that props are being passed to component as expected <---
import { connect } from 'react-redux' // connects component to redux store <---
import { Helmet } from 'react-helmet' // manages changes to the document head (metadata) <---
import { Link } from 'react-router-dom' // Link turns an element into a link for React-Router <---

// UI Imports
import { Grid, GridCell } from '../../ui/grid' // Theses are style components that give elements flex-based grid styling <---
import { H3, H4 } from '../../ui/typography'// Imports conditional styling components for H1 and H2 <---
import Button from '../../ui/button' // Imports Button component with conditional styling <---
import { grey, grey2 } from '../../ui/common/colors' // Imports color variables from colors sheet <---

// App Imports
import userRoutes from '../../setup/routes/user' // Imports userRoutes object to be used with Link component to route to Subscriptions <---
import { logout } from './api/actions' // imports method (action creator) to reset contents of 'user' state to falsey values. <---

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      {/* Changes title in html head to 'My Profile - Crate' <--- */}
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}> {/* Flex container with grid styling */}
      <GridCell style={{ padding: '2em', textAlign: 'center' }}> {/* Style component for children of Grid */}
        <H3 font="secondary">My profile</H3> {/* custom h3 element with secondary styling */}
      </GridCell> 
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4> {/* Custom h4 element that renders the name from the details property from the user store via mapStateToProps */}

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p> {/* renders email from details property (an object) from user store via mapStateToProps*/}

        <Link to={userRoutes.subscriptions.path}> {/* Link element from router that routes to the path from subscriptions */}
          <Button theme="primary">Subscriptions</Button> {/* Custom Button element with primary theme */}
        </Link>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button> {/* Custom Button with primary styling, that creates logout action to clear the user state */}
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = { // Proptypes to check that state and dispatch are properly received from the store <---
  user: PropTypes.object.isRequired, 
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) { // method to connect 'user' state. AKA mapStateToProps() <---
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile) // connects 'user' state and dispatches logout action creator to props
