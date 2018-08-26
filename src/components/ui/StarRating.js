import React from 'react'
import Star from './Star'
import PropTypes from 'prop-types'

const StarRating = ({ totalStar=5,starsSelected,onRate=f=>f}) =>
    <div className="starrating">
        {
            [...Array(totalStar)].map((n,i)=>
                <Star key={i} 
                    selected={(starsSelected>i)?true:false} 
                    onClick={()=>onRate(i+1)}/>
            )   
        }
    </div>

StarRating.propTypes = {
    rating: PropTypes.number,
    onRate: PropTypes.func
}

export default StarRating