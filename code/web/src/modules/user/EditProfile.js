// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { H3, H4 }  from '../../ui/typography'
import { Input, Textarea, Select } from '../../ui/input'
import { white, grey, grey2 } from '../../ui/common/colors'
import { level1 } from '../../ui/common/shadows'
import { primary } from '../../ui/common/fonts'

// App Imports
// import admin from '../../../setup/routes/admin'
import { routeImage } from '../../setup/routes'
import { renderIf, slug } from '../../setup/helpers'
import { logout } from './api/actions'
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
        image: ''
      }
    }
  }

  onChange = (event) => {
    let newProfileData = this.state.newProfileData
    newProfileData[event.target.name] = event.target.value

    this.setState({ newProfileData })
  }

  // //do we need onChangeSelect? Seems only diff is adding a parseInt so may not need

  // onSubmit = (event) => {
  //   event.preventDefault()
    
  //   this.setState({
  //     isLoading: true,
  //   })

  //   this.props.messageShow('Saving information, please wait...')
    
  //   //call to back-end to post/update new data (method below does not exist yet)
  //   this.props.updateProfileInfo(this.state.newProfileData)
  //     .then((response) => {
  //       this.setState({
  //         isLoading: false,
  //       })
        
  //       if (response.data.errors && response.data.errors.length > 0) {
  //         this.props.messageShow(response.data.errors[0].message)
  //       } else {
  //         this.props.messageShow('Information saved successfully.')
  //         //might need something else here
  //         //might need to save image path on user
  //       }
  //     })

  //     .catch((error) => {
  //       this.props.messageShow('There was some error. Please try again.')

  //       this.setState({
  //         isLoading: false,
  //       })
  //     })
  //     .then(() => {
  //       window.setTimeout(() => {
  //         this.props.messageHide()
  //       }, 5000)
  //     })
  // }

  // onUpload = (event) => {
  //   this.props.messageShow('Uploading photo, please wait...')

  //   this.setState({
  //     isLoading: true,
  //   })

  //   let data = new FormData()
  //   data.append('file', event.target.files[0])

  //   // Upload image
  //   this.props.upload(data)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         this.props.messageShow('File uploaded successfully.')

  //         let image = this.state.image
  //         image = `/images/uploads/${response.data.file}`

  //         this.setState({
  //           image,
  //         })
  //       } else {
  //         this.props.messageShow('Please try again.')
  //       }
  //     })
  //     .catch((error) => {
  //       this.props.messageShow('There was some error. Please try again.')
  //     })
  //     .then(() => {
  //       this.setState({
  //         isLoading: false,
  //       })

  //       window.setTimeout(() => {
  //         this.props.messageHide()
  //       }, 5000)
  //     })
  // }

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
        
        <form style={{
          backgroundColor: grey,
          borderRadius: '10px',
          padding: '20px 20px 40px',
          width: '50%',
          margin: '2em auto',
          boxShadow: `inset -1px 1px 10px ${grey2}`
        }}>
        {/* Image upload column */}
          <Grid justifyCenter={true}>
            <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '45%' }}>
              <H4 font='secondary' style={{ marginBottom: '1.5em' }}>Profile Details</H4>

              {/* Name */}
              <Input
                type="text"
                fullWidth={true}
                placeholder='Name'
                required="required"
                name="name"
                autoComplete="off"
                value={this.state.newProfileData.name}
                onChange={this.onChange}
                style={{ marginBottom: '1.75em'}}
              />

              {/* Email */}
              <Input
                type="text"
                fullWidth={true}
                placeholder='Email'
                required="required"
                name="email"
                autoComplete="off"
                value={this.state.newProfileData.email}
                onChange={this.onChange}
                style={{ marginBottom: '1.75em' }}
              />

              {/* Bio */}
              <Textarea
                fullWidth={true}
                placeholder="Bio"
                required="required"
                name="bio"
                value={this.state.newProfileData.bio}
                onChange={this.onChange}
                style={{ fontFamily: primary, marginBottom: '1.75em'}}
              />

              {/* Upload File */}
              <div>
                <label htmlFor='file'>
                  Upload profile picture → {' '}
                  <input
                    type='file'
                    onChange={this.onUpload}
                  />
                </label>
              </div>

              {renderIf(this.state.newProfileData.image !== '', () => (
                <img
                  src={routeImage + this.state.newProfileData.image}
                  alt='Profile Image'
                  style={{ width: 200, marginTop: '1em' }}
                />
              ))}
            </GridCell>
            <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '45%' }}>
              <H4 font='secondary' style={{ marginBottom: '1.5em' }}>Shipping Address</H4>

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
                style={{ marginBottom: '1.75em' }}
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
                style={{ marginBottom: '1.75em' }}
              />

              {/* State Select will go here */}
              <Select
                fullWidth={true}
                required="required"
                name="state"
                value={this.state.newProfileData.state}
                onChange={this.onChange}
                style={{ marginBottom: '1.75em'}}
              >
                <option value='' style={{ color: '#757575'}}>Please select state</option>
                {
                  statesList.map(state => (
                    <option value={state.code} key={state.code}>{state.name}</option>
                    ))
                }
              </Select>

              {/* Zip code */}
              <Input
                type="text"
                fullWidth={true}
                placeholder='Zip code'
                required="required"
                name="zip"
                autoComplete="off"
                value={this.state.newProfileData.zip}
                onChange={this.onChange}
                style={{ marginBottom: '1.75em' }}
              />

            </GridCell>
          </Grid>
          <Grid justifyCenter={true}>
            <GridCell style={{ maxWidth: '10vw'}}>
              <Button theme='secondary'>Update Profile</Button>
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
  // productCreateOrUpdate: PropTypes.func.isRequired,
  // getProductById: PropTypes.func.isRequired,
  // getProductTypes: PropTypes.func.isRequired,
  // getUserGenders: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired,
}

