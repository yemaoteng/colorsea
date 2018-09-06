import React from 'react'
import PropTypes from 'prop-types'

const Star = ({selected,onClick=f=>f}) =>
    <div 
        className={selected?"star selectedStar":"star"} 
        onClick={onClick}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onRate: PropTypes.func
}

export default Star