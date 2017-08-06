import React from 'react'

export default function Clock (props) {
  return (
    <div className='clock'>
    <p>You have 60 seconds to find the matches:</p>
    
    <p>{props.elapsedTime}</p>
    </div>
  )
}
