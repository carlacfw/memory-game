import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'




export default function (props) {
  let {gameStats} = props
  console.log(props);
  return (
    <div className='won'>
      {gameStats.isWin ? "You won! " : "Sorry, you lost! "}
      
    </div>
  )

}
