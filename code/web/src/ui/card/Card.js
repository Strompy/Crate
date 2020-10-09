// Imports
import React from 'react'

// UI Imports
import { level1 } from '../common/shadows'

//Component that is like a template for a Card
//can reference card.js in storybook to see example UI of card 
//no props are required; can just return a div with the styling specified
const Card = (props) => {
  const { children, ...other } = props

  return (
    <div {...other}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        div {
          border-radius: 0.2em;
          font-family: 'Roboto', sans-serif;
          box-shadow: ${ level1 };
        }
        `}
      </style>
    </div>
  )
}

export default Card