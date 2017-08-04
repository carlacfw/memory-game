import React from 'react'

export default function Clock (props) {
  return (
    <p className="clock">You have 60 seconds to find the matches:{props.elapsedTime}</p>
  )
}
