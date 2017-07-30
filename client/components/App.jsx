import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Rules from './Rules'

const App = () => {
  return (
    <div className='home-page'>
    <h1>JS Memory Game</h1>
    <Router>
      <div className='routes'>
        <Route exact path='/' component={Rules}/>
      </div>

    </Router>
    </div>
  )
}

export default App
