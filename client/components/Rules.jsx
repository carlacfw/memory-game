import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function(props) {
  return (
    <div className="rules">
      <h3>How the game works</h3>
      <p>The game has a time limit of 60 seconds</p>
      <p>The goal is matching the JavaScript symbols with their descriptions</p>
      <p>It will be easier if you have some basic knowledge in JavaScript and it's symbols</p>
      <h3>Are you ready for testing your knowledge?</h3>
      <div className='play'>
        <Link to='/board'>let's play</Link>
      </div>
    </div>
    )
}
