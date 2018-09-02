import React from 'react'
import StarRating from './StarRating'
import PropTypes from 'prop-types'


const Color = ({ title,color,rating,tiemstamp,id, onRemove=f=>f, onRate=f=>f}) => 
    <div className="colorcard">
        <button onClick={onRemove} className="removebtn">X</button>
        <h3>{title}</h3>
        <p>{rating}</p>
        <p>{color}</p>
        <p>{id}</p>
        <div className="colorshow" 
            style={{backgroundColor:color}}></div>
        <StarRating starsSelected={rating} onRate={onRate} />
    </div>

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func.isRequired,
    onRate: PropTypes.func
}

export default Color