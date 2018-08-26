import React from 'react'
import { NewColor, Colors, Menu } from './containers';

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App