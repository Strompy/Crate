// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import { H3, H4 }  from '../../ui/typography'
import { Input, Textarea, Select } from '../../ui/input'
import { grey, grey2 } from '../../ui/common/colors'
import { level1 } from '../../ui/common/shadows'
import { primary } from '../../ui/common/fonts'

// App Imports
// import admin from '../../../setup/routes/admin'
import { routeImage } from '../../setup/routes'
import { renderIf, slug } from '../../setup/helpers'
import { logout, updateProfileInfo } from './api/actions'
import { upload, messageShow, messageHide } from '../common/api/actions'
import { APP_URL } from '../../setup/config/env'
import { statesList } from './helperData/statesList'

// Component
class EditProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false, 
      newProfileData: {
        name: '',
        email: '',
        bio: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        image: '',
        id: null
      }
    }
  }

  onChange = (event) => {
    let newProfileData = this.state.newProfileData
    newProfileData[event.target.name] = event.target.value

    this.setState({ newProfileData })
  }

  onSubmit = (event) => {
    event.preventDefault()

    let newProfileData = this.state.newProfileData
    newProfileData.id = this.props.user.details.id
    this.setState({
      isLoading: true,
      newProfileData
    })

    this.props.messageShow('Saving information, please wait...')
    
    //call to back-end to post/update new data (method below does not exist yet)
    this.props.updateProfileInfo(this.state.newProfileData)
      .then((response) => {
        this.setState({
          isLoading: false,
        })
        
        if (this.props.user.error !== '') {
          this.props.messageShow(this.props.user.error)
        } else {
          this.props.messageShow('Information saved successfully.')
          window.location.href= `${APP_URL}/user/profile`
        }
      })
      .catch((error) => {
        this.props.messageShow('There was some error. Please try again.')

        this.setState({
          isLoading: false,
        })
      })
      .then(() => {
        window.setTimeout(() => {
          this.props.messageHide()
        }, 2000)
      })
  }

  onUpload = (event) => {
    this.props.messageShow('Uploading photo, please wait...')

    this.setState({
      isLoading: true,
    })

    let data = new FormData()
    data.append('file', event.target.files[0])

    // Upload image
    this.props.upload(data)
      .then((response) => {
        if (response.status === 200) {
          this.props.messageShow('File uploaded successfully.')

          let image = this.state.image
          image = `${response.data.file}`

          let newProfileData = this.state.newProfileData
          newProfileData.image = image

          this.setState({
            newProfileData
          })
         
          

        } else {
          this.props.messageShow('Please try again.')
        }
      })
      .catch((error) => {
        this.props.messageShow('There was some error. Please try again.')
      })
      .then(() => {
        this.setState({
          isLoading: false,
        })

        window.setTimeout(() => {
          this.props.messageHide()
          
        }, 5000)
      })
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Edit Profile - Crate</title>
        </Helmet>

        {/* Top Grey bar */}
        <Grid style={{ backgroundColor: grey }} justifyRight={true}>
          <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '20vw', marginRight: '24%' }}>
            <H3 font='secondary'>Edit profile</H3>
          </GridCell>
          
          <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '9vw' }}>
            <Button theme='secondary' onClick={this.props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
          </GridCell>
        </Grid>
        
        <form onSubmit={this.onSubmit}
          style={{
          backgroundColor: grey,
          borderRadius: '10px',
          padding: '20px 20px 40px',
          width: '60%',
          margin: '2em auto',
          boxShadow: `inset -1px 1px 10px ${grey2}, ${level1}`
        }}>
        {/* Image upload column */}
          <Grid justifyCenter={true}>
            <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '45%' }}>
              <H4 font='primary' style={{ marginBottom: '1.13em' }}>Profile Details</H4>

              {/* Name */}
              <Input
                type="text"
                fullWidth={true}
                placeholder="Name"
                required="required"
                name="name"
                autoComplete="off"
                value={this.state.newProfileData.name}
                onChange={this.onChange}
                style={{ marginBottom: '1.13em'}}
              />

              {/* Email */}
              <Input
                type="text"
                fullWidth={true}
                placeholder="Email"
                required="required"
                name="email"
                autoComplete="off"
                value={this.state.newProfileData.email}
                onChange={this.onChange}
                style={{ marginBottom: '1.13em' }}
              />

              {/* Bio */}
              <Textarea
                fullWidth={true}
                placeholder="Bio"
                required="required"
                name="bio"
                value={this.state.newProfileData.bio}
                onChange={this.onChange}
                style={{ fontFamily: primary, height: '1em', marginBottom: '1.3em'}}
              />

              {/* Upload File */}
              <div>
                <label htmlFor='file'>
                  Upload profile picture ⤵ {' '}
                  <input
                    type='file'
                    onChange={this.onUpload}
                    style={{ marginTop: '1em'}}
                  />
                </label>
                {renderIf(this.state.newProfileData.image !== '', () => (
                  <img
                    src={routeImage + '/images/uploads/' + this.state.newProfileData.image}
                    alt='Profile Image'
                    style={{ width: 40, marginTop: '-1em' }}
                  />
                ))}
              </div>

            </GridCell>
            <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '45%' }}>
              <H4 font='primary' style={{ marginBottom: '1.13em' }}>Shipping Address</H4>

              {/* Street address */}
              <Input
                type="text"
                fullWidth={true}
                placeholder='Street address'
                required="required"
                name="street"
                autoComplete="off"
                value={this.state.newProfileData.street}
                onChange={this.onChange}
                style={{ marginBottom: '1.13em' }}
              />

              {/* City */}
              <Input
                type="text"
                fullWidth={true}
                placeholder='City'
                required="required"
                name="city"
                autoComplete="off"
                value={this.state.newProfileData.city}
                onChange={this.onChange}
                style={{ marginBottom: '1.13em' }}
              />

              {/* State Select will go here */}
              <Select
                fullWidth={true}
                required="required"
                name="state"
                value={this.state.newProfileData.state}
                onChange={this.onChange}
                style={{ marginBottom: '1.13em'}}
              >
                <option value='' style={{ color: '#757575'}}>Please select state </option>
                {
                  statesList.map(state => (
                    <option value={state.code} key={state.code}>{state.name}</option>
                    ))
                }
              </Select>

              {/* Zip code */}
              <Input
                type="number"
                fullWidth={true}
                placeholder='Zip code'
                required="required"
                name="zip"
                autoComplete="off"
                value={this.state.newProfileData.zip}
                onChange={this.onChange}
                style={{ marginBottom: '1em' }}
              />
            </GridCell>
          </Grid>
          <Grid justifyCenter={true}>
            <GridCell style={{ maxWidth: '12.45vw'}}>
              <Button type='submit' theme='secondary'>Update Profile</Button>
            </GridCell>
          </Grid>
        </form>

        {/* Profile Info Edit form */}

      </div>     
    )
  }
}

// Component Properties
EditProfile.propTypes = {
  upload: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
}

function editProfileState(state) {
  return {
    user: state.user,
  };
}

export default withRouter(connect(editProfileState, { logout, messageShow, messageHide, upload, updateProfileInfo })(EditProfile))


