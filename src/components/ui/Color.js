import React from 'react'
import StarRating from './StarRating'

const Color = ({ color, onRemvoe=f=>f, onRate=f=>f}) => 
    <div className="colorcard">
        <button onClick={onRemvoe} className="removebtn">X</button>
        <h3>{color.title}</h3>
        <p>{color.rating}</p>
        <p>{color.color}</p>
        <div className="colorshow" 
            style={{backgroundColor:color.color}}></div>
        <StarRating rating={color.rating} onRate={onRate} />
    </div>

export default Color