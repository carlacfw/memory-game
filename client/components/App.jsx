import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Rules from './Rules'
import Board from './Board'

const App = () => {
  return (
    <div>
      <div className='title'><h1>JS Memory Game</h1></div>
      <Router>
        <div className='routes'>
          <Route exact path='/' component={Rules}/>
          <Route exact path='/board' component={Board}/>

          <footer><Link to='/'>Home</Link></footer>
        </div>
      </Router>
    </div>
  )
}


export default App
