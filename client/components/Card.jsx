import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Card ({isRevealed, card, clickCard, canClick}) {
  var style = {cursor: canClick ? 'pointer' : 'wait'}
  return (
    <div style={style} className="card" onClick={() => clickCard(card)}>
      {isRevealed && <p>{card.text}</p>}
    </div>
  )
}
