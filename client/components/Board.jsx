import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import allCards from '../../data/allCards'
import Card from './Card'


export default function (props) {
  function shuffle(input) {
  for (var i = input.length-1; i >=0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1))
    var itemAtIndex = input[randomIndex]

    input[randomIndex] = input[i]
    input[i] = itemAtIndex
  }
  return input
}


  let cards = shuffle(allCards.cards)
  console.log(cards)
  return (
    <div className="board">
      {cards.map((card) => {
        return (<Card data={card}/>)
      })}

    </div>
  )
}
