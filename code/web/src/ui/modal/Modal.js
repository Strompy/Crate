// Imports. This file could potentially be used to edit profile information?
import React from 'react' // imports react for JSX and functional component
import PropTypes from 'prop-types' // imports PropTypes object from prop-types library

// Component
const Modal = (props) => {
  const { children, visible, ...other } = props // visible is a boolean to change if component is hidden
  // Returns styled div to contain whatever childeren in the modal ⤵
  return ( 
    <div {...other} style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9,
      visibility: (visible ? 'visible' : 'hidden'),
      opacity: (visible ? 1 : 0),
      transition: 'opacity 0.25s ease-in-out'
    }}>
      {/* the below div creates a filter to blur the background I think? */}
      <div style={{
        background: `url('/images/cover.jpg') top center`,
        backgroundSize: 'cover',
        position: 'fixed',
        top: '-40px',
        right: '-40px',
        bottom: '-40px',
        left: '-40px',
        zIndex: -1,
        filter: 'blur(25px)'
      }}/>
      {/* children are whatever is rendered in the modal, must be passed in as props */}
      {children}
    </div>
  )
}

// Component Properties
Modal.propTypes = {
  visible: PropTypes.bool.isRequired // A boolean value is required for a modal to do what it is meant to do.
}
Modal.defaultProps = {
  visible: false // by default, the modal is hidden.
}

export default Modal