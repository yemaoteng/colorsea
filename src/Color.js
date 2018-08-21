import React from 'react'
import StarRating from './StarRating'
import PropTypes from 'prop-types'

class Color extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onRate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.style = {backgroundColor: "#CCC"}
  }

  shouldComponentUpdate = nextProps => {
    return this.props.rating !== nextProps.rating
  }
  
  componentWillUpdate(nextProps) {
    const {title,rating} = this.props
    this.style = null
    this.myRef.current.style.backgroundColor = "red"
    this.myRef.current.style.color = "white"
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
  }

  componentDidUpdate(prevProps) {
    const {title,rating} = this.props
    const status = (rating>prevProps.rating) ? 'better' : 'worse'
    console.log(`${title} is getting ${status}`)
    console.log(this.myRef.current)
    alert("DidUpdate")
    this.myRef.current.style.backgroundColor = ""
    this.myRef.current.style.color = "black"
    alert("DidBack")
  }

  render() {
    let {title,color,rating=0,onRate=f=>f,onRemove=f=>f} = this.props
    return (
    <section className="color_section" style={this.style} >
      <h1 ref={this.myRef}>{title}</h1>
      <button onClick={onRemove}>X</button>
      <div className="color" style={{backgroundColor:color}}></div>
      <div>
          <StarRating starsSelected={rating} onRate={onRate} />
      </div>
    </section>
  )
  }
  
}

export default Color