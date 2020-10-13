// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { Tile } from '../../ui/image'
import { H3, H4, H6 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2, secondary } from '../../ui/common/colors'

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
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <Tile image={`${APP_URL}//images/stock/men/1.jpg`} width='60%' height='25em' style={{ marginBottom: '2em' }}/>
        <H4>{props.user.details.name}</H4>
      </GridCell>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 font='secondary' style={{ marginBottom: '0.5em' }}>Account Details</H4>
        <H6 style={{ marginBottom: '0.5em' }}>Account email:</H6>
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        <H6 style={{ marginBottom: '0.5em' }}>Shipping Address:</H6>
        <p style={{ color: grey2, marginBottom: '2em' }}> crate-team@gmail.com</p>
        <H6 style={{ marginBottom: '0.5em' }}>Bio:</H6>
        <p style={{ color: grey2, marginBottom: '2em' }}>Here is our bio.</p>
        <Button theme="primary" style={{ marginLeft: '1em' }}>Edit Profile Info</Button>
      </GridCell>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ color: secondary, marginBottom: '1em' }}>Your next crate<br/>will ship on: January 1, 2020</H4>
        <Button theme="primary" style={{ marginLeft: '1em' }}>Edit Ship Date</Button>
        <Tile image={`${APP_URL}/images/crate.png`} style={{ marginBottom: '1em' }} height='50%' width='50%'/>
        <Button theme="primary" style={{ marginLeft: '1em' }}>View Order History</Button>
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
