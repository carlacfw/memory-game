import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Button from 'simple-react-button'




export default function (props) {
  let {gameStats} = props
  return (
    <div className='won'>
      {gameStats.isWin ? "You won! " : "Sorry, you lost! "}
    <div className='button'>
      <Button value='Play again' clickHandler={() => {window.location.reload()}}>
    Play again!
      </Button>
      </div>

    </div>
  )

}
/*the button don't need any function it only reloads the page*/
