import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Rules from './Rules'
import Board from './Board'

const App = () => {
  return (
    <div className='home-page'>
    <h1>JS Memory Game</h1>
    <Router>
      <div className='routes'>
        <Route exact path='/' component={Rules}/>
        <Route exact path='/board' component={Board}/>


      </div>

    </Router>



    </div>
  )
}

export default App
