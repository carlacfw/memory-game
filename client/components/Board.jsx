import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import allCards from '../../data/allCards'
import Card from './Card'

export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.shuffle([...allCards.cards]),
      revealed: [],
      tempRevealed: []
    }
  }
  shuffle(input) {
    for (var i = input.length-1; i >=0; i--) {
      var randomIndex = Math.floor(Math.random()*(i+1))
      var itemAtIndex = input[randomIndex]
      input[randomIndex] = input[i]
      input[i] = itemAtIndex
    }
    return input
  }
  checkMatch(card1, card2) {
    //if match_ids are equal, return true
    return false
  }
  checkTwoTemporaryCards(tempRevealed) {
    let {revealed} = this.state
    tempRevealed.length == 2
      return tempRevealed


    //check if there are two

    // tempRevealed = [] //only do this if there are two
    this.setState({tempRevealed, revealed})
  }
  clickCard(card) {
    console.log(card);
    let {tempRevealed} = this.state
    tempRevealed.push(card)
    if(tempRevealed.length == 2){
      return true
    } //check if there are two temporary cards
    this.checkTwoTemporaryCards(tempRevealed)
    this.setState({tempRevealed})
  }
  checkRevealed(card) {
    let {revealed, tempRevealed} = this.state
    // console.log(revealed.indexOf(card) != -1 || tempRevealed.indexOf(card) != -1);
    return (revealed.indexOf(card) != -1 || tempRevealed.indexOf(card) != -1)
  }
  render() {
    let {cards, revealed, tempRevealed} = this.state
    return (
      <div className="board">
        {cards.map((card) => {
          let isRevealed = this.checkRevealed(card)
          console.log({isRevealed});
          return (<Card isRevealed={isRevealed} card={card} clickCard={this.clickCard.bind(this)}/>)
        })}

      </div>
    )
  }
}

// export default function (props) {
//   function shuffle(input) {
//   for (var i = input.length-1; i >=0; i--) {
//     var randomIndex = Math.floor(Math.random()*(i+1))
//     var itemAtIndex = input[randomIndex]
//
//     input[randomIndex] = input[i]
//     input[i] = itemAtIndex
//   }
//   return input
// }

//
//   let cards = shuffle([...allCards.cards])
//   console.log(cards)
//   return (
//     <div className="board">
//       {cards.map((card) => {
//         return (<Card data={card}/>)
//       })}
//
//     </div>
//   )
// }
