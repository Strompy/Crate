// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Grid Component for styling 
//no props are required
//props listed are all true/false besides children & others
const Grid = (props) => {
  const {
    children,

    justifyRight,
    justifyCenter,

    alignTop,
    alignBottom,
    alignCenter,

    gutter,
    ...others
  } = props

  //React.Children deals with this.props.children for us by returning new mapped array when the array exists, but otherwise returning null or undefined without throwing an error 
  //usually returns an array of GridCells 
  const GridCells = React.Children.map(children, (GridCell) => {
    if (!GridCell) {
      return null
    }
    if (GridCell.props) {
      //returns the element with the gutter prop added in 
      return React.cloneElement(GridCell, { gutter })
    }
    return GridCell
  })

  //returns a Grid with all Grid Cells nested inside, with the Grid styled as defined on line 43+ based on the props 
  //Consult storybook grid.js to visualize UI 
  return (
    <div {...others}>
      {GridCells}

      {/* language=CSS */}
      <style jsx>{`
        div {
          display: flex;
          flex-flow: row;
          flex-wrap: wrap;

          ${ justifyRight ? 'justify-content: flex-end;' : '' }
          ${ justifyCenter ? 'justify-content: center;' : '' }

          ${ alignTop ? 'align-items: flex-start;' : '' }
          ${ alignBottom ? 'align-items: flex-end;' : '' }
          ${ alignCenter ? 'align-items: center;' : '' }

          ${ gutter ? 'margin-left: -1em;' : 'margin-left: 0;' }
        }
      `}</style>
    </div>
  )
}

// Component Properties
Grid.propTypes = {
  justifyRight: PropTypes.bool,
  justifyCenter: PropTypes.bool,

  alignTop: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignCenter: PropTypes.bool,

  gutter: PropTypes.bool,
}

Grid.defaultProps = {
  justifyRight: false,
  justifyCenter: false,

  alignTop: false,
  alignBottom: false,
  alignCenter: false,

  gutter: false,
}

export default Grid