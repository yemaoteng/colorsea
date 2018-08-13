import React from 'react'
import AddColorForm from './AddColorForm'
import StarRating from './StarRating'

const logColor = (title,color) => {
    console.log(`TODO: add new ${title} and ${color} to the list`)
    console.log(`TODO: render UI with new Color`)
}

var colorData = {
    color: [
        {
            "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
            "title": "coean at dusk",
            "color": "#26ac56",
            "rating": 5
        },
        {
            "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
            "title": "lawn",
            "color": "#26ac56",
            "rating": 3
        },
        {
            "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
            "title": "bright red",
            "color": "#ff0000",
            "rating": 0
        }
    ]
}

const App = () => 
    <div>
        <AddColorForm onNewColor={logColor} />
        <StarRating colorData={colorData} />
    </div>

export default App