function editProfileState(state) {
  return {
    user: state.user,
  };
}

export default withRouter(connect(editProfileState, { logout, messageShow, messageHide, upload })(EditProfile))


// <Grid alignCenter={true} style={{ padding: '1em' }}>
//             <GridCell>
//               <H4
//                 font='secondary'
//                 style={{ marginBottom: '1em', textAlign: 'center' }}
//               >
//                 {this.props.match.params.id === undefined ? 'Create' : 'Edit'}{' '}
//                 Product
//               </H4>

//               {/* Form */}
//               <form onSubmit={this.onSubmit}>
//                 <div style={{ width: '25em', margin: '0 auto' }}>
//                   {/* Name */}
//                   <Input
//                     type='text'
//                     fullWidth={true}
//                     placeholder='Name'
//                     required='required'
//                     name='name'
//                     autoComplete='off'
//                     value={this.state.product.name}
//                     onChange={this.onChange}
//                   />

//                   {/* Description */}
//                   <Textarea
//                     fullWidth={true}
//                     placeholder='Description'
//                     required='required'
//                     name='description'
//                     value={this.state.product.description}
//                     onChange={this.onChange}
//                     style={{ marginTop: '1em' }}
//                   />

//                   {/* Type */}
//                   <Select
//                     fullWidth={true}
//                     required='required'
//                     name='type'
//                     value={this.state.product.type}
//                     onChange={this.onChangeSelect}
//                     style={{ marginTop: '1em' }}
//                   >
//                     {this.state.productTypes.length > 0 ? (
//                       this.state.productTypes.map((type) => (
//                         <option value={type.id} key={type.id}>
//                           {type.name}
//                         </option>
//                       ))
//                     ) : (
//                       <option disabled='disabled' selected='selected'>
//                         Select type
//                       </option>
//                     )}
//                   </Select>

//                   {/* Gender */}
//                   <Select
//                     fullWidth={true}
//                     required='required'
//                     name='gender'
//                     value={this.state.product.gender}
//                     onChange={this.onChangeSelect}
//                     style={{ marginTop: '1em' }}
//                   >
//                     {this.state.userGenders.length > 0 ? (
//                       this.state.userGenders.map((gender) => (
//                         <option value={gender.id} key={gender.id}>
//                           {gender.name}
//                         </option>
//                       ))
//                     ) : (
//                       <option disabled='disabled' selected='selected'>
//                         Select gender
//                       </option>
//                     )}
//                   </Select>

//                   {/* Upload File */}
//                   <div style={{ marginTop: '1em' }}>
//                     <input
//                       type='file'
//                       onChange={this.onUpload}
//                       required={this.state.product.id === 0}
//                     />
//                   </div>

//                   {/* Uploaded image */}
//                   {renderIf(this.state.product.image !== '', () => (
//                     <img
//                       src={routeImage + this.state.product.image}
//                       alt='Product Image'
//                       style={{ width: 200, marginTop: '1em' }}
//                     />
//                   ))}
//                 </div>

//                 {/* Form submit */}
//                 <div style={{ marginTop: '2em', textAlign: 'center' }}>
//                   <Button
//                     type='submit'
//                     theme='secondary'
//                     disabled={this.state.isLoading}
//                   >
//                     <Icon size={1.2} style={{ color: white }}>
//                       check
//                     </Icon>{' '}
//                     Save
//                   </Button>
//                 </div>
//               </form>
//             </GridCell>
//           </Grid>
//         </div>
//       </div>