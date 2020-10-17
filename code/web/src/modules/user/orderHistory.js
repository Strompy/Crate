//Imports
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

//UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3 } from '../../ui/typography'
import { grey } from '../../ui/common/colors'
import Button from '../../ui/button'

// App Imports
import { APP_URL } from '../../setup/config/env'
import userRoutes from '../../setup/routes/user' 

const orderHistory = () => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>Order History - Crate</title>
    </Helmet>
    <Grid style={{ backgroundColor: grey }} justifyRight={true}>
      <GridCell
        style={{
          padding: "2em",
          textAlign: "center"
        }}
      >
        <H3 font="secondary">Past Order History</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ textAlign: 'center' }}>
        <p style={{ textAlign: 'center', marginTop: '2em', marginBottom: '2em' }}>
          <img src={`${APP_URL}/images/under-construction.png`} alt="under construction" style={{ height: '20em' }} />
        </p>

        <H3 font="secondary" style={{ marginBottom: '1em' }}>This page is currently under construction. Please check back later!</H3>

        <Link to={userRoutes.profile.path}>
          <Button theme="secondary">Back to Profile</Button>
        </Link>
      </GridCell>
    </Grid>
  </div>
)

export default orderHistory