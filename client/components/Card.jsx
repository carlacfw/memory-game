import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'



export default function (props) {
  return (
    <div className="card">
      <p>{props.data.matchId}</p>

    </div>
  )
}
