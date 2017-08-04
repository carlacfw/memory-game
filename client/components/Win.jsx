import React from 'react'

export default function (props) {
  let {gameStats} = props
  console.log({gameStats});
  return (
    <div>
      Hello :
      {gameStats.isWin ? "You won" : "You Lost ;-;"}
    </div>
  )
}
