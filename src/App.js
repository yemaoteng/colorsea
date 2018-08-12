import React from 'react'
import AddColorForm from './AddColorForm'

const logColor = (title,color) => {
    console.log(`TODO: add new ${title} and ${color} to the list`)
    console.log(`TODO: render UI with new Color`)
}

const App = () => <AddColorForm onNewColor={logColor}/>

export default App
