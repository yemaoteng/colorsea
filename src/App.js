import React from 'react'
import AddColorForm from './AddColorForm'
import StarRating from './StarRating'

const logColor = (title,color) => {
    console.log(`TODO: add new ${title} and ${color} to the list`)
    console.log(`TODO: render UI with new Color`)
}

const App = () => 
    <div>
        <AddColorForm onNewColor={logColor}/>
        <StarRating />
    </div>

export default App
