import React from 'react'
import StarRating from './StarRating'
import PropTypes from 'prop-types'


const Color = ({ color, onRemvoe=f=>f, onRate=f=>f}) => 
    <div className="colorcard">
        <button onClick={()=>onRemvoe(color.id)} className="removebtn">X</button>
        <h3>{color.title}</h3>
        <p>{color.rating}</p>
        <p>{color.color}</p>
        <div className="colorshow" 
            style={{backgroundColor:color.color}}></div>
        <StarRating rating={color.rating} onRate={onRate} />
    </div>

Color.propTypes = {
    color: PropTypes.object,
    onRemvoe: PropTypes.func,
    onRate: PropTypes.func
}

export default Color