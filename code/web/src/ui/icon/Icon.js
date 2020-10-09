// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component for Styled Icon
//accepts optional props
const Icon = (props) => {
  const { children, size, ...other } = props

  //returns an icon with styling specified on line 16
  //className material-icons styling does not appear to be defined
  return (
    <i className="material-icons" {...other}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        i {
          font-size: ${ size }em;
          line-height: inherit;
          vertical-align: middle;
        }
      `}</style>
    </i>
  )
}

// Component Properties
Icon.propTypes = {
  size: PropTypes.number
}
Icon.defaultProps = {
  size: 1
}

export default Icon