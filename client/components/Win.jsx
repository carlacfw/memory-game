import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Button from 'simple-react-button'




export default function (props) {
  let {gameStats} = props
  console.log(props);
  return (
    <div className='won'>
      {gameStats.isWin ? "You won! " : "Sorry, you lost! "}

        <Button full onClick={() => {console.log('Hey I Worked')}}>
    Click Me
</Button>

    </div>
  )

}
