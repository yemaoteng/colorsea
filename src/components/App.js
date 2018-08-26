import React from 'react'
import { NewColor, Colors, Menu } from './container';

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App