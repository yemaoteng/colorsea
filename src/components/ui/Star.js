import React from 'react'
import PropTypes from 'prop-types'

const Star = ({selected,onRate=f=>f}) =>
    <div 
        className={selected?"star selected":"star"} 
        onClick={onRate}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onRate: PropTypes.func
}

export default Star