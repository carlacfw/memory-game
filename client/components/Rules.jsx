import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function(props) {
  return (
    <div className="rules">
      <h3>Are you ready for testing your knowledge?</h3>
      <p></p>
      <Link to='/board'>let's play</Link>
    </div>
  )
}
