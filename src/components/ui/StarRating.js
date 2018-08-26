import React from 'react'
import Star from './Star'
import PropTypes from 'prop-types'

const StarRating = ({ totalStar=5,rating,onRate=f=>f}) =>
    <div className="starrating">
        {
            [...Array(totalStar)].map((item,i)=>
                <Star key={i} selected={(rating>i)?true:false} onRate={()=>onRate(i+1)}/>
            )   
        }
    </div>

StarRating.propTypes = {
    rating: PropTypes.number,
    onRate: PropTypes.func
}

export default StarRating