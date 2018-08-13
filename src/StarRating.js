import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class StarRating extends Component {
    constructor(props){
        super(props)
        this.state={
            starsSelected: prop.starsSelected || 0
        }
        this.change = this.change.bind(this)
    }
    change(starsSelected) {
        this.setState({starsSelected})
    }
    render() {
        const {totalStarts} = this.props
        const {starsSelected} = this.state
        return (
        <div className="star-rating">
            {[...Array(totalStarts)].map((n,i)=>
                <Star key={i}
                      selected={i<starsSelected}
                      onClick={()=>this.change(i+1)}
                />
            )}
            <p>{starsSelected} of {totalStarts} stars</p>
        </div>
        )
    }
}

StarRating.propTypes = {
    totalStarts: PropTypes.number
}

StarRating.defaultProps = {
    totalStarts: 5
}

export default StarRating
