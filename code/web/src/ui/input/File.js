// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import { grey2, grey4, black, white } from '../common/colors'
import { primary, secondary } from "../common/gradients"
import { level1, level2, level3, level4 } from "../common/shadows"
import Icon from '../icon'

// Component template for a File Upload Input 
//Require props: text, name, style; others optional
const File = (props) => {
  const { text, style, name, ...other } = props

  //returns a div with label & input field, styled as specified on line 32
  return (
    <div>
      <div className="file-upload" style={style}>
        <label htmlFor={`file-upload-${ name }`} className="file-upload__label"><Icon
          size={1.2}>file_upload</Icon> {text}</label>
        {/* This input type automatically brings up option to choose file from your computer */}
        <input
          className="file-upload__input"
          type="file"
          name={name}
          id={`file-upload-${ name }`}
          {...other}
        />
      </div>

      {/* language=CSS */}
      <style jsx>{`
        .file-upload {
          position: relative;
          display: inline-block;
        }

        .file-upload__label {
          display: block;
          padding: 0.8em 1.8em;
          border: none;
          border-radius: 1.4em;
          text-transform: uppercase;
          font-family: 'Roboto', sans-serif;
          cursor: pointer;
          outline: none;
          font-size: 1em;
          color: ${ black };
        }
        .file-upload__label:hover {
          box-shadow: ${ level3 };
        }
        .file-upload__label:active {
          box-shadow: ${ level4 };
        }
        .file-upload__label:disabled {
          color: ${ white };
          box-shadow: ${ level1 };
          background-color: ${ grey2 };
          background-image: none;
        }

        .file-upload__input {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          font-size: 1;
          width:0;
          height: 100%;
          opacity: 0;
        }
        `}
      </style>
    </div>
  )
}

// Component Properties
File.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.object,
}
File.defaultProps = {
  text: 'Upload File',
  name: 'file',
  style: {},
}

export default File