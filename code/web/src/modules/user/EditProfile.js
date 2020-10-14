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
import { H3, }  from '../../ui/typography'
import { Input, Textarea, Select } from '../../ui/input'
import { white, grey } from '../../ui/common/colors'

// App Imports
// import admin from '../../../setup/routes/admin'
import { routeImage } from '../../setup/routes'
import { slug } from '../../setup/helpers'
import { logout } from './api/actions'
import { upload, messageShow, messageHide } from '../common/api/actions'

// Component
class EditProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // isLoading: false,
      
    }
  }

  onChange = (event) => {
    let product = this.state.product
    product[event.target.name] = event.target.value

    if (event.target.name === 'name') {
      product.slug = slug(event.target.value)
    }

    this.setState({
      product,
    })
  }

  onChangeSelect = (event) => {
    let product = this.state.product
    product[event.target.name] = parseInt(event.target.value)

    this.setState({
      product,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true,
    })

    this.props.messageShow('Saving information, please wait...')

    // Save product
    // this.props
    //   .productCreateOrUpdate(this.state.product)
    //   .then((response) => {
    //     this.setState({
    //       isLoading: false,
    //     })

    //     if (response.data.errors && response.data.errors.length > 0) {
    //       this.props.messageShow(response.data.errors[0].message)
    //     } else {
    //       this.props.messageShow('Information saved successfully.')

    //       this.props.history.push(admin.productList.path)
    //     }
    //   })
    //   .catch((error) => {
    //     this.props.messageShow('There was some error. Please try again.')

    //     this.setState({
    //       isLoading: false,
    //     })
    //   })
    //   .then(() => {
    //     window.setTimeout(() => {
    //       this.props.messageHide()
    //     }, 5000)
    //   })
  }

  onUpload = (event) => {
    this.props.messageShow('Uploading photo, please wait...')

    this.setState({
      isLoading: true,
    })

    let data = new FormData()
    data.append('file', event.target.files[0])

    // Upload image
    this.props
      .upload(data)
      .then((response) => {
        if (response.status === 200) {
          this.props.messageShow('File uploaded successfully.')

          let product = this.state.product
          product.image = `/images/uploads/${response.data.file}`

          this.setState({
            product,
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

        <Grid style={{ backgroundColor: grey }} justifyRight={true}>
          <GridCell style={{ padding: '2em', textAlign: 'center', maxWidth: '20vw', marginRight: '24%' }}>
            <H3 font="secondary">Edit profile</H3>
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

            {/* Upload File
            <div style={{ marginTop: '1em' }}>
              <input
                type='file'
                onChange={this.onUpload}
                required={this.state.product.id === 0}
              />
            </div>

     
            {renderIf(this.state.product.image !== '', () => (
              <img
                src={routeImage + this.state.product.image}
                alt='Product Image'
                style={{ width: 200, marginTop: '1em' }}
              />
            ))} */}
          </GridCell>

        </Grid>
      </div>     
    )
  }
}

// Component Properties
// CreateOrEdit.propTypes = {
//   productCreateOrUpdate: PropTypes.func.isRequired,
//   getProductById: PropTypes.func.isRequired,
//   getProductTypes: PropTypes.func.isRequired,
//   getUserGenders: PropTypes.func.isRequired,
//   upload: PropTypes.func.isRequired,
//   messageShow: PropTypes.func.isRequired,
//   messageHide: PropTypes.func.isRequired,
// }

// export default withRouter(
//   connect(null, {
//     productCreateOrUpdate,
//     getProductById,
//     getProductTypes,
//     getUserGenders,
//     upload,
//     messageShow,
//     messageHide,
//   })(CreateOrEdit)
// )

function profileState(state) {
  return {
    user: state.user,
  };
}

export default withRouter(connect(profileState, { logout, messageShow, messageHide })(EditProfile))


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