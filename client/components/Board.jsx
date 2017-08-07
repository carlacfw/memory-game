import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import allCards from '../../data/allCards'
import Card from './Card'
import Clock from './Clock'
import Win from './Win'

export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: this.shuffle([...allCards.cards]),
      revealed: [],
      tempRevealed: [],
      canClick: true,
      elapsedTime: 0,
      maxTime: 3,
      gameStarted: false,
      gameEnded: false,
      matches: 0,
      misses: 0,
      gameStats: {}
    }
  }
  checkWin(revealed) {
    let allMatches = revealed.length == this.state.cards.length
    let outOfTime = this.state.elapsedTime >= this.state.maxTime
    if (allMatches || outOfTime) {
      this.setState({gameEnded: true})
      let {misses, matches, elapsedTime} = this.state
      let isWin = allMatches
      let gameStats = {isWin, misses, matches, elapsedTime}
      console.log(gameStats);
      this.setState({gameStats})

    }
  }
  /*checkWin function takes the revealed array and checks the status of the game
  if it is allMatches or outOfTime the reason that the game is ended*/

  startTimer() {
    setInterval(()=>{
      if (!this.state.gameEnded) {
        if (this.state.elapsedTime >= this.state.maxTime ) this.setState({canClick: false, gameEnded: true})
        else this.setState({elapsedTime: this.state.elapsedTime +1, gameStarted: true})
      }
    }, 2000)
  }
  /**/

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
    let {revealed, matches, misses} = this.state
    if (tempRevealed.length != 2) {
      this.setState({tempRevealed, canClick: true})
      return;
    }
    if (this.checkMatch(tempRevealed[0], tempRevealed[1])) {
      revealed.push(tempRevealed[0])
      revealed.push(tempRevealed[1])
      this.checkWin(revealed)
      this.setState({revealed, tempRevealed: [], canClick: true, matches: matches +1})

    } else {
      this.setState({canClick: false})
      setTimeout(() => {
        console.log("timeout");
        this.checkWin(revealed)
        this.setState({tempRevealed: [], canClick: true, misses: misses +1})
      }, 2000 )
    }
  }
  clickCard(card) {
    let {tempRevealed, canClick, revealed,gameStarted} = this.state
    if (!gameStarted) this.startTimer()
    if (!canClick || tempRevealed.indexOf(card) != -1 || revealed.indexOf(card) != -1)
    return
    tempRevealed.push(card)
    this.checkTwoTemporaryCards(tempRevealed)
  }
  checkRevealed(card) {
    let {revealed, tempRevealed} = this.state
    return (revealed.indexOf(card) != -1 || tempRevealed.indexOf(card) != -1)
  }

  /*function refreshPage(){
    window.parent.location = window.parent.location.href
  }*/

  render() {
    let {cards, revealed, tempRevealed, elapsedTime, canClick, matches, misses, gameEnded, gameStats}  = this.state
    // console.log({tempRevealed, revealed});
    console.log(gameEnded);
    console.log({gameStats});
    return (
      <div>
        {!gameEnded &&
          <div>
            <Clock elapsedTime={elapsedTime}/>
            <h4>{!canClick ? "Wait for it!" : "Choose your card!"}</h4>
            <h1>matches: {matches} misses: {misses}</h1>
          </div>
        }
        <div className='game-board'>
        {!gameEnded &&
          <div className="board">
            {cards.map((card, i) => {
              let isRevealed = this.checkRevealed(card)
              return (<Card key={i} isRevealed={isRevealed} canClick={canClick} card={card} clickCard={this.clickCard.bind(this)}/>)
            })}

          </div>
        }
      </div>
        <div className='game-over'>
        <h1>matches: {matches} misses: {misses}</h1>
        {gameEnded == true && <h1>Game over</h1>}
        {gameEnded && <Win gameStats={gameStats} />}
        </div>
      </div>
    )
  }
}
