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
      tempRevealed: [],
      canClick: true
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
    return card1.matchId == card2.matchId
  }
  checkTwoTemporaryCards(tempRevealed) {
    let {revealed} = this.state
    if (tempRevealed.length == 2) {
      if (this.checkMatch(tempRevealed[0], tempRevealed[1])) {
        revealed.push(tempRevealed[0])
        revealed.push(tempRevealed[1])
        this.setState({revealed, canClick: true})
      }
      tempRevealed = []
      this.setState({canClick: false})
      setTimeout(() => {
        console.log("timeout");
        this.setState({tempRevealed, canClick: true})
      }, 3000 )
    } else this.setState({tempRevealed, canClick: true})

  }
  clickCard(card) {
    let {tempRevealed, canClick} = this.state
    if (!canClick) return
    tempRevealed.push(card)
    this.checkTwoTemporaryCards(tempRevealed)
  }
  checkRevealed(card) {
    let {revealed, tempRevealed} = this.state
    return (revealed.indexOf(card) != -1 || tempRevealed.indexOf(card) != -1)
  }
  render() {
    let {cards, revealed, tempRevealed} = this.state
    console.log({tempRevealed, revealed});
    return (
      <div className="board">
        {cards.map((card, i) => {
          let isRevealed = this.checkRevealed(card)
          return (<Card key={i} isRevealed={isRevealed} card={card} clickCard={this.clickCard.bind(this)}/>)
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
