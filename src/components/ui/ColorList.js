import React from 'react'
import PropTypes from 'prop-types'
import Color from './Color'

const ColorList = ({colors=[],onRemove=f=>f,onRate=f=>f}) => 
    <div className="colorlist">
        <h2>Color List</h2>
        {
            colors.map(color=>
                <Color 
                    key={color.id}
                    {...color}
                    onRate={(rating) => onRate(color.id, rating)}
                    onRemove={() => onRemove(color.id)}
                />
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default ColorList