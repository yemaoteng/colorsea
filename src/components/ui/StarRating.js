import React from 'react'
import Star from './Star'

const StarRating = ({ totalStar=5,rating,onRate=f=>f}) =>
    <div className="starrating">
        {
            [...Array(totalStar)].map((item,i)=>
                <Star key={i} selected={(rating>i)?true:false} onRate={()=>onRate(i+1)}/>
            )   
        }
    </div>

export default StarRating