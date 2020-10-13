// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4, H5, H6 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2, secondary } from '../../ui/common/colors'
import { level1 } from '../../ui/common/shadows'

// App Imports
import userRoutes from '../../setup/routes/user' 
import { logout } from './api/actions'
import { APP_URL } from '../../setup/config/env'

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }} justifyRight={true}>
      <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '20vw', marginRight: '24%' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
      
      <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '9vw' }}>
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <img
          src={`${APP_URL}//images/stock/men/4.jpg`}
          style={{ 
            marginBottom: '2em', 
            height: '24em', 
            boxShadow: level1, 
            borderRadius: '10px'
          }}
        /> 
        <H4>{props.user.details.name}</H4>
      </GridCell>

      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 font='secondary' style={{ marginBottom: '1.5em' }}>Account Details</H4>

        <H6 style={{ marginBottom: '0.5em' }}>Account email:</H6>
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        <H6 style={{ marginBottom: '0.5em' }}>Shipping Address:</H6>
        <p style={{ color: grey2, marginBottom: '2em' }}>
          123 Vanilla St.<br/>Chocolate, CO<br/>80911
        </p>

        <H6 style={{ marginBottom: '0.5em' }}>Bio:</H6>
        <p style={{ color: grey2, width: '60%', margin: '0 auto 2em' }}>
          "Clothes are just accessories for my rollerblades, and I'm all about accessories."
        </p>

        <Button theme="primary">Edit Profile Info</Button>
      </GridCell>

      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <div 
          style={{
            backgroundColor: grey,
            borderRadius: '10px',
            padding: '20px',
            width: '75%',
            margin: '0 auto',
            boxShadow: `inset -1px 1px 10px ${grey2}`
          }}
        >
          <H5 style={{ color: 'black', marginBottom: '0.5em' }}>Your next crate will ship on:</H5>
          <H6 style={{ color: secondary, marginBottom: '1em' }}>November 13, 2020</H6>
          <Button theme="primary">Edit Ship Date</Button>
        </div>

        <img src={`${APP_URL}/images/crate.png`} style={{ height: '12em', display: 'block', margin: '2.4em auto 1em' }}/>
        <Button theme="primary">View Order History</Button>
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
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
