// Imports
import React from 'react' // Imports react to write JSX and create a component
import PropTypes from 'prop-types' // Import proptypes object from prop-types library

// UI Imports
import { grey2, grey4, black } from '../common/colors' // Import color variables

// Component
const Input = (props) => {
  const { type, fullWidth, ...other } = props // internally destructure props (input attributes will be passed in individually as props and collected in ...other)

  return (
    <div>
      <input type={type} {...other} /> 

      {/* language=CSS */}
      {/* styling for the input element */}
      <style jsx>{`
        input {
          outline: none;
          padding-top: 0.8em;
          padding-bottom: 0.4em;
          font-size: 1em;
          border: none;
          background-color: transparent;
          color: ${ black };
          border-bottom: 1px solid ${ grey2 };
          width: ${ fullWidth ? '100%' : 'auto' };
        }
        input:hover {
          border-bottom: 1px solid ${ grey4 };
        }
        input:active {
          border-bottom: 1px solid ${ grey4 };
        }
      `}</style>
    </div>
  )
}

// Component Properties
Input.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool
}
Input.defaultProps = {
  type: 'button',
  fullWidth: false
}

export default Input